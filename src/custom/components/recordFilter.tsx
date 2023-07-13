import { PrimarySelect } from "components/inputs";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useGetGroupsQuery } from "store/group";
import { useProject } from "store/projects";
import { communities, localGov, states } from "utilities";

export interface RecordFilterProps {
  query?: (value?: string) => void;
  state?: (value?: string) => void;
  lga?: (value?: string) => void;
  community?: (value?: string) => void;
}

export const RecordFilter: React.FC<RecordFilterProps>= ({
  query = () => {},
  state = () => {}, 
  lga = () => {}, 
  community = () => {}, 
}) => {
  const projectId: number = useProject().project.id;
  const { isLoading } = useGetGroupsQuery({ page: 1, query: "", project_id: projectId });
  const initRequest = () => { const payload: any = { ...values } };

  const { values, handleChange } = useFormik({
      initialValues: { 
        lga: "", 
        state: "", 
        community: "",
        query: "" 
      }, onSubmit: async () => initRequest(),
  });

  useEffect(() => {
    if (values.query) query(values.query);
    if (values.state) state(values.state);
    if (values.community) community(values.community);
    if (values.lga) lga(values.lga);
  }, [values]);

    return (
      <div className="col-xl-12">
        <div className="row g-3 mb-4">
          {/* <div className="col-auto">
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
          </div> */}
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

         
        </div>
      </div>
    ); 
};


