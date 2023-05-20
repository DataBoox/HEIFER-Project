import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { materialCustomTheme } from 'theme';

export const MaterialProviderLoader:React.FC<{
    children: React.ReactNode
}> = ({
    children
}) => {
    return (
        <MaterialThemeProvider theme={materialCustomTheme}>
            {children}
        </MaterialThemeProvider>
    )
}