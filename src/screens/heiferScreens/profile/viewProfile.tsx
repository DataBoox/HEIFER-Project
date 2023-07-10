import { CustomPasswordInput } from "components";
import { FaPen, FaTrash } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer } from "../../home";
import _ from "lodash";
import { resolveApiError } from "utilities";
import { useToast, } from "@chakra-ui/react";
import { ResetPasswordValidationSchema } from "validations";
import { useFormik } from "formik";
import { EditInput } from "components";
import { useAuth } from "store/auth";
import { useChangePasswordMutation, useEditUserMutation } from "store/user";

export const ViewProfile = () => {
  const navigate = useNavigate();
  const { user } = useAuth()
  const toast = useToast({ position: "top-right" });
  const [changePassword] = useChangePasswordMutation();
  const [editProfile] = useEditUserMutation();
  const { values, errors, handleChange, touched } = useFormik({
    initialValues: { 
      old: "", password: "", confirm: "", uid: user?.user_info.uid,
      fname: user?.user_info?.fname, lname: user?.user_info?.lname,
      email: user?.email, gender: user?.user_info?.gender,
    },
    onSubmit: () => changePasswordRequest(),
  });

  const changePasswordRequest = () => {
    changePassword(values).unwrap().then((res) => {
      toast({ title: "Password", description: res?.response, status: "success" });
    }).catch((error) => {
        toast({ title: "Request Failed", description: resolveApiError(error), status: "error" });
    });
  };

  const editProfileRequest = () => {
    editProfile(values).unwrap().then((res) => {
      toast({ title: "Profile", description: res?.response, status: "success" });
    }).catch((error) => {
        toast({ title: "Request Failed", description: resolveApiError(error), status: "error" });
    });
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
                      value={user?.user_info?.lname}
                      onChange={handleChange}
                      error={false}
                    />

                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>First Name</td>
                    <EditInput
                      isRequired
                      name="fname"
                      placeholder="First name"
                      value={user?.user_info?.fname}
                      onChange={handleChange}
                      error={false}
                    />
                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>Email Address</td>
                    <EditInput
                      isRequired
                      name="email"
                      placeholder="Email Address"
                      onChange={handleChange}
                      value={user?.email}
                      error={false}
                    />
                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" >Gender</td>
                    <EditInput
                      isRequired
                      name="gender"
                      placeholder="Gender"
                      onChange={handleChange}
                      value={user?.user_info?.gender}
                      error={false}
                    />
                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>State</td>
                    <EditInput
                      isRequired
                      name="state"
                      readOnly
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
                      readOnly
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
                      readOnly
                      placeholder="Project"
                      value={user?.projects[0]?.name ?? '- - - - - - - - - - - - - - -'}
                      error={false}
                    />

                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>Role</td>
                    <EditInput
                      isRequired
                      readOnly
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
                    onClick={() => editProfileRequest()}
                    leftIcon={
                      <FaPen size={13} />
                    }
                    className={"fw-bold"}
                    fontSize={"sm"}
                    backgroundColor={"#7AD0E2"}
                    color={"#fff"}
                    borderRadius={0}
                    padding={"15px"}
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
                name={"old"}
                label={"Old Password"}
                placeholder={"Enter your old password"}
                value={values.old}
                error={Boolean(errors.old && touched.old)}
                bottomText={errors.password}
                isRequired
                onChange={handleChange}
                style={{
                  backgroundColor: "#F2FAFC",
                  borderRadius: 0,
                  borderColor: "#CAECF3",
                }}
              />

              <CustomPasswordInput className="p-4 mb-4"
                name={"password"}
                label={"New Password"}
                placeholder={"Enter your new password"}
                value={values.password}
                isRequired
                error={Boolean(errors.password && touched.password)}
                bottomText={errors.password}
                onChange={handleChange}
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
                isRequired
                error={Boolean(errors.confirm && touched.confirm)}
                bottomText={errors.confirm}
                onChange={handleChange}
                style={{
                  backgroundColor: "#F2FAFC",
                  borderRadius: 0,
                  borderColor: "#CAECF3",
                }}
              />

              <div className="col-auto text-end">
                <Button
                  colorScheme="teal"
                  onClick={() => changePasswordRequest()}
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
