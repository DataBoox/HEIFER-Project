import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { AddProjectScheme } from "validations";
import {
  PrimaryInput, PrimaryTextarea
} from "components";
import { DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useState } from "react";
import { useAddProjectMutation } from "store/projects";


export const AddProject = () => {
  const [show, setShow] = useState(false);
  const toast = useToast({ position: "top-right" });
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
                  <div className="col-4"></div>

                  <div className="col-8">
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
                  </div>
                </div>
              </DashboardCardContainer>
            </div>
          </div>
        </div>
      </div>
    );
};
