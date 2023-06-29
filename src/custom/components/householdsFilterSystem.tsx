import { PrimaryInput, PrimarySelect } from "components/inputs";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useGetGroupsQuery } from "store/group";
import { useGetInterventionsQuery } from "store/intervention";
import { AddGroupScheme } from "validations/group";
import { useFormik } from "formik";
import { useProject } from "store/projects";
import { states, localGov, communities } from "utilities";

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
        <div className="row g-3 mb-4">
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
            <PrimarySelect 
              name="state"
              placeholder="Select State"
              options={ states }
              onChange={handleChange}
              size={"lg"}
              isDisabled={isLoading}
              style={{ backgroundColor: "#fff", border: "none", borderRadius: 0 }}
            />
          </div>
          {(values.state.length ? 
            <div className="col-auto">
              <PrimarySelect 
                name="lga"
                placeholder="Select Local Gov"
                options={ localGov(Number(values.state)) }
                onChange={handleChange}
                size={"lg"}
                isDisabled={isLoading}
                style={{ backgroundColor: "#fff", border: "none", borderRadius: 0 }}
              />
            </div> : <></> )}

            {(values.state.length && values.lga.length ? 
              <div className="col-auto">
                <PrimarySelect
                  name="community"
                  placeholder="Select Community"
                  options={ communities(Number(values.state), Number(values.lga)) }
                  onChange={handleChange}
                  size={"lg"}
                  isDisabled={isLoading}
                  style={{ backgroundColor: "#fff", borderRadius: 0, border: 0 }}
                />
              </div> : <></> )}

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

          <div className="col-3">
            <PrimaryInput
              name="Income"
              placeholder="Income, ₦"
              onChange={handleChange}
              rightComponent={<FaPlus color={"grey"} />}
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


