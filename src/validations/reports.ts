import { object, string, number, mixed } from "yup";

export const AddReportScheme = () => {
    return object({
        community_name: string().required('Community Name is required'),
        shf_target: mixed().required("Farmers' Target is required"),
        shf_achievement: mixed().required("Farmers' Achievement is required"),
        shg_target: mixed().required("Groups' Target is required"),
        shg_achievement: mixed().required("Groups' Achievement is required"),
        outcomes: string().required('Outcome is required'),
        activity: string().required('Activity is required'),
        challenges: string().required('Challenge Info is required'),
        no_male_farmers: string().required('Total Male Farmers is required'),
        no_female_farmers: string().required('Total Female Farmers required'),
        training_duration: string().required('Training Duration is required'),
        next_steps: string().required('This Field is required'),
        remarks: string().required('Remarks is required'),
    });
}

export const EditReportScheme = () => {
    return object({
        community_name: string().required('Community Name is required'),
        shf_target: mixed().required("Farmers' Target is required"),
        shf_achievement: mixed().required("Farmers' Achievement is required"),
        shg_target: mixed().required("Groups' Target is required"),
        shg_achievement: mixed().required("Groups' Achievement is required"),
        activity: string().required('Activity is required'),
        outcomes: string().required('Outcome is required'),
        challenges: string().required('Challenge Info is required'),
        no_male_farmers: string().required('Total Male Farmers is required'),
        no_female_farmers: string().required('Total Female Farmers required'),
        training_duration: string().required('Training Duration is required'),
        next_steps: string().required('This Field is required'),
        remarks: string().required('Remarks is required'),
    });
}
