import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { AddUserScheme } from "validations";
import {
  ChakraAlertDialog,
  ChakraAlertDialogProps,
  GenderSelect,
  ProjectSelect,
  RoleSelect,
  PrimaryInput,
} from "components";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useEffect, useState } from "react";
import { ChakraProviderLoader } from "providers";
import { useAddUserMutation } from "store/user";
import { User } from "@store/user";
import { StateLGAInput } from "custom";

export interface AddUserDialogProps extends ChakraAlertDialogProps {
  useButton?: boolean;
  user?: User;
  children?: string | React.ReactElement;
  buttonProps?: ButtonProps;
}

export const AddUserDialog: React.FC<AddUserDialogProps> = ({
  user,
  useButton = false,
  children,
  buttonProps,
  onClose = () => {},
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const toast = useToast({ position: "top-right" });
  const [request, { isLoading }] = useAddUserMutation();
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
    touched,
    setValues,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      phone: "",
      email: "",
      state: "",
      community: "",
      project: "",
      role: "",
      lga: "",
      gender: "",
    },
    validationSchema: AddUserScheme(),
    onSubmit: () => initRequest(),
  });

  useEffect(() => {
    if (user) setFieldValue("user_id", user?.id);
  }, [user]);

  

  const initRequest = () => {
    const payload: any = {
      ...values,
    };
    request(payload)
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
        console.log(error);
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

  return (
    <ChakraProviderLoader>
      {useButton && (
        <Button
          onClick={() => setShow(true)}
          {...buttonProps}
          _hover={{ bg: "#bbc7ca" }}
        >
          {children}
        </Button>
      )}
      <ChakraAlertDialog
        title={"Add User"}
        size={"xl"}
        proceedButtonProps={{ colorScheme: "teal" }}
        proceedButtonDefaultChild={"Create"}
        isOpen={rest?.isOpen ? rest?.isOpen : show}
        onProceed={handleSubmit}
        onClose={initOnClose}
        isProceeding={isLoading}
        {...rest}
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
          <div className="col-12">
            <GenderSelect
              isRequired
              name="gender"
              value={values.gender}
              error={Boolean(touched.gender && errors.gender)}
              bottomText={errors.gender}
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
            <div className="row">
              <StateLGAInput
                state={values.state}
                lga={values.lga}
                errors={errors}
                touched={touched}
                stateInputProps={{
                  label: "State",
                  isDisabled: isLoading,
                }}
                areaInputProps={{
                  label: "Local Government Area",
                  isDisabled: isLoading,
                }}
                stateContainerProps={{
                  className: "col-12 mb-3",
                }}
                areaContainerProps={{
                  className: "col-12 mb-3",
                }}
                onChange={({ lga, state }) => {
                  setFieldTouched("state", true);
                  setFieldTouched("lga", true);
                  setValues({ ...values, lga, state });
                }}
              />
            </div>
          </div>
          <div className="col-12">
            <PrimaryInput
              isRequired
              name="community"
              label="Community"
              placeholder="Enter resident community"
              value={values.community}
              error={Boolean(touched.community && errors.community)}
              bottomText={errors.community}
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
            <ProjectSelect
              isRequired
              name="project"
              value={values.project}
              error={Boolean(touched.project && errors.project)}
              bottomText={errors.project}
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
            <RoleSelect
              isRequired
              name="role"
              value={values.role}
              error={Boolean(touched.role && errors.role)}
              bottomText={errors.role}
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
      </ChakraAlertDialog>
    </ChakraProviderLoader>
  );
};
