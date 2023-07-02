import { ContentBodyContainer } from "../../home";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const ReportsScreen = () => {
    const navigate = useNavigate();
    return (
        <ContentBodyContainer  title="Reports"
        routesRule={"Reports"}>
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
                  Your Profile
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
                    <td className="p-3"></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">First Name</td>
                    <td className="p-3"></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Email Address</td>
                    <td className="p-3"> </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Gender</td>
                    <td className="p-3"></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">State</td>
                    <td className="p-3"></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Community</td>
                    <td className="p-3"></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Project</td>
                    <td className="p-3"></td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Role</td>
                    <td className="p-3 "></td>
                  </tr>
                </tbody>
              </table>
              <div className="row g-3 pt-4 pb-4 align-items-center">

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
        <div className="card custom-card">
        <div className="px-3 pt-3 align-items-center d-flex border-bottom">
        <div className="mb-0 flex-grow-1 ">
                <p
                  className="fs-5 fw-bold"
                  style={{
                    color: "#2A4153",
                  }}
                >
                  Change Password
                </p>
              </div>
              </div>
              <div className="p-4">

<div className="col-auto text-end">
            <Button
              colorScheme="teal"
              onClick={() => navigate("/farmers/edit")}
              className={"fw-bold"}
              fontSize={"md"}
              backgroundColor={"#2A4153"}
              color={"#fff"}
              borderRadius={0}
              padding={"12px, 20px, 12px, 20px"}
              _hover={{ bg: "#bbc7ca" }}
              transition={"background-color 0.5s ease-in-out"}
            >
                Update
            </Button>
          </div>
              </div>
            </div>
        </div>
</div>
        </ContentBodyContainer>
    );
};
