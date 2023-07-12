import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { ChakraAlertDialog, ChakraAlertDialogProps, PrimarySelect } from "components";
import { useFormik } from "formik";
import { ChakraProviderLoader } from "providers";
import { useEffect, useState } from "react";
import { useAssignInterventionMutation } from "store/farmers";
import { Intervention, useGetInterventionsQuery } from "store/intervention";
import { useProject } from "store/projects";
import { useAddUserMutation } from "store/user";
import { resolveApiError } from "utilities";
export interface AssignInterventionDialogProps extends ChakraAlertDialogProps {
  requiredId: number | string;
  useButton?: boolean;
  intervention?: Intervention;
  children?: string | React.ReactElement;
  buttonProps?: ButtonProps;
}

export const AssignInterventionDialog: React.FC<AssignInterventionDialogProps> = ({
  requiredId,
  intervention,
  useButton = false,
  children,
  buttonProps,
  onClose = () => {},
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const toast = useToast({ position: "top-right" });
  const [selectedInterventions, setSelectedInterventions] = useState<string[]>([]);
  const [request, { isLoading }] = useAddUserMutation();
  const projectId: number = useProject().project.id;
  const handleInterventionChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const interventionId = event.target.value;
  
    setSelectedInterventions((prevInterventions) => {
      if (prevInterventions.includes(interventionId)) {
        return prevInterventions.filter((id) => id !== interventionId);
      } else {
        return [...prevInterventions, interventionId];
      }
    });
  };
  const handleAddIntervention = () => {
    setSelectedInterventions([]);
  };
  const { data: interventions } = useGetInterventionsQuery({ project_id: projectId });
  const interventionNames = interventions?.data.data.map((data: { name: any; id: any; }) => {
    return { text: `${data.name}`, props: { value: data.id  }}
  })
  const { values, handleChange, setFieldValue } = useFormik({
    initialValues: { intervention: "" }, onSubmit: () => initRequest()
  });
  const [assignIntervention] = useAssignInterventionMutation();

  useEffect(() => {
    if (intervention) setFieldValue("intervention", intervention?.id);
  }, [intervention]);

  
  const initRequest = () => {
    let payload = {
      farmer_id: requiredId,
      interventions: selectedInterventions.map(interventionId => ({ id: interventionId }))
    };
    assignIntervention(payload).unwrap().then((response) => {
      let msg = "Assigned successfully"
      toast({ title: "Intervention", description: msg, status: "success" })
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
        title={"Assign Intervention"}
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
        <div className="col-12 d-flex flex-column align-items-end">
  <PrimarySelect
    name="intervention"
    placeholder="Select Intervention"
    options={interventionNames}
    onChange={handleChange}
    size={"lg"}
    isDisabled={isLoading}
    style={{
      backgroundColor: "#F2FAFC",
      borderRadius: 0,
      borderColor: "#CAECF3",
    }}
  />
  <Button onClick={handleAddIntervention} className="mt-4">Add</Button>
</div>

         
         
        </div>
      </ChakraAlertDialog>
    </ChakraProviderLoader>
  );
};
