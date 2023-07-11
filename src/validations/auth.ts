import { object, string } from "yup";

export const LoginValidationSchema = () => {
    return object({
        auth: string().required("Email or Username is required"),
        password: string().required('Password is required'),
    });
}

export const RegisterValidationSchema = (checkUsername: boolean) => {
    return object({
        church_name: string().required('Church Name is required'),
        email: string().email().required("Email Address is required"),
        sub_domain: string().min(2, 'Sub domain must be at least 2 characters').required("Sub Domain is required").test('domain-exist', 'This sub-domain already exists.', () => {
            return checkUsername
        }),
        password: string().min(8, 'Password must be minimum 8 characters long.').required('Password is required'),
        confirm: string().required('Confirm Password is required').test('passwords-match', 'Passwords must match', function (value) { return this.parent.password === value}),
    });
}

export const ForgotValidationSchema = () => {
    return object({
        email: string().email().required("Email Address is required"),
    });
}

export const ResetPasswordValidationSchema = () => {
    return object({
        old: string().required('Old password is required'),
        password: string().required('Password is required'),
        confirm: string().required('Confirm Password is required').test('passwords-match', 'Passwords must match', function (value) { return this.parent.password === value }),
    });
}
