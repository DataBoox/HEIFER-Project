import { array, boolean, date, number, object, string } from "yup";

export const AddUserScheme = () => {
    return object({
        title: string().required('User name is required'),
        member_id: number().required('Member is required'),
        user: string().required('User is required'),
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
