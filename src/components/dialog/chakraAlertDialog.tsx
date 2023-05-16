import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogProps, Button, ButtonProps, ModalHeaderProps } from "@chakra-ui/react";
import React from "react";

export interface ChakraAlertDialogProps {
    title?: string;
    children?: string | React.ReactNode;
    size?: AlertDialogProps['size'],
    isOpen?: boolean;
    onClose?: () => void;
    onProceed?: () => void;
    isProceeding?: boolean;
    isCancelling?: boolean;
    headerProps?: ModalHeaderProps;
    proceedButtonProps?: ButtonProps;
    proceedButtonDefaultChild?: string|React.ReactElement;
    closeButtonProps?: ButtonProps;
    cancelButtonDefaultChild?: string|React.ReactElement;
}
export const ChakraAlertDialog: React.FC<ChakraAlertDialogProps> = ({
    title = "Sign Out",
    children = "You are about to delete this record kindly click continue to proceed.",
    isOpen = false,
    onClose = () => { },
    onProceed = () => { },
    isProceeding,
    isCancelling,
    headerProps,
    proceedButtonProps,
    closeButtonProps,
    proceedButtonDefaultChild = 'Continue',
    cancelButtonDefaultChild = 'Cancel',
    ...rest
}) => {
    const cancelRef = React.useRef<any>()

    return (
      <>
        <AlertDialog
          {...rest}
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent mx="auto">
              <AlertDialogHeader
                style={{ padding: "1rem" }}
                fontSize="lg"
                fontWeight="bold"
                {...headerProps}
              >
                {title}
              </AlertDialogHeader>

              <AlertDialogBody>{children}</AlertDialogBody>

              <AlertDialogFooter justifyContent="center">
                <Button
                  ref={cancelRef}
                  onClick={onClose}
                  isLoading={isCancelling}
                  {...closeButtonProps}
                  padding="16px 20px"
                  bgColor="transparent"
                  border="1px solid #2A4153"
                  borderRadius={0}
                  _hover={{ bgColor: "transparent", borderColor: "#2A4153" }}
                >
                  {cancelButtonDefaultChild}
                </Button>

                <Button
                  onClick={onProceed}
                  ml={3}
                  isLoading={isProceeding}
                  {...proceedButtonProps}
                  padding="16px 20px"
                  bgColor="#2A4153"
                  borderRadius={0}
                  _hover={{ bgColor: "#2A4153" }}
                >
                  {proceedButtonDefaultChild}
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    );
}

export const BasicAlertDialog = ChakraAlertDialog;