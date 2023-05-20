import { number, object, string } from "yup";

export const AddGroupScheme = () => {
    return object({
        title: string().required('Group name is required'),
        member_id: number().required('Member is required'),
        group: string().required('Group is required'),
    });
}

export const EditGroupScheme = () => {
    return object({
        title: string().required('Group name is required'),
        group: string().required('Group is required'),
        member_id: number().required('Member is required'),
        group_id: number(),
        approved_by: number(),
    });
}
