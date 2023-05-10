import { Alert, AlertIcon, AlertProps, Heading, Stack, Text } from "@chakra-ui/react"

export interface AlertDefaultBoxProps extends AlertProps {
    title?: string,
    body?: string;
}
export const AlertDefaultBox: React.FC<AlertDefaultBoxProps> = ({
    title,
    body,
    ...rest
}) => {
    return (
        <Alert status='info' rounded={'md'} {...rest}>
            <AlertIcon />
            <Stack>
                {title && <Heading size={"xs"} marginBottom={0}>{title}</Heading>}
                {(body && typeof body === 'string') ? (
                    <Text fontSize='sm' className={"mt-0"}>
                        {body}
                    </Text>
                ) : body}
            </Stack>
        </Alert>
    )
}