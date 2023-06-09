import { Button, useToast } from "@chakra-ui/react";
import { CustomPasswordInput, EditInput } from "components";
import { useFormik } from "formik";
import { useEffect } from "react";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useAuth } from "store/auth";
import { useChangePasswordMutation, useEditUserMutation, useGetUserInfoQuery } from "store/user";
import { resolveApiError } from "utilities";
import { ContentBodyContainer } from "../../home";


export const ViewProfile = () => {
  const navigate = useNavigate();
  const userId = Number(useAuth().user?.user_info?.id)
  const { data: user, refetch } = useGetUserInfoQuery({ uid: userId   });
  const toast = useToast({ position: "top-right" });
  const [changePassword] = useChangePasswordMutation();
  const [editProfile] = useEditUserMutation();
  const { values, errors, handleChange, touched, setFieldValue } = useFormik({
    initialValues: { old: "", password: "", confirm: "", ...user?.data },
    onSubmit: () => changePasswordRequest(),
  });

  const changePasswordRequest = () => {
    changePassword(values).unwrap().then((res) => {
      toast({ title: "Password", description: res?.response, status: "success" });
    }).catch((error) => {
        toast({ title: "Request Failed", description: resolveApiError(error), status: "error" });
    });
  };

  useEffect(() => {
    if (user?.data) Object.keys(user?.data).forEach((key) => setFieldValue(key, user?.data[key]))
    if (user?.data?.user) setFieldValue("email", user?.data?.user?.email)
    if (user?.data?.user) setFieldValue("role", user?.data?.user?.account_type)
  }, [user])

  const editProfileRequest = () => {
    let discard = ["old", "confirm", "password", "user", "creator", "projects"]
    discard.map(data => delete values[data])

    editProfile(values).unwrap().then((res) => {
      toast({ title: "Profile", description: res?.response, status: "success" });
    }).catch((error) => {
        toast({ title: "Request Failed", description: resolveApiError(error), status: "error" });
    });
  };



  return (
    <ContentBodyContainer
      title="Edit Profile"
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
                      onChange={handleChange}
                      value={values.lname}
                      error={false}
                    />
                    
                  </tr>
                  <tr>
                    <td className="fw-bold pt-3" style={{ minWidth: "200px" }}>First Name</td>
                    <EditInput
                      isRequired
                      name="fname"
                      placeholder="First name"
                      value={values.fname}
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
                      value={values.email}
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
                      value={values.gender}
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
                      value={user?.data?.state ?? '- - - - - - - - - - - - - - -'}
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
                      value={user?.data?.community ?? '- - - - - - - - - - - - - - -'}
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
                      value={user?.data?.projects[0]?.name ?? '- - - - - - - - - - - - - - -'}
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
                      value={user?.data?.user?.account_type.replace('_', ' ').toUpperCase() ?? '- - - - - - - - - - - - - - -'}
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
                    fontSize={"lg"}
                    backgroundColor={"#7AD0E2"}
                    color={"#fff"}
                    borderRadius={0}
                    padding={"15px"}
                    _hover={{ bg: "#bbc7ca" }}
                    transition={"background-color 0.5s ease-in-out"}
                  >Edit
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
