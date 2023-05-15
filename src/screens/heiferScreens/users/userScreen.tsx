// import { Devotional, DevotionalProps} from "./components/devotionalComponent";
import { FaPaperPlane } from "react-icons/fa";
import { Button, useToast, ButtonProps } from "@chakra-ui/react";
import { PrimaryButton, PrimaryInput } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { AddUserScheme } from "validations";

export const UserScreen = () => {
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
      firstName: "",
      mobileNumber: "",
      email: "",
    },
    validationSchema: AddUserScheme(),
    onSubmit: () => initRequest(),
  });
    
    const initRequest = () => {
      request(values)
        .unwrap()
        .then((res) => {
          // console.log(res);
          toast({
            title: "User Added",
            description: res?.response,
            status: "success",
          });
          resetForm({}); // reset form
          initOnClose();
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

    const initOnClose = () => {
      setShow(false);
      onClose();
    };
  //  src =
  //    "https://example.surveycto.com/collect/apiToken/formApiKey?appearance=minimal";
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
            Create a new Commuinity Facilitator
          </h1>
          <p style={{ textAlign: "center" }}>
            Kindly provide information
          </p>
          <div dangerouslySetInnerHTML={{ __html: surveyFormCode }} />
        </DashboardCardContainer>
      </div>
    </ContentBodyContainer>
  );
};
