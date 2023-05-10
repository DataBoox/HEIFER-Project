import { ChakraProvider } from '@chakra-ui/react';
import { chakraCustomTheme } from 'theme';

export const ChakraProviderLoader:React.FC<{
    children: React.ReactNode
}> = ({
    children
}) => {
    return (
        <ChakraProvider theme={chakraCustomTheme}>
            {children}
        </ChakraProvider>
    )
}