import { CustomPasswordInput } from "components";
import { FaPen, FaTrash } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer } from "../../home";
import { useGetProfileInfoQuery } from "store/profile";
import _ from "lodash";
import { useLocation } from "react-router-dom";
import { resolveApiError } from "utilities";
import { useToast, } from "@chakra-ui/react";
import { ResetPasswordValidationSchema } from "validations";
import { useFormik } from "formik";
import { PrimaryInput, EditInput } from "components";
import { useAuth } from "store/auth";


export const ViewProfile = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useAuth()
  const toast = useToast({ position: "top-right" });
  const { values, errors, handleSubmit, setFieldValue, touched } = useFormik({
    initialValues: { auth: "", password: "", new_password: "", confirm: "" },
    validationSchema: ResetPasswordValidationSchema,
    onSubmit: () => initRequest(),
  });
  const initRequest = () => {

  };



  return (
    <ContentBodyContainer
      title="View Profile"
      routesRule={"viewProfile"}
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
            <div className="mx-4 pt-3">
              <table>
                <tbody>
                  <tr>
                    <td className="fw-bold" style={{ minWidth: "200px" }}>
                      Last Name
                    </td>
                    <EditInput
                      isRequired
                      name="lname"
                      placeholder="Last name"
                      value={user?.user_info?.lname ?? '- - - - - - - - - - - - - - -'}
                      error={false}
                    />



                    {/* <td className="p-3">{user?.data.lname ?? '- - - - - - - - - - - - - - -'}</td> */}
                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>First Name</td>
                    <EditInput
                      isRequired
                      name="fname"
                      placeholder="First name"
                      value={user?.user_info?.fname ?? '- - - - - - - - - - - - - - -'}
                      error={false}
                    />
                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>Email Address</td>
                    <EditInput
                      isRequired
                      name="email"
                      placeholder="Email Address"
                      value={user?.email ?? '- - - - - - - - - - - - - - -'}
                      error={false}
                    />
                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" >Gender</td>
                    <EditInput
                      isRequired
                      name="gender"
                      placeholder="Gender"
                      value={user?.user_info?.gender ?? '- - - - - - - - - - - - - - -'}
                      error={false}
                    />
                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>State</td>
                    <EditInput
                      isRequired
                      name="state"
                      placeholder="State"
                      value={user?.user_info?.state ?? '- - - - - - - - - - - - - - -'}
                      error={false}
                    />
                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>Community</td>
                    <EditInput
                      isRequired
                      name="community"
                      placeholder="Community"
                      value={user?.user_info?.community ?? '- - - - - - - - - - - - - - -'}
                      error={false}
                    />
                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>Project</td>
                    <EditInput
                      isRequired
                      name="projects"
                      placeholder="Project"
                      value={user?.projects[0]?.name ?? '- - - - - - - - - - - - - - -'}
                      error={false}
                    />

                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>Role</td>
                    <EditInput
                      isRequired
                      name="account_type"
                      placeholder="Account Type"
                      value={user?.account_type.replace('_', ' ').toUpperCase() ?? '- - - - - - - - - - - - - - -'}
                      error={false}
                    />

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
              <CustomPasswordInput className="p-4 mb-4"
                name={"password"}
                label={"Old Password"}
                placeholder={"Enter your old password"}
                value={values.password}
                error={Boolean(errors.password && touched.password)}
                bottomText={errors.password}
                onChange={({ target }) =>
                  setFieldValue("password", target.value)
                }
                style={{
                  backgroundColor: "#F2FAFC",
                  borderRadius: 0,
                  borderColor: "#CAECF3",
                }}
              />

              <CustomPasswordInput className="p-4 mb-4"
                name={"new_password"}
                label={"New Password"}
                placeholder={"Enter your new password"}
                value={values.new_password}
                error={Boolean(errors.new_password && touched.new_password)}
                bottomText={errors.new_password}
                onChange={({ target }) =>
                  setFieldValue("new_password", target.value)
                }
                style={{
                  backgroundColor: "#F2FAFC",
                  borderRadius: 0,
                  borderColor: "#CAECF3",
                }}
              />

              <CustomPasswordInput className="p-4 mb-4"
                name={"confirm"}
                label={"Confirm New Password"}
                placeholder={"Confirm your new password"}
                value={values.confirm}
                error={Boolean(errors.confirm && touched.confirm)}
                bottomText={errors.confirm}
                onChange={({ target }) =>
                  setFieldValue("confirm", target.value)
                }
                style={{
                  backgroundColor: "#F2FAFC",
                  borderRadius: 0,
                  borderColor: "#CAECF3",
                }}
              />

              <div className="col-auto text-end">
                <Button
                  colorScheme="teal"
                  onClick={() => handleSubmit}
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
