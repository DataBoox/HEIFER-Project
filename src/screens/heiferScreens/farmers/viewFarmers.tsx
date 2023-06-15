import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Button, useToast, ButtonProps } from "@chakra-ui/react";
import { PrimaryButton, PrimaryInput, ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useGetFarmersQuery } from "store/farmers";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import _ from "lodash";
import { toast } from "react-toastify";
import { useState } from "react";

export const ViewFarmers = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useGetFarmersQuery({
    page: 1,
    query: "",
  });
  const toast = useToast({ position: "top-right" });
  const [showModal, setShowModal] = useState(false);

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
                <MdOutlineAddCircleOutline className="svg-dark" size={12} />
              }
              className={"fw-bold"}
              fontSize={"sm"}
              backgroundColor={"#7AD0E2"}
              color={"#000000"}
              borderRadius={0}
              padding={"12px, 20px, 12px, 20px"}
              _hover={{ bg: "#bbc7ca" }}
              transition={"background-color 0.5s ease-in-out"}
            >
              Edit Household
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
                      Event Name
                    </td>
                    <td className="p-2">Buckle my shoes</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Description</td>
                    <td className="p-2">
                      Buckle my shoes
                      {/* {_.truncate(ev?.description.replace(/<[^>]*>?/gm, ""), {
                          length: 40,
                        })} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Start Date</td>
                    <td className="p-2">
                      Buckle my shoes
                      {/* {moment(ev?.starts_at).format(
                          "dddd, MMMM Do YYYY, h:mm:ss a"
                        )}{" "} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">End Date</td>
                    <td className="p-2">
                      Buckle my shoes
                      {/* {moment(ev?.ends_at).format(
                          "dddd, MMMM Do YYYY, h:mm:ss a"
                        )}{" "} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Created</td>
                    <td className="p-2">
                      Buckle my shoes
                      {/* {moment(ev?.created_at).format(
                          "ddd, MMMM Do YYYY, h:mm:ss a"
                        )} */}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Link</td>
                    <td className="p-2 ">Buckle my shoes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ContentBodyContainer>
  );
};
