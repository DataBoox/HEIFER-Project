import { AgeCategorySelect, GenderSelect, PrimaryInput, PrimarySelect } from "components";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useGetGroupsQuery } from "store/group";
import { useGetInterventionsQuery } from "store/intervention";
import { useProject } from "store/projects";
import { communities, locals, states } from "utilities";
import { useAuth } from "store/auth";
import { useGetUserInfoQuery } from "store/user";

export interface HouseholdFilterSystemProps {
  gender?: (value?: string) => void;
  age?: (value?: string) => void;
  state?: (value?: string) => void;
  lga?: (value?: string) => void;
  community?: (value?: string) => void;
  intervention?: (value?: Array<number | string>) => void;
  income?: (value?: string) => void;
  query?: (value?: string) => void;
}

export const HouseholdFilterSystem: React.FC<HouseholdFilterSystemProps> = ({ 
  gender = () => {}, 
  age = () => {}, 
  state = () => {}, 
  lga = () => {}, 
  intervention = () => {}, 
  community = () => {}, 
  income = () => {},
  query = () => {},
}) => {
  const projectId: number = useProject().project.id;
  const { data: interventions } = useGetInterventionsQuery({ project_id: projectId });
  const interventionNames = interventions?.data.data.map((data: { name: any; id: any; }) => {
    return { text: `${data.name}`, props: { value: data.id  }}
  })
  const initRequest = () => { const payload: any = {...values };};
  const { values, handleChange } = useFormik({ 
    initialValues: {
      lga: "", location: "", community: "",
      state: "", farmers: "", age: "", query:"",
      gender: "", intervention: "", income: "", farmer_age_category: "",
    },onSubmit: async () => initRequest(),
  });

    const userId = Number(useAuth().user?.user_info?.id)
    const { data: user, isLoading } = useGetUserInfoQuery({ uid: userId });
    const[userState, setUserState] = useState("_")
    const userRole = user?.data?.user?.account_type;

    useEffect(() => {
      if (values.gender) gender(values.gender);
      if (values.age) age(values.age);
      if (values.state) state(values.state);
      if (values.community) community(values.community);
      if (values.lga) lga(values.lga);
      if (values.intervention) intervention([Number(values.intervention)]);
      if (values.income) income(values.income);
      if (values.query) query(values.query);

      const except = "community_facilitator state_coordinator"
      if (except.includes(userRole)) values.state = user?.data?.state ?? "";
      if (except.includes(userRole)) setUserState(values.state);
      if ("community_facilitator".includes(userRole)) values.lga = user?.data?.lga ?? "";
    }, [values]);

    console.log(userRole)

    return (
      <div className="col-xl-12">
        <div className="row g-3 mb-4">
          {/* <div className="col-auto">
            <PrimaryInput
              name="query"
              placeholder="Search ..."
              size={"lg"}
              onChange={handleChange}
              value={values.query}
              rightComponent={<FaSearch color={"grey"} />}
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
                <AgeCategorySelect
                  isRequired
                  placeholder="Select Age Category"
                  name="age"
                  label=""
                  value={values.farmer_age_category}
                  onChange={handleChange}
                  isDisabled={isLoading}
                  style={{
                    backgroundColor: "#fff", borderRadius: 0, border: 0 
                  }}
                />
              </div>

          <div className="col-3">
            <GenderSelect
              isRequired
              name="gender"
              placeholder="Select Gender"
              value={values.gender}
              onChange={handleChange}
              size={"lg"}
              label=""
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
              name="intervention"
              placeholder="Select Intervention"
              options={interventionNames}
              value={values.intervention}
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
              name="income"
              placeholder="Income, ₦"
              value={values.income}
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


