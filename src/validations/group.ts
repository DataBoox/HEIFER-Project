import { number, object, string, mixed, date } from "yup";

export const AddGroupScheme = () => {
    return object({
      group_id: number().required('Group ID is required'),
      project_id: number().required('Project ID is required'),
      name: string().required('Group name is required'),
      description: string().required('Description is required'),
      meeting_days: mixed().required('Meeting Day is required'),
     venue: string().required('Venue is required'),
      community: string().required('Community is required'),
      established_at: date().required('Date of establishment is required'),
      // chairman: string().required('Group Chairman is required'),
      // vice_chairman: string().required('Group Vice Chairman name is required'),
      // secretary: string().required('Group Secretary is required'),
    });
}

export const EditGroupScheme = () => {
    return object({
      group_id: number().required('Group ID is required'),
      project_id: number().required('Project ID is required'),
      name: string().required('Group name is required'),
      description: string().required('Description is required'),
      meeting_days: mixed().required('Meeting Day is required'),
     venue: string().required('Venue is required'),
      community: string().required('Community is required'),
      established_at: date().required('Date of establishment is required'),
      chairman: string().required('Group Chairman is required'),
      vice_chairman: string().required('Group Vice Chairman name is required'),
      secretary: string().required('Group Secretary is required'),
    });
}
