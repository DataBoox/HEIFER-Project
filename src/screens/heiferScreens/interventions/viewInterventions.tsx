import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaPen, FaTrash, FaEye } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdPersonAddAlt1 } from "react-icons/md";
import { Button, useToast, ButtonProps } from "@chakra-ui/react";
import { PrimaryButton, PrimaryInput, ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useAllFarmersColumn} from "../farmers/components";
import { useGetInterventionsQuery, useGetInterventionInfoQuery, useDeleteInterventionMutation, useEditInterventionMutation } from "store/intervention";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import _ from "lodash";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { AssignFarmerDialog, AssignGroupDialog } from "./components";
import FrameThree from "../../../assets/images/Frame_1304-transformed.png"
import FrameFour from "../../../assets/images/Frame_1489-transformed.png"
import { useLocation } from "react-router-dom";
import { useProject } from "store/projects";
import { resolveApiError } from "utilities";
import { EditInput } from "components";
import { useFormik } from "formik";

export const ViewInterventions = () => {
  const navigate = useNavigate();
  const columns = useAllFarmersColumn();
  const projectId: number = useProject().project?.id;
  const pathArray: string[] = useLocation().pathname.trim().split("/")
  const interventionId = pathArray[pathArray.length - 1]
  const { data: intervention, refetch } = useGetInterventionInfoQuery({ project_id: projectId, intervention_id: interventionId  });
  const [deleteIntervention] = useDeleteInterventionMutation();
  const toast = useToast({ position: "top-right" });
  const [editIntervention] = useEditInterventionMutation();

  const initDelete = () => {
    let payload = { project_id: projectId, interventions: [interventionId] }
    deleteIntervention(payload).unwrap().then((response) => {
      let msg = "Deleted successfully"
      toast({ title: "Intervention", description: msg, status: "success" })
      navigate("/interventions");
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }

  const { values, handleChange, setFieldValue } = useFormik({
    initialValues: { ...intervention?.data, ...{ intervention_id: interventionId }},
    onSubmit: () => editInterventionRequest(),
  });

  useEffect(() => {
    if (intervention?.data) Object.keys(intervention?.data).forEach((key) => setFieldValue(key, intervention?.data[key]))
  }, [intervention])

  const editInterventionRequest = () => {
    delete values["creator"]

    editIntervention(values).unwrap().then((res) => {
      refetch()
      toast({ title: "Intervention", description: res?.response, status: "success" });
    }).catch((error) => {
        toast({ title: "Request Failed", description: resolveApiError(error), status: "error" });
    });
  };

  return (
    <ContentBodyContainer
      title="View Interventions"
      routesRule={"viewInterventions"}
      rightCardHeaderComponent={
        <div className="row g-3 mb-0 align-items-center">
          <div className="col-auto">
          <Button
              colorScheme="teal"
              onClick={() => initDelete()}
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
              Delete Intervention
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
                  Intervention Information
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
                      Name
                    </td>
                    <td className="p-2">
                      <EditInput
                          isRequired
                          name="name"
                          placeholder="Name"
                          onChange={handleChange}
                          value={values?.name}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Description</td>
                    <td className="p-2">
                      <EditInput
                          isRequired
                          name="description"
                          placeholder="Description"
                          onChange={handleChange}
                          value={values.description}
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
                          value={values.state}
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
                          value={values.lga}
                      />
                     </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Community</td>
                    <td className="p-2">
                      <EditInput
                          isRequired
                          name="community"
                          placeholder="Community"
                          onChange={handleChange}
                          value={values.community}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Created By</td>
                    <td className="p-2 ">
                      <EditInput
                          isRequired
                          placeholder="Created By"
                          readonly={true}
                          onChange={handleChange}
                          value={ intervention?.data?.creator.user_info?.fname }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="row g-3 pt-4 pb-4 align-items-center">
                <div className="col-auto">
                    <Button
                      colorScheme="teal"
                      onClick={() => editInterventionRequest()}
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
                  <AssignGroupDialog
                    requiredId={interventionId}
                    useButton={true}
                    buttonProps={{ leftIcon: (<MdOutlineAddCircleOutline size={12} />),
                      fontSize: "sm",
                      className: "fw-bold",
                      backgroundColor: "#2A4153",
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

              <div className="col-auto">
              <AssignFarmerDialog
                  requiredId={interventionId}
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
                  Assign a Household
                </AssignFarmerDialog>
              </div>

        </div>
            </div>
          </div>
        </div>

        <div className="row col-lg-12">
          <div className="col-lg-6 mb-md-0 mb-3">
            <div className="card card-animate">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="avatar-sm flex-shrink-0 mt-5">
                    <div
                      style={{
                        backgroundColor: "#0BB508",
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                      }}
                    >
                      <BsFillPersonCheckFill size={24} className="svg-light" />
                    </div>
                  </div>
                  <div className="flex-grow-1 overflow-hidden text-end">
                    <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                      {" "}
                      Total Households
                    </p>
                    <h4 className="fs-1 fw-bold text-dark mb-5">
                      {/* {currencyFormatter(data?.data.projects ?? 0)} */} 3
                    </h4>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card-animate">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="avatar-sm flex-shrink-0 mt-5">
                    <div
                      style={{
                        backgroundColor: "#FFD914",
                        borderRadius: "50%",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "48px",
                        height: "48px",
                      }}
                    >
                      <MdPersonAddAlt1 size={24} className="svg-light" />
                    </div>
                  </div>
                  <div className="flex-grow-1 overflow-hidden text-end">
                    <p className="fs-5 fw-medium text-dark text-truncate mb-3">
                      {" "}
                      Total SH Groups
                    </p>
                    <h4 className="fs-1 fw-bold text-dark mb-5">
                      {/* {currencyFormatter(data?.data.projects ?? 0)} */} 3
                    </h4>
                  </div>
                </div>
                {/* end card body */}
              </div>
              {/* end card */}
            </div>
          </div>
          <div className="col-lg-12">
            <img src={FrameThree} alt="analytics" />
          </div>
        </div>

      <div className="col-xl-12">
      <h2 className="mt-3 mb-3 fw-bold" style={{color: "rgb(41, 41, 42)"}}>Household History</h2>
        <ThemeTable
          data={[]}
          columns={columns as any}
          // isLoading={isLoading}
          // onRefetch={refetch}
        />
      </div>
    </ContentBodyContainer>
  );
};
