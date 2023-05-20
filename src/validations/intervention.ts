import { number, object, string } from "yup";

export const AddInterventionScheme = () => {
    return object({
        title: string().required('Intervention name is required'),
        member_id: number().required('Member is required'),
        intervention: string().required('Intervention is required'),
    });
}

export const EditInterventionScheme = () => {
    return object({
        title: string().required('Intervention name is required'),
        intervention: string().required('Intervention is required'),
        member_id: number().required('Member is required'),
        intervention_id: number(),
        approved_by: number(),
    });
}
