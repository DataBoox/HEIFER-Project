import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AddGroupScheme } from "validations";
import { PrimaryInput, PrimaryTextarea } from "components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useState } from "react";
import { useAddGroupMutation } from "store/group";

export const AddGroup = () => {
  const [show, setShow] = useState(false);
  const toast = useToast({ position: "top-right" });
  const navigate = useNavigate();
  const [request, { isLoading }] = useAddGroupMutation();
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
    touched,
  } = useFormik({
    initialValues: {
      address: "",
      description: "",
      pname: "",
      plead: "",
      tmembers: "",
    },
    validationSchema: AddGroupScheme(),
    onSubmit: () => initRequest(),
  });

  const payload: any = {
    ...values,
  };
  const initRequest = () => {
    request(payload)
      .unwrap()
      .then((res) => {
        // console.log(res);
        toast({
          title: "Group Added",
          description: res?.response,
          status: "success",
        });
        resetForm({}); // reset form
      })
      .catch((error) => {
        // console.log(error);
        toast({
          title: "Request Failed",
          description: resolveApiError(error),
          status: "error",
        });
      });
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <DashboardCardContainer
              title="Create a Group"
              routesRule={"createGroups"}
              bodyClassName={"p-0"}
            >
              <div className="row g-2">
                <div className="col-lg-3 col-md-12 d-flex justify-content-center">
                  <div className="sidebar">
                    <Link to="/page1" className="sidebar-link text-muted">
                      <input type="radio" name="sidebar" />
                      <span className="sidebar-text">Group Details</span>
                    </Link>
                    <Link to="/page2" className="sidebar-link text-muted">
                      <input type="radio" name="sidebar" />
                      <span className="sidebar-text">Add Farmers</span>
                    </Link>
                    <Link to="/page3" className="sidebar-link text-muted">
                      <input type="radio" name="sidebar" />
                      <span className="sidebar-text">Assign Interventions</span>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="pname"
                      label="Group Name"
                      placeholder="Enter your project name"
                      value={values.pname}
                      error={Boolean(touched.pname && errors.pname)}
                      bottomText={errors.pname}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>

                  <div className="col-auto mb-4">
                    <PrimaryTextarea
                      isRequired
                      name="description"
                      label={"Group Description"}
                      placeholder="About your group"
                      size={"lg"}
                      rows={7}
                      value={values.description}
                      error={Boolean(touched.description && errors.description)}
                      bottomText={errors.description}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>

                  <div className="col-auto text-end mb-4">
                    <Button
                      colorScheme="teal"
                      onClick={() => navigate("/projects/add")}
                      className={"fw-light"}
                      fontSize={"sm"}
                      backgroundColor={"#2A4153"}
                      color={"#ffffff"}
                      borderRadius={0}
                      padding={"16px, 48px, 16px, 48px"}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </DashboardCardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
