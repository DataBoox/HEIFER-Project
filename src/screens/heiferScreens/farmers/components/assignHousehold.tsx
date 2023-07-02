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
import { Farmer, useGetFarmersQuery } from "store/farmers";
import { useProject } from "store/projects";
import { useAddUserMutation } from "store/user";

export interface AssignFarmerDialogProps extends ChakraAlertDialogProps {
  useButton?: boolean;
  farmer?: Farmer;
  children?: string | React.ReactElement;
  buttonProps?: ButtonProps;
}

export const AssignFarmerDialog: React.FC<AssignFarmerDialogProps> = ({
  farmer,
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
  const { data: farmers } = useGetFarmersQuery({ project_id: projectId });
  const farmerNames = farmers?.data.data.map((farmer: Farmer) => {
    return {
      text: farmer.first_name+" "+farmer.last_name,
      props: { value: farmer.id }
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
    if (farmer) setFieldValue("farmer_id", farmer?.id);
  }, [farmer]);

  

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
        title={"Assign To Household"}
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
              name="Farmer"
              placeholder="Select Farmer"
              options={farmerNames}
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
