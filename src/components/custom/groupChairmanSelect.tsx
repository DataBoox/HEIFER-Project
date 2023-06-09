// import { PrimarySelect, PrimarySelectProp } from "components";

// interface GroupChairmanSelectProps extends PrimarySelectProp {}
// export const GroupChairmanSelect: React.FC<GroupChairmanSelectProps> = ({
//   ...rest
// }) => {
//   return (
//     <PrimarySelect
//       label="Group Chairman"
//       placeholder="Select chairman"
//       {...rest}
//     >
//       <option value="rice">Adeyemi Bourdillon</option>
//       <option value="tomato">Adamu Ednut</option>
//       <option value="poultry">Alani Coker</option>
//       <option value="poultry">Dele Powell</option>
//       <option value="poultry">Ajayi Townsend</option>
//     </PrimarySelect>
//   );
// };

// import { useEffect, useState } from "react";
// import { PrimarySelect, PrimarySelectProp } from "components";

// interface GroupChairmanSelectProps extends PrimarySelectProp {}

// export const GroupChairmanSelect: React.FC<GroupChairmanSelectProps> = ({
//   ...rest
// }) => {
//   const [farmers, setFarmers] = useState<string[]>([]);

//   useEffect(() => {
//     // Fetch the data from the other table on the dashboard and set it to the farmers state
//     const fetchData = async () => {
//       try {
//         // Make an API call or perform any necessary operations to get the list of farmers
//         const response = await fetch("/api/farmers");
//         const data = await response.json();
//         setFarmers(data); // Assuming data is an array of farmer names
//       } catch (error) {
//         console.error("Error fetching farmers:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <PrimarySelect
//       label="Group Chairman"
//       placeholder="Select chairman"
//       {...rest}
//     >
//       {farmers.map((farmer) => (
//         <option key={farmer} value={farmer}>
//           {farmer}
//         </option>
//       ))}
//     </PrimarySelect>
//   );
// };

import { useToast } from "@chakra-ui/react";
import { FetchFarmersPayload, useGetFarmersQuery } from "store/farmers";
import {
  PrimaryMultiSelect,
  PrimaryMultiSelectOption,
  PrimaryMultiSelectProp,
} from "components/inputs";
import { useEffect, useState } from "react";
import { validationError } from "utilities";
import _ from "lodash";
import { useProject } from "store/projects";

interface SelectFarmersInputProps extends PrimaryMultiSelectProp {
  selectedValue?: string | number;
  payload?: FetchFarmersPayload;
}

export const SelectFarmersInput: React.FC<SelectFarmersInputProps> = ({
  selectedValue,
  payload,
  ...rest
}) => {
  const [value, setValue] = useState<PrimaryMultiSelectOption>();
  const [options, setOptions] = useState<PrimaryMultiSelectOption[]>([]);
  const toast = useToast({ position: "top-right" });
  const [records, setRecords] = useState({
    ...payload,
  });
  const projectId: number = useProject().getProject()?.id;
 const { data, isLoading, refetch } = useGetFarmersQuery({
   page: 1,
   query: "",
   project_id: projectId,
 });

  useEffect(() => {
    initFetch();
  }, [records]);

  useEffect(() => {
    let val = options.find((m) => m.id === selectedValue);
    if (val) setValue(val);
  }, [selectedValue]);

  const initFetch = (page = 1) => {
    if (page) {
      let payload = records;

      fetch(payload)
        .unwrap()
        .then((res: { data: { data: any[]; total: any; }; }) => {
          // console.log(res);
          let mappedOptions: PrimaryMultiSelectOption[] = res.data.data.map(
            (mem: { first_name: any; last_name: any; id: any; }) => ({
              label: _.startCase(`${mem.first_name} ${mem.last_name}`),
              value: mem.id,
            })
          );
          // set info about records fetched
          const groupedRecords = {
            label: `Showing ${mappedOptions.length} of ${res.data.total} results`,
            value: "",
            options: mappedOptions,
          };
          const responseOptions = [groupedRecords];
          // set response options with about records
          setOptions(responseOptions);
        })
        .catch((error: { data: { response: object; }; }) => {
          // console.log(error);
          toast({
            title: "Request Failed",
            description: validationError(error?.data?.response),
            status: "error",
          });
        });
    }
  };

  return (
    <PrimaryMultiSelect
      options={options}
      value={value}
      isLoading={isLoading}
      onInputChange={(val) => setRecords((prev) => ({ ...prev, query: val }))}
      {...rest}
    />
  );
};