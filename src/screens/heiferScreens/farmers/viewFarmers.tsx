import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { Button, useToast } from "@chakra-ui/react";
import { ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer } from "../../home";
import { useAllHistorysColumn} from "./components";
import { useGetFarmerInfoQuery, useDeleteFarmerMutation, useEditFarmerMutation } from "store/farmers";
import _ from "lodash";
import { AssignInterventionDialog } from "../farmers/components/assignIntervention";
import { AssignGroupDialog } from "../farmers/components/assignGroup";
import FrameOne from "../../../assets/images/Frame_1302-transformed.png"
import FrameTwo from "../../../assets/images/Frame_1303-transformed.png"
import { useLocation } from "react-router-dom";
import { useProject } from "store/projects";
import { resolveApiError } from "utilities";
import { EditInput } from "components";
import { useFormik } from "formik";
import { FaPen } from "react-icons/fa";

export const ViewFarmers = () => {
  const navigate = useNavigate();
  const columns = useAllHistorysColumn();
  const projectId: number = useProject().project?.id;
  const pathArray: string[] = useLocation().pathname.trim().split("/")
  const farmerId = pathArray[pathArray.length - 1]
  const { data: farmer, isLoading,  refetch } = useGetFarmerInfoQuery({ project_id: projectId, farmer_id: farmerId  });
  const [disableFarmer] = useDeleteFarmerMutation();
  const toast = useToast({ position: "top-right" });
  const interventionHistory = farmer?.data?.farmer_interventions.map((data: any) => { return data.intervention })
  const [editFarmer] = useEditFarmerMutation();

  const initDelete = () => {
    let payload = { project_id: projectId, farmers: [farmerId] }
    disableFarmer(payload).unwrap().then((response) => {
      let msg = "Deleted successfully"
      toast({ title: "Farmer", description: msg, status: "success" })
      navigate("/farmers");
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }

  const { values, handleChange, touched } = useFormik({
    initialValues: { ...farmer?.data, ...{ farmer_id: farmerId }},
    onSubmit: () => editFarmerRequest(),
  });

  const editFarmerRequest = () => {
    let discard = ["creator", "farmer_interventions"]
    discard.map(data => delete values[data])

    editFarmer(values).unwrap().then((res) => {
      refetch()
      toast({ title: "Farmer", description: res?.response, status: "success" });
    }).catch((error) => {
        toast({ title: "Request Failed", description: resolveApiError(error), status: "error" });
    });
  };


  return (
    <ContentBodyContainer
      title="View Households"
      routesRule={"viewFarmers"}
      rightCardHeaderComponent={
        <div className="row g-3 mb-0 align-items-center">
          <div className="col-auto">
            <Button
              colorScheme="teal"
              onClick={ () => initDelete() }
              leftIcon={
                <FaTrash size={12} />
              }
              className={"fw-bold"}
              fontSize={"sm"}
              backgroundColor={"red"}
              color={"#fff"}
              borderRadius={0}
              padding={"12px, 20px, 12px, 20px"}
              _hover={{ bg: "#bbc7ca" }}
              transition={"background-color 0.5s ease-in-out"}
            >
              Delete Household
            </Button>
          </div>
        </div>
      }
    >
        <div className="col-lg-8">
          <div className="card custom-card">
            <div className="px-3 pt-3 align-items-center d-flex border-bottom">
              {/* {leftCardHeaderComponent} */}
              <div className="mb-0 flex-grow-1 ">
                <p
                  className="fs-5 fw-bold"
                  style={{
                    color: "#2A4153",
                  }}
                >
                  Household Information
                </p>
              </div>
              <h4
                className="card-title mb-0 flex-grow-1 fw-bold"
                style={{
                  color: "#2A4153",
                }}
                // {...cardHeaderProps}
              >
                {/* {cardHeaderTitle} */}
              </h4>
              {/* {rightCardHeaderComponent} */}
            </div>
            <div className="mx-4 pt-1">
              <table>
                <tbody>
                  <tr>
                    <td className="fw-bold" style={{ minWidth: "150px" }}>
                      Last Name
                    </td>
                    <td className="p-2">
                      <EditInput
                        isRequired
                        name="last_name"
                        placeholder="Last name"
                        onChange={handleChange}
                        value={values.last_name ?? farmer?.data?.last_name}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">First Name</td>
                    <td className="p-2">
                      <EditInput
                        isRequired
                        name="first_name"
                        placeholder="First name"
                        onChange={handleChange}
                        value={values.first_name  ?? farmer?.data?.first_name}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Phone Number</td>
                    <td className="p-2"> 
                      <EditInput
                          isRequired
                          name="farmer_phone"
                          placeholder="Farmer phone"
                          onChange={handleChange}
                          value={values.farmer_phone  ?? farmer?.data?.farmer_phone}
                        />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Gender</td>
                    <td className="p-2">
                      <EditInput
                          isRequired
                          name="farmer_gender"
                          placeholder="Farmer gender"
                          onChange={handleChange}
                          value={values.farmer_gender  ?? farmer?.data?.farmer_gender}
                        />
                     </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Group Name</td>
                    <td className="p-2">
                      <EditInput
                          isRequired
                          name="group_name"
                          placeholder="Farmer group"
                          onChange={handleChange}
                          value={values.group_name  ?? farmer?.data?.group_name}
                        />
                      </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">State</td>
                    <td className="p-2">
                      <EditInput
                          isRequired
                          name="state"
                          placeholder="State"
                          onChange={handleChange}
                          value={values.state  ?? farmer?.data?.state}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">LGA</td>
                    <td className="p-2">
                      <EditInput
                          isRequired
                          name="lga"
                          placeholder="LGA"
                          onChange={handleChange}
                          value={values.lga  ?? farmer?.data?.lga}
                      />
                     </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Address</td>
                    <td className="p-2 ">
                      <EditInput
                          isRequired
                          name="farmer_address"
                          placeholder="Address"
                          onChange={handleChange}
                          value={values.farmer_address  ?? farmer?.data?.farmer_address}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="row g-3 pt-4 pb-4 align-items-center">
                <div className="col-auto">
                  <Button
                    colorScheme="teal"
                    onClick={() => editFarmerRequest()}
                    leftIcon={ <FaPen size={13} /> }
                    className={"fw-bold"}
                    fontSize={"sm"}
                    backgroundColor={"#7AD0E2"}
                    color={"#fff"}
                    borderRadius={0}
                    padding={"15px"}
                    _hover={{ bg: "#bbc7ca" }}
                    transition={"background-color 0.5s ease-in-out"}
                  >Edit</Button>
                  </div>
                <div className="col-auto">
                  <AssignInterventionDialog
                    requiredId={farmerId}
                    useButton={true}
                    buttonProps={{
                      leftIcon: <MdOutlineAddCircleOutline size={12} />,
                      fontSize: "sm",
                      className: "fw-bold",
                      backgroundColor: "#2A4153",
                      color: "#fff",
                      borderRadius: 0,
                      padding: "12px, 20px, 12px, 20px",
                      transition: "background-color 0.5s ease-in-out",
                    }}
                    onClose={refetch}
                  >
                    Assign Intervention
                  </AssignInterventionDialog>
                </div>

                <div className="col-auto">
                  <AssignGroupDialog
                      requiredId={farmerId}
                      useButton={true}
                      buttonProps={{
                        leftIcon: (
                          <MdOutlineAddCircleOutline size={12} />
                        ),
                        fontSize: "sm",
                        className: "fw-bold",
                        backgroundColor: "#7AD0E2",
                        color: "#fff",
                        borderRadius: 0,
                        padding: "12px, 20px, 12px, 20px",
                        transition: "background-color 0.5s ease-in-out", // Add transition property
                      }}
                      onClose={refetch}
                    >
                      Assign To Group
                  </AssignGroupDialog>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row col-lg-12">
          <div className="col-lg-6 mb-lg-0 mb-3">
            <img src={FrameTwo} alt="analytics" />
          </div>
          <div className="col-lg-6">
            <img className="mb-4" src={FrameOne} alt="analytics" />
          </div>
        </div>

        <div className="col-xl-12">
          <h2 className="mt-3 mb-3 fw-bold" style={{color: "rgb(41, 41, 42)"}}>Intervention History</h2>
          <ThemeTable
            data={interventionHistory ?? []}
            columns={columns as any}
            isLoading={isLoading}
            onRefetch={refetch}
          />
        </div>
    </ContentBodyContainer>
  );
};
