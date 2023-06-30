import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaPen, FaTrash, FaEye } from "react-icons/fa";
import { Button, useToast, ButtonProps } from "@chakra-ui/react";
import { PrimaryButton, PrimaryInput, ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useAllHistorysColumn} from "./components";
import { useGetFarmersQuery, useGetFarmerInfoQuery } from "store/farmers";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import _ from "lodash";
import { toast } from "react-toastify";
import { useState } from "react";
import { AssignInterventionDialog } from "../farmers/components/assignIntervention";
import { AssignGroupDialog } from "../farmers/components/assignGroup";
import FrameOne from "../../../assets/images/Frame_1302-transformed.png"
import FrameTwo from "../../../assets/images/Frame_1303-transformed.png"
import { useLocation } from "react-router-dom";
import { useProject } from "store/projects";

export const ViewFarmers = () => {
  const navigate = useNavigate();
  const columns = useAllHistorysColumn();
  const projectId: number = useProject().project?.id;
  const { data, isLoading, refetch } = useGetFarmersQuery({ page: 1, query: "", project_id: projectId });
  const toast = useToast({ position: "top-right" });
  const pathArray: string[] = useLocation().pathname.trim().split("/")
  const groupId = pathArray[pathArray.length - 1]
  const { data: farmer } = useGetFarmerInfoQuery({ project_id: projectId, farmer_id: groupId  });

  return (
    <ContentBodyContainer
      title="View Households"
      routesRule={"viewFarmers"}
      rightCardHeaderComponent={
        <div className="row g-3 mb-0 align-items-center">
          <div className="col-auto">
            <Button
              colorScheme="teal"
              onClick={() => navigate("/farmers/edit")}
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
        <div className="col-lg-6">
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
                    <td className="p-2">{ farmer?.data?.last_name }</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">First Name</td>
                    <td className="p-2"> { farmer?.data?.first_name }</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Phone Number</td>
                    <td className="p-2"> { farmer?.data?.farmer_phone }</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Gender</td>
                    <td className="p-2">{ farmer?.data?.farmer_gender }</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Group Name</td>
                    <td className="p-2">{ farmer?.data?.group_name }</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Address</td>
                    <td className="p-2 ">{ farmer?.data?.farmer_address }</td>
                  </tr>
                </tbody>
              </table>
              <div className="row g-3 pt-4 pb-4 align-items-center">
          <div className="col-auto">
          <AssignInterventionDialog
              useButton={true}
              buttonProps={{
                leftIcon: (
                  <MdOutlineAddCircleOutline size={12} />
                ),
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
              Assign Intervention
            </AssignInterventionDialog>
          </div>

          <div className="col-auto">
          <AssignGroupDialog
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

          <div className="col-auto">
            <Button
              colorScheme="teal"
              onClick={() => navigate("/farmers/edit")}
              leftIcon={
                <FaPen size={13} />
              }
              className={"fw-bold"}
              fontSize={"sm"}
              backgroundColor={"#7AD0E2"}
              color={"#fff"}
              borderRadius={0}
              padding={"12px, 20px, 12px, 20px"}
              _hover={{ bg: "#bbc7ca" }}
              transition={"background-color 0.5s ease-in-out"}
            >
            </Button>
          </div>
        </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
      <div className="stacked-frames">
        <div className="col-lg-6"></div>
        <img className="mb-4" src={FrameOne} alt="analytics" />
        <img src={FrameTwo} alt="analytics" />
      </div>
    </div>

      <div className="col-xl-12">
      <h2 className="mt-3 mb-3 fw-bold" style={{color: "rgb(41, 41, 42)"}}>Intervention History</h2>
        <ThemeTable
          data={data?.data?.data ?? []}
          columns={columns as any}
          isLoading={isLoading}
          onRefetch={refetch}
        />
      </div>
    </ContentBodyContainer>
  );
};
