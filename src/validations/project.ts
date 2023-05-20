import { number, object, string } from "yup";

export const AddProjectScheme = () => {
    return object({
        title: string().required('Project name is required'),
        member_id: number().required('Member is required'),
        project: string().required('Project is required'),
    });
}

export const EditProjectScheme = () => {
    return object({
        title: string().required('Project name is required'),
        project: string().required('Project is required'),
        member_id: number().required('Member is required'),
        project_id: number(),
        approved_by: number(),
    });
}
