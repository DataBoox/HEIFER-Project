import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure } from "@chakra-ui/react"
import { siteUrl } from "utilities";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogout } from "store/auth/hooks";

interface LogoutAlertDialogProps {
    isOpen?: boolean;
    onClose?: () => void;
}
export const LogoutAlertDialog: React.FC<LogoutAlertDialogProps> = ({
    isOpen = false,
    onClose = () => {} 
})  => {
    const logout = useLogout();
    const cancelRef = React.useRef<any>()

    const initLogout = () => {
        logout()
        onClose();
        setTimeout(() => {
            window.location.replace('/auth/login');
        }, 1000)
    }

    return (
        <>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay className="text-dark">
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Sign Out
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            You are about to log out from your current session you will need to sign in again to access your dashboard.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={initLogout} ml={3}>
                                Continue
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}