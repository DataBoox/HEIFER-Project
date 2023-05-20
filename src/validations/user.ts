import { array, boolean, date, number, object, string } from "yup";

export const AddUserScheme = () => {
    return object({
        fname: string().required('First name is required'),
        lname: string().required('Last name is required'),
        email: string().email().required('User email address is required'),
        // phone: number().required('Phone number is required'),
        gender: string().required('Gender is required'),
        state: string().required('State is required'),
        lga: string().required('Local government area is required'),
        community: string().required('Community is required'),
    });
}

export const EditUserScheme = () => {
    return object({
        title: string().required('User name is required'),
        user: string().required('User is required'),
        member_id: number().required('Member is required'),
        user_id: number(),
        approved_by: number(),
    });
}
