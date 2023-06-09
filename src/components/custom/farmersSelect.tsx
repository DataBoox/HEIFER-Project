import { useToast } from "@chakra-ui/react";
import {
  FetchFarmersPayload,
  useFetchFarmersMutation,
  ChurchFarmersResponse,
} from "store/farmers";
import {
  PrimaryMultiSelect,
  PrimaryMultiSelectOption,
  PrimaryMultiSelectProp,
} from "components/inputs";
import { useEffect, useState } from "react";
import { validationError } from "utilities";
import _ from "lodash";

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
  const [records, setRecords] = useState<FetchFarmersPayload>({
    ...payload,
  });

  const fetchFarmersMutation = useFetchFarmersMutation();

  useEffect(() => {
    initFetch();
  }, [records, fetchFarmersMutation]);

  useEffect(() => {
    let val = options.find((m) => m.id === selectedValue);
    if (val) setValue(val);
  }, [selectedValue]);

  const initFetch = (page = 1) => {
    if (page) {
      const queryParams = new URLSearchParams({
        project_id: records.project_id?.toString() ?? "",
      });
      const url = `projects/farmers?${queryParams}`;

      fetch(url)
        .then((response) => response.json())
        .then((res: ChurchFarmersResponse) => {
          let mappedOptions: PrimaryMultiSelectOption[] = res.data.map(
            (mem: { lname: string; fname: string; id: any }) => ({
              label: _.startCase(`${mem.lname} ${mem.fname}`),
              value: mem.id,
            })
          );
          const groupedRecords = {
            label: `Showing ${mappedOptions.length} of ${res.total} results`,
            value: "",
            options: mappedOptions,
          };
          const responseOptions = [groupedRecords];
          setOptions(responseOptions);
        })
        .catch((error: any) => {
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
      onInputChange={(val) => setRecords((prev) => ({ ...prev, query: val }))}
      {...rest}
    />
  );
};
