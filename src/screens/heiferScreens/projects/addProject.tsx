import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { AddProjectScheme } from "validations";
import {
  PrimaryInput,
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
      surname: "",
      fname: "",
      lname: "",
      mobileNumber: "",
      email: "",
      state: "",
      community: "",
      lga: "",
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <DashboardCardContainer
              // cardHeaderTitle={"Participant Details"}
              bodyClassName={"p-4 m-3"}
            >
              <div className="row g-2">
                <div className="col-6">
                  <PrimaryInput
                    isRequired
                    name="lname"
                    label="Last Name"
                    placeholder="Enter your last name"
                    value={values.lname}
                    error={Boolean(touched.lname && errors.lname)}
                    bottomText={errors.lname}
                    onChange={handleChange}
                    isDisabled={isLoading}
                    style={{
                      backgroundColor: "#F2FAFC",
                      borderRadius: 0,
                      borderColor: "#CAECF3",
                    }}
                  />
                </div>

                <div className="col-6">
                  <PrimaryInput
                    isRequired
                    name="fname"
                    label="First Name"
                    placeholder="Enter your first name"
                    value={values.fname}
                    error={Boolean(touched.fname && errors.fname)}
                    bottomText={errors.fname}
                    onChange={handleChange}
                    isDisabled={isLoading}
                    style={{
                      backgroundColor: "#F2FAFC",
                      borderRadius: 0,
                      borderColor: "#CAECF3",
                    }}
                  />
                </div>
                <div className="col-12">
                  <PrimaryInput
                    isRequired
                    name="email"
                    label="Email Address"
                    placeholder="Enter email address"
                    value={values.email}
                    error={Boolean(touched.email && errors.email)}
                    bottomText={errors.email}
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
            </DashboardCardContainer>
          </div>
        </div>
      </div>
    );
};
