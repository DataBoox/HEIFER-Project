import { PrimaryInput, PrimarySelect } from "components/inputs";
import { FaSearch } from "react-icons/fa";
import { StateLGAInput } from "./stateLgaInputs";
import { useGetGroupsQuery } from "store/group";
import { useGetInterventionsQuery } from "store/intervention";
import { AddGroupScheme } from "validations/group";
import { useFormik } from "formik";
import { useProject } from "store/projects";


export const HouseholdFilterSystem = () => {
  const projectId: number = useProject().project.id;
  const { data: interventions } = useGetInterventionsQuery({ project_id: projectId });
  const interventionNames = interventions?.data.data.map((data: { name: any; id: any; }) => {
    return { text: `${data.name}`, props: { value: data.id  }}
  })
    const { isLoading } = useGetGroupsQuery({
        page: 1,
        query: "",
    });
    const initRequest = () => {
        const payload: any = {
            ...values,
        };
    };
    const {
        values,
        errors,
        setValues,
        handleChange,
        setFieldTouched,
        touched,
    } = useFormik({
        initialValues: {
            gname: "",
            createdby: "",
            lga: "",
            location: "",
            state: "",
            farmers: "",
            intervention: "",
        },
        validationSchema: AddGroupScheme(),
        onSubmit: async () => initRequest(),
    });
    return (
      <div className="col-xl-12">
        <div className="row g-3 p-4 mb-2">
          <div className="col-auto">
            <PrimaryInput
              name="search"
              placeholder="Search ..."
              size={"lg"}
              rightComponent={<FaSearch color={"grey"} />}
              // onChange={({ target }) => onSearch(target.value)}
              isDisabled={isLoading}
              style={{
                backgroundColor: "#ffff",
                borderRadius: 0,
                border: 0,
              }}
            />
          </div>
          <div className="col-auto">
            <div className="row">
              <StateLGAInput
                state={values.state}
                lga={values.lga}
                errors={errors}
                touched={touched}
                stateInputProps={{
                  label: "",
                  size: "lg",
                  isDisabled: isLoading,
                }}
                areaInputProps={{
                  label: "",
                  size: "lg",
                  isDisabled: isLoading,
                }}
                stateContainerProps={{
                  className: "col-auto",
                }}
                areaContainerProps={{
                  className: "col-auto",
                }}
                onChange={({ lga, state }) => {
                  setFieldTouched("state", true);
                  setFieldTouched("lga", true);
                  setValues({ ...values, lga, state });
                }}
              />
            </div>
          </div>
          <div className="col-3">
            <PrimarySelect
              name="Community"
              placeholder="Select Community"
              options={interventionNames}
              onChange={handleChange}
              size={"lg"}
              isDisabled={isLoading}
              style={{
                backgroundColor: "#ffff",
                borderRadius: 0,
                border: 0,
              }}
            />
          </div>

          <div className="col-3">
            <PrimarySelect
              name="All Age Groups"
              placeholder="Select Age Group"
              options={interventionNames}
              onChange={handleChange}
              size={"lg"}
              isDisabled={isLoading}
              style={{
                backgroundColor: "#ffff",
                borderRadius: 0,
                border: 0,
              }}
            />
          </div>

          <div className="col-3">
            <PrimarySelect
              name="All Gender"
              placeholder="Select All Gender"
              options={interventionNames}
              onChange={handleChange}
              size={"lg"}
              isDisabled={isLoading}
              style={{
                backgroundColor: "#ffff",
                borderRadius: 0,
                border: 0,
              }}
            />
          </div>


          <div className="col-3">
            <PrimarySelect
              name="Intervention"
              placeholder="Select Intervention"
              options={interventionNames}
              onChange={handleChange}
              size={"lg"}
              isDisabled={isLoading}
              style={{
                backgroundColor: "#ffff",
                borderRadius: 0,
                border: 0,
              }}
            />
          </div>
        </div>
      </div>
    ); 
};


