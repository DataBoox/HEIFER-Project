import { PrimaryInput, PrimarySelect } from "components/inputs";
import { FaSearch } from "react-icons/fa";
import { useGetGroupsQuery } from "store/group";
import { useGetInterventionsQuery } from "store/intervention";
import { AddGroupScheme } from "validations/group";
import { useFormik } from "formik";
import { useProject } from "store/projects";
import { states, localGov, communities } from "utilities";
import { useEffect, useState } from "react";

export interface FilterSystemProps {
  query?: (value?: string) => void;
}

export const FilterSystem: React.FC<FilterSystemProps>= ({query = () => {}}) => {
  const projectId: number = useProject().project.id;
  const { data: interventions } = useGetInterventionsQuery({ project_id: projectId });
  const interventionNames = interventions?.data.data.map((data: { name: any; id: any; }) => {
    return { text: `${data.name}`, props: { value: data.id  }}
  })
  const { isLoading } = useGetGroupsQuery({ page: 1, query: "", project_id: projectId });
  const initRequest = () => { const payload: any = { ...values } };

  const { values, handleChange } = useFormik({
      initialValues: { 
        lga: "", 
        state: "", 
        intervention: "", 
        community: "",
        query: "" 
      }, onSubmit: async () => initRequest(),
  });

  useEffect(() => {
    if (values.query) query(values.query);
  }, [values]);

    return (
      <div className="col-xl-12">
        <div className="row g-3 mb-4">
          <div className="col-auto">
            <PrimaryInput
              name="search"
              placeholder="Search ..."
              size={"lg"}
              rightComponent={<FaSearch color={"grey"} />}
              onChange={({ target }) => query(target.value)}
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
                options={ localGov(values.state) }
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
                  options={ communities(values.state, values.lga) }
                  onChange={handleChange}
                  size={"lg"}
                  isDisabled={isLoading}
                  style={{ backgroundColor: "#fff", borderRadius: 0, border: 0 }}
                />
              </div> : <></> )}

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


