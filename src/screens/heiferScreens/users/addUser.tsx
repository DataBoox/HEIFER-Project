import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { AddUserScheme } from "validations";
import {
  ChakraAlertDialog,
  ChakraAlertDialogProps,
  PrimaryInput,
  NigerianStateSelect,
  PrimaryTextarea,
} from "components";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useEffect, useState } from "react";
import { ChakraProviderLoader } from "providers";
import { useAddUserMutation } from "store/user";
import { User } from "@store/user";

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
    validationSchema: AddUserScheme(),
    onSubmit: () => initRequest(),
  });

  useEffect(() => {
    if (user) setFieldValue("user_id", user?.id);
  }, [user]);

    const payload: any = {
      ...values,
    };
  const initRequest = () => {
    request(payload)
      .unwrap()
      .then((res) => {
        // console.log(res);
        toast({
          title: "Facilitator Added",
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

  return (
    <ChakraProviderLoader>
      {useButton && (
        <Button onClick={() => setShow(true)} {...buttonProps}>
          {children}
        </Button>
      )}
      <ChakraAlertDialog
        title={"Add Facilitator"}
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
            <NigerianStateSelect
              isRequired
              name="state"
              value={values.state}
              error={Boolean(touched.state && errors.state)}
              bottomText={errors.state}
              onChange={handleChange}
              isDisabled={isLoading}
            />
          </div>
        </div>
      </ChakraAlertDialog>
    </ChakraProviderLoader>
  );
};
