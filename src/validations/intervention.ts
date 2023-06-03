import { number, object, string } from "yup";

export const AddInterventionScheme = () => {
    return object({
        name: string().required('Intervention name is required'),
        description: string().required('Description is required'),
        project_id: number(),
        // intervention: string().required('Intervention is required'),
    });
}

export const EditInterventionScheme = () => {
    return object({
        name: string().required('Intervention name is required'),
         description: string().required('Description is required'),
        // intervention: string().required('Intervention is required'),
        project_id: number(),
        approved_by: number(),
    });
}
