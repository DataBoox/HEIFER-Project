import { object, string } from "yup";

export const AddShgRecordScheme = () => {
    return object({
        entity_name: string().required('Entity Name is required'),
            financial: string().required('This Field is required'),
            business_plan: string().required('This Field is required'),
            hold_meeting: string().required('This Field is required'),
            cash: string().required('This Field is required'),
            asset: string().required('This Field is required'),
            financial_services: string().required('This Field is required'),
            how_much_was_accessed: string().required('This Field is required'),
            service_provider: string().required('This Field is required'),
            comment: string().required('This Field is required'),
    });
}

export const EditShgRecordScheme = () => {
    return object({
        entity_name: string().required('Entity Name is required'),
        financial: string().required('This Field is required'),
        business_plan: string().required('This Field is required'),
        hold_meeting: string().required('This Field is required'),
        cash: string().required('This Field is required'),
        asset: string().required('This Field is required'),
        financial_services: string().required('This Field is required'),
        how_much_was_accessed: string().required('This Field is required'),
        service_provider: string().required('This Field is required'),
        comment: string().required('This Field is required'),
    });
}
