import { number, object, string, boolean } from "yup";

export const AddRegisterFarmerScheme = () => {
    return object({
    first_name: string().required('Cluster name is required'),
    last_name: string().required('Cluster name is required'),
    cluster_name: string().required('Cluster name is required'),
    cluster_no: string().required('Cluster number is required'),
    cluster_head_name: string().required("Cluster's head is required"),
    farmer_gender: string().required('Farmer gender is required'),
    farmer_age: string().required('Farmer age is required'),
    farmer_age_category: string().required('Farmer age category is required'),
    farmer_phone: string().required('Farmer phone number is required'),
    marital_status: string().required('Marital status is required'),
    is_house_head: boolean().required('House head is required'),
    house_head_gender: string().required('House head gender is required'),
    house_head_edu: string().required('House head education is required'),
    valid_id: string().required('Valid ID is required'),
    state: string().required('State is required'),
    lga: string().required('Local Government is required'),
    community: string().required('Commmunity is required'),
    project_id: string().required('Project ID is required'),
    no_of_males: number().required('Number of males is required'),
      no_of_females: number().required('Number of females is required'),
      farm_size: string().required('Farm size is required'),
      household_type: string().required('Household type is required'),
      household_income: string().required('Household Income is required'),

    });
}

export const EditRegisterFarmerScheme = () => {
    return object({
        first_name: string().required('Cluster name is required'),
    last_name: string().required('Cluster name is required'),
        cluster_name: string().required('Cluster name is required'),
    cluster_no: string().required('Cluster name is required'),
    cluster_head_name: string().required('Cluster name is required'),
    farmer_gender: string().required('Farmer gender is required'),
    farmer_age: string().required('Farmer age is required'),
    farmer_age_category: string().required('Farmer age category is required'),
    farmer_phone: string().required('Farmer phone number is required'),
    marital_status: string().required('Marital status is required'),
    is_house_head: string().required('House head is required'),
    house_head_gender: string().required('House head gender is required'),
    house_head_edu: string().required('House head education is required'),
    valid_id: string().required('Valid ID is required'),
    state: string().required('State is required'),
    lga: string().required('Local Government is required'),
    community: string().required('Commmunity is required'),
    project_id: string().required('Project ID is required'),
    no_of_males: number().required('Number of males is required'),
    no_of_females: number().required('Number of females is required'),
    farm_size: string().required('Farm size is required'),
    household_type: string().required('Household type is required'),
    household_income: string().required('Household Income is required'),
    });
}
