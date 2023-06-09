import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaPen, FaTrash, FaUserCheck } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer } from "../../home";
import { useGetUserInfoQuery } from "store/user";
import _ from "lodash";
import { useLocation } from "react-router-dom";
import { useDisableUserMutation, useEnableUserMutation, useEditUserMutation } from "store/user";
import { resolveApiError } from "utilities";
import { useToast, } from "@chakra-ui/react";
import { EditInput } from "components";
import { useFormik } from "formik";
import { useEffect } from "react";

export const ViewUsers = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pathArray: string[] = pathname.trim().split("/")
  const userId = pathArray[pathArray.length - 1]
  const { data, isLoading, refetch } = useGetUserInfoQuery({ uid: userId });
  const [disableUser] = useDisableUserMutation();
  const [enableUser] = useEnableUserMutation();
  const toast = useToast({ position: "top-right" });
  const [editUser] = useEditUserMutation();


  const initDisable = (user: number) => {
    disableUser({users: [user]}).unwrap().then((response) => {
      let msg = "User has been disabled successfully"
      toast({ title: "User Disabled", description: msg, status: "success" })
      refetch();
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }

  const enableDisable = (user: number) => {
    enableUser({users: [user]}).unwrap().then((response) => {
      let msg = "User has been enabled successfully"
      toast({ title: "User Enabled", description: msg, status: "success" })
      refetch();
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }

  const { values, handleChange, setFieldValue } = useFormik({
    initialValues: { ...data?.data, ...{ uid: userId }},
    onSubmit: () => editUserRequest(),
  });


  useEffect(() => {
    if (data?.data) Object.keys(data?.data).forEach((key) => setFieldValue(key, data?.data[key]))
    if (data?.data?.user) setFieldValue("email", data?.data?.user?.email)
    if (data?.data?.user) setFieldValue("role", data?.data?.user?.account_type)
  }, [data])

  const editUserRequest = () => {
    let discard = ["creator", "user", "projects"]
    discard.map(data => delete values[data])

    editUser(values).unwrap().then((res) => {
      refetch()
      toast({ title: "User", description: res?.response, status: "success" });
    }).catch((error) => {
        toast({ title: "Request Failed", description: resolveApiError(error), status: "error" });
    });
  };

  return (
    <ContentBodyContainer
      title="View Users"
      routesRule={"viewUsers"}
      rightCardHeaderComponent={
        <div className="row g-3 mb-0 align-items-center">
          {data?.data?.user.status ? (
              <Button
              onClick={() => initDisable(data?.data?.uid)}
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
              Disable User
            </Button>

          ) : (
            <Button
              onClick={() => enableDisable(data?.data?.uid)}
              leftIcon={
                <FaUserCheck size={12} />
              }
              className={"fw-bold"}
              fontSize={"sm"}
              backgroundColor={"green"}
              color={"#fff"}
              borderRadius={0}
              padding={"12px, 20px, 12px, 20px"}
              _hover={{ bg: "#bbc7ca" }}
              transition={"background-color 0.5s ease-in-out"}
            >
              Enable User
            </Button>)}
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
                  User's Information
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
                          name="lname"
                          placeholder="Last name"
                          onChange={handleChange}
                          value={values?.lname}
                      />
                    </td>

                  </tr>
                  <tr>
                    <td className="fw-bold">First Name</td>
                    <td className="p-2">
                      <EditInput
                          isRequired
                          name="fname"
                          placeholder="First name"
                          onChange={handleChange}
                          value={values?.fname}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Email Address</td>
                    <td className="p-2">
                      <EditInput
                          isRequired
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          onChange={handleChange}
                          value={values?.email}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Gender</td>
                    <td className="p-2">
                        <EditInput
                          isRequired
                          name="gender"
                          placeholder="Gender"
                          onChange={handleChange}
                          value={values.gender}
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
                    <td className="fw-bold">Project</td>
                    <td className="p-2">
                        <EditInput
                          isRequired
                          name="project"
                          placeholder="Project"
                          onChange={handleChange}
                          value={values.project}
                        />
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">Role</td>
                    <td className="p-2 ">
                        <EditInput
                          isRequired
                          name="role"
                          placeholder="Role"
                          onChange={handleChange}
                          value={values.role}
                        />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="row g-3 pt-4 pb-4 align-items-center">
        

          <div className="col-auto">
            <Button
              colorScheme="teal"
              onClick={() => editUserRequest()}
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
            >Edit
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
