import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer } from "../../home";
import { useGetUsersQuery } from "store/user";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import _ from "lodash";
import { toast } from "react-toastify";
import { useState } from "react";

export const ViewUsers = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useGetUsersQuery({
    page: 1,
    query: "",
  });
  const toast = useToast({ position: "top-right" });

  return (
    <ContentBodyContainer
      title="View Users"
      routesRule={"viewUsers"}
      rightCardHeaderComponent={
        <div className="row g-3 mb-0 align-items-center">
          <div className="col-auto">
            <Button
              colorScheme="teal"
              onClick={() => navigate("/users/edit")}
              leftIcon={
                <MdOutlineAddCircleOutline size={12} />
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
              Edit User
            </Button>
          </div>
        </div>
      }
    >
      <div className="row g-2">
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
                    <td className="p-2">Lorem ipsum .......</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">First Name</td>
                    <td className="p-2">
                      Lorem ipsum .......
                      {/* {_.truncate(ev?.description.replace(/<[^>]*>?/gm, ""), {
                          length: 40,
                        })} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Email Address</td>
                    <td className="p-2">
                      Lorem ipsum .......
                      {/* {moment(ev?.starts_at).format(
                          "dddd, MMMM Do YYYY, h:mm:ss a"
                        )}{" "} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Gender</td>
                    <td className="p-2">
                      Lorem ipsum .......
                      {/* {moment(ev?.ends_at).format(
                          "dddd, MMMM Do YYYY, h:mm:ss a"
                        )}{" "} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">State</td>
                    <td className="p-2">
                      Lorem ipsum .......
                      {/* {moment(ev?.created_at).format(
                          "ddd, MMMM Do YYYY, h:mm:ss a"
                        )} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Community</td>
                    <td className="p-2">
                      Lorem ipsum .......
                      {/* {moment(ev?.created_at).format(
                          "ddd, MMMM Do YYYY, h:mm:ss a"
                        )} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Project</td>
                    <td className="p-2">
                      Lorem ipsum .......
                      {/* {moment(ev?.created_at).format(
                          "ddd, MMMM Do YYYY, h:mm:ss a"
                        )} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Role</td>
                    <td className="p-2 ">Lorem ipsum .......</td>
                  </tr>
                </tbody>
              </table>
              <div className="row g-3 pt-4 pb-4 align-items-center">
          <div className="col-auto">
            <Button
              colorScheme="teal"
              onClick={() => navigate("/groups/edit")}
              leftIcon={
                <MdOutlineAddCircleOutline size={12} />
              }
              className={"fw-bold"}
              fontSize={"sm"}
              backgroundColor={"#2A4153"}
              color={"#fff"}
              borderRadius={0}
              padding={"12px, 20px, 12px, 20px"}
              _hover={{ bg: "#bbc7ca" }}
              transition={"background-color 0.5s ease-in-out"}
            >
              Assign Intervention
            </Button>
          </div>

          <div className="col-auto">
            <Button
              colorScheme="teal"
              onClick={() => navigate("/farmers/edit")}
              leftIcon={
                <MdOutlineAddCircleOutline size={12} />
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
              Assign to Group
            </Button>
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
</div>
    </ContentBodyContainer>
  );
};
