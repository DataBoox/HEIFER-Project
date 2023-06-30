import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { AddUserScheme } from "validations";
import {
  ChakraAlertDialog,
  ChakraAlertDialogProps,
  PrimarySelect,
} from "components";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useEffect, useState } from "react";
import { ChakraProviderLoader } from "providers";
import { Group, useGetGroupsQuery } from "store/group";
import { useProject } from "store/projects";
import { useAddUserMutation } from "store/user";

export interface AssignGroupDialogProps extends ChakraAlertDialogProps {
  useButton?: boolean;
  group?: Group;
  children?: string | React.ReactElement;
  buttonProps?: ButtonProps;
}

export const AssignGroupDialog: React.FC<AssignGroupDialogProps> = ({
  group,
  useButton = false,
  children,
  buttonProps,
  onClose = () => {},
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const toast = useToast({ position: "top-right" });
  const [request, { isLoading }] = useAddUserMutation();
  const projectId: number = useProject().project.id;
  const { data: groups } = useGetGroupsQuery({ project_id: projectId });
  const groupNames = groups?.data.data.map((group: Group) => {
    return {
      text: group.name,
      props: { value: group.id }
    };
  });

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
      intervention: "",
    },
    validationSchema: AddUserScheme(),
    onSubmit: () => initRequest(),
  });

  useEffect(() => {
    if (group) setFieldValue("group_id", group?.id);
  }, [group]);

  

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
        title={"Assign Group"}
        size={"xl"}
        proceedButtonProps={{ colorScheme: "teal" }}
        proceedButtonDefaultChild={"Assign"}
        isOpen={rest?.isOpen ? rest?.isOpen : show}
        onProceed={handleSubmit}
        onClose={initOnClose}
        isProceeding={isLoading}
        {...rest}
      >
        <div className="row g-2">
        <div className="col-12">
            <PrimarySelect
              name="Group"
              placeholder="Select Group"
              options={groupNames}
              onChange={handleChange}
              size={"lg"}
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
