import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { AddInterventionScheme } from "validations";
import {
  ChakraAlertDialog,
  ChakraAlertDialogProps,
  PrimaryInput,
  PrimaryTextarea,
} from "components";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useEffect, useState } from "react";
import { ChakraProviderLoader } from "providers";
import { useAddInterventionMutation } from "store/intervention";
import { Intervention } from "@store/intervention";

export interface AddInterventionDialogProps extends ChakraAlertDialogProps {
  useButton?: boolean;
  intervention?: Intervention;
  children?: string | React.ReactElement;
  buttonProps?: ButtonProps;
}

export const AddInterventionDialog: React.FC<AddInterventionDialogProps> = ({
  intervention,
  useButton = false,
  children,
  buttonProps,
  onClose = () => {},
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const toast = useToast({ position: "top-right" });
  const [request, { isLoading }] = useAddInterventionMutation();
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
      name: "",
      description: "",
    },
    validationSchema: AddInterventionScheme(),
    onSubmit: () => initRequest(),
  });

  useEffect(() => {
    if (intervention) setFieldValue("intervention_id", intervention?.intervention_id);
  }, [intervention]);


  const initRequest = () => {
    const payload: any = {
      ...values,
    };
    request(payload)
      .unwrap()
      .then((res) => {
        // console.log(res);
        toast({
          title: "Intervention Added",
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
        <Button onClick={() => setShow(true)} {...buttonProps} _hover={{ bg: "#bbc7ca", transition: "background-color 0.5s ease-in-out"}}>
          {children}
          
        </Button>
      )}
      <ChakraAlertDialog
        title={"Add Intervention"}
        size={"xl"}
        proceedButtonProps={{ colorScheme: "teal" }}
        proceedButtonDefaultChild={"Create"}
        isOpen={rest?.isOpen ? rest?.isOpen : show}
        onProceed={handleSubmit}
        onClose={initOnClose}
        isProceeding={isLoading}
        {...rest}
      >
        <div className="row g-4">
          <div className="col-12">
            <PrimaryInput
              isRequired
              name="name"
              label="Intervention Name"
              placeholder="Enter intervention name"
              value={values.name}
              error={Boolean(touched.name && errors.name)}
              bottomText={errors.name}
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
            <PrimaryTextarea
              isRequired
              name="description"
              label={"Description"}
              placeholder="About the intervention"
              size={"lg"}
              rows={7}
              value={values.description}
              error={Boolean(touched.description && errors.description)}
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
        </div>
      </ChakraAlertDialog>
    </ChakraProviderLoader>
  );
};
