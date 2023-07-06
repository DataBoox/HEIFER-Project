import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { AddUserScheme } from "validations";
import {
  ChakraAlertDialog,
  ChakraAlertDialogProps,
  GenderSelect,
  RoleSelect,
  PrimaryInput,
  PrimarySelect,
} from "components";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useEffect, useState } from "react";
import { ChakraProviderLoader } from "providers";
import { useAddUserMutation } from "store/user";
import { User } from "@store/user";
import { states, localGov, communities } from "utilities";
import { useProject } from "store/projects";

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

  const project = useProject().project;

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
          <div className="col-12 mb-3">
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
          <div className="col-12 mb-4">
            <PrimarySelect 
              name="state"
              placeholder="Select State"
              options={ states }
              onChange={handleChange}
              size={"md"}
              isDisabled={isLoading}
              style={{
                backgroundColor: "#F2FAFC",
                borderRadius: 0,
                borderColor: "#CAECF3",
              }}
            />
          </div>
          {(values.state.length ? 
            <div className="col-12 mb-4">
              <PrimarySelect 
                name="lga"
                placeholder="Select Local Gov"
                options={ localGov(values.state) }
                onChange={handleChange}
                size={"md"}
                isDisabled={isLoading}
                style={{
                backgroundColor: "#F2FAFC",
                borderRadius: 0,
                borderColor: "#CAECF3",
              }}
              />
            </div> : <></> )}

            {(values.state.length && values.lga.length ? 
              <div className="col-12 mb-3">
                <PrimarySelect
                  name="community"
                  placeholder="Select Community"
                  options={ communities(values.state, values.lga) }
                  onChange={handleChange}
                  size={"md"}
                  isDisabled={isLoading}
                  style={{
                    backgroundColor: "#F2FAFC",
                    borderRadius: 0,
                    borderColor: "#CAECF3",
                  }}
                />
              </div> : <></> )}
              <div className="col-12">
                <PrimarySelect
                    isRequired
                    name="project"
                    label="Project Name"
                    options={[{ text: project.name, props: { value: project.id  } }]}
                    onChange={handleChange}
                    isDisabled={isLoading}
                    isReadOnly={true}
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
