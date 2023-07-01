import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { ChakraAlertDialog, ChakraAlertDialogProps, PrimarySelect } from "components";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useEffect, useState } from "react";
import { ChakraProviderLoader } from "providers";
import { Group, useGetGroupsQuery, useAssignGroupMutation } from "store/group";
import { useProject } from "store/projects";
import { useAddUserMutation } from "store/user";

export interface AssignGroupDialogProps extends ChakraAlertDialogProps {
  requiredId: number | string;
  useButton?: boolean;
  group?: Group;
  children?: string | React.ReactElement;
  buttonProps?: ButtonProps;
}

export const AssignGroupDialog: React.FC<AssignGroupDialogProps> = ({
  requiredId,
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
    return { text: group.name, props: { value: group.id } };
  });

  const { values, handleChange, setFieldValue } = useFormik({
    initialValues: { group: "" }, onSubmit: () => initRequest()
  });

  const [assignGroup] = useAssignGroupMutation();

  useEffect(() => {
    if (group) setFieldValue("group", group?.id);
  }, [group]);

  

  const initRequest = () => {
    let payload = { group_id: values.group, farmers: [{ id: requiredId }]}
    assignGroup(payload).unwrap().then((response) => {
      let msg = "Assigned successfully"
      toast({ title: "Group", description: msg, status: "success" })
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }

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
        onProceed={initRequest}
        onClose={initOnClose}
        isProceeding={isLoading}
        {...rest}
      >
        <div className="row g-2">
        <div className="col-12">
            <PrimarySelect
              name="group"
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
