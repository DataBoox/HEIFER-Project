// import { Devotional, DevotionalProps} from "./components/devotionalComponent";
import { FaPaperPlane } from "react-icons/fa";
import { Button, useToast, ButtonProps } from "@chakra-ui/react";
import { PrimaryButton, PrimaryInput } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError, validationError } from "utilities";
import { AddUserScheme } from "validations";
import { useAddUserMutation } from "store/user";
import { request } from "http";
import _ from "lodash";
import { toast } from "react-toastify";

export const UserScreen = () => {
  const [request, { isLoading }] = useAddUserMutation();
  const toast = useToast({ position: "top-right" });
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
    validateForm,
    touched,
  } = useFormik({
    initialValues: {
      surname: "",
      fname: "",
      lname: "",
      mobileNumber: "",
      email: "",
    },
    validationSchema: AddUserScheme(),
    onSubmit: async () => initRequest(),
  });

  const initRequest = () => {
    const payload: any = {
      ...values,
    };
  };

  return (
    <ContentBodyContainer
      title="Register User"
      routesRule={"createUser"}
    >
      <div className="col-xl-12">
        <DashboardCardContainer
          // cardHeaderTitle={"Participant Details"}
          bodyClassName={"p-4 m-3"}
        >
          <h1 className="fw-bold" style={{ textAlign: "center" }}>
            Create a new Community Facilitator
          </h1>
          <p style={{ textAlign: "center" }}>
            Kindly provide information
          </p>
          <div className="row gy-4">
            <div className="col-xxl-4 col-md-6">
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
              />
            </div>
          </div>
        </DashboardCardContainer>
      </div>
    </ContentBodyContainer>
  );
};
