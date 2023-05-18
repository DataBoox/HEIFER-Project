import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AddProjectScheme } from "validations";
import {
  PrimaryInput, PrimaryTextarea
} from "components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useState } from "react";
import { useAddProjectMutation } from "store/projects";


export const AddProject = () => {
  const [show, setShow] = useState(false);
  const toast = useToast({ position: "top-right" });
  const navigate = useNavigate();
  const [request, { isLoading }] = useAddProjectMutation();
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
    validationSchema: AddProjectScheme(),
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
          title: "Project Added",
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
                title="Create a Project"
                routesRule={"createProjects"}
                bodyClassName={"p-0"}
              >
                <div className="row g-2">
                  <div className="col-lg-3 col-md-12 d-flex justify-content-center">
                    <div className="sidebar">
                      <Link to="/page1" className="sidebar-link text-muted">
                        <input type="radio" name="sidebar" />
                        <span className="sidebar-text">Project Details</span>
                      </Link>
                      <Link to="/page2" className="sidebar-link text-muted">
                        <input type="radio" name="sidebar" />
                        <span className="sidebar-text">Project Indicator</span>
                      </Link>
                      <Link to="/page3" className="sidebar-link text-muted">
                        <input type="radio" name="sidebar" />
                        <span className="sidebar-text">Create Survey</span>
                      </Link>
                      <Link to="/page4" className="sidebar-link text-muted">
                        <input type="radio" name="sidebar" />
                        <span className="sidebar-text">Add Farmers</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="col-auto mb-4">
                      <PrimaryInput
                        isRequired
                        name="pname"
                        label="Project Name"
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
                        label={"Project Description"}
                        placeholder="About your project"
                        size={"lg"}
                        rows={7}
                        value={values.description}
                        error={Boolean(
                          touched.description && errors.description
                        )}
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
                    <div className="col-auto mb-4">
                      <PrimaryInput
                        isRequired
                        name="address"
                        label="Project Location(s)"
                        placeholder="Enter project locations ..."
                        value={values.address}
                        error={Boolean(touched.address && errors.address)}
                        bottomText={errors.address}
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
                      <PrimaryInput
                        isRequired
                        name="plead"
                        label="Assign Project Lead"
                        placeholder="Select project lead"
                        value={values.plead}
                        error={Boolean(touched.plead && errors.plead)}
                        bottomText={errors.plead}
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
                      <PrimaryInput
                        isRequired
                        name="tmembers"
                        label="Assign Team Members"
                        placeholder="Select team member"
                        value={values.tmembers}
                        error={Boolean(touched.tmembers && errors.tmembers)}
                        bottomText={errors.tmembers}
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
