import { PrimaryInput, PrimarySelect } from "components/inputs";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useGetGroupsQuery } from "store/group";
import { useGetInterventionsQuery } from "store/intervention";
import { useProject } from "store/projects";
import { communities, locals, states, state } from "utilities";
import { useAuth } from "store/auth";
import { useGetUserInfoQuery } from "store/user";

export interface FilterSystemProps {
  query?: (value?: string) => void;
  state?: (value?: string) => void;
  lga?: (value?: string) => void;
  community?: (value?: string) => void;
  intervention?: (value?: Array<number | string>) => void;
}

export const FilterSystem: React.FC<FilterSystemProps>= ({
  query = () => {},
  state = () => {}, 
  lga = () => {}, 
  intervention = () => {}, 
  community = () => {}, 
}) => {
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

  const userId = Number(useAuth().user?.user_info?.id)
  const { data: user } = useGetUserInfoQuery({ uid: userId });
  const[userState, setUserState] = useState("")
  const userRole = user?.data?.user?.account_type;

  useEffect(() => {
    if (values.query) query(values.query);
    if (values.state) state(values.state);
    if (values.community) community(values.community);
    if (values.lga) lga(values.lga);
    if (values.intervention) intervention([Number(values.intervention)]);

    const except = "community_facilitator state_coordinator"
    if (except.includes(userRole)) values.state = user?.data?.state ?? "";
    if (except.includes(userRole)) setUserState(values.state);
    if ("community_facilitator".includes(userRole)) values.lga = user?.data?.lga ?? "";

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
              options={ states(userState) }
              onChange={handleChange}
              size={"lg"}
              isDisabled={isLoading}
              style={{ backgroundColor: "#fff", border: "none", borderRadius: 0 }}
            />
          </div>
          
          <div className="col-auto">
            <PrimarySelect 
              name="lga"
              placeholder="Select Local Gov"
              options={ locals(values.state, values.lga) }
              onChange={handleChange}
              size={"lg"}
              isDisabled={isLoading}
              style={{ backgroundColor: "#fff", border: "none", borderRadius: 0 }}
            />
          </div>

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
          </div>

            <div className="col-3">
              <PrimarySelect
                name="intervention"
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


