import { number, object, string } from "yup";

export const AddRegisterFarmerScheme = () => {
    return object({
    
    cluster_name: string().required('Cluster name is required'),
    cluster_no: string().required('Cluster number is required'),
    cluster_head_name: string().required("Cluster's head is required"),
    farmer_gender: string().required('Farmer gender is required'),
    farmer_age: string().required('Farmer age is required'),
    farmer_age_category: string().required('Farmer age category is required'),
    farmer_phone: string().required('Farmer phone number is required'),
    marital_status: string().required('Marital status is required'),
    is_house_head: string().required('House head is required'),
    house_head_gender: string().required('House head gender is required'),
    house_head_edu: string().required('House head education is required'),
    valid_id: string().required('Valid ID is required'),
    group_name: string().required('Group name is required'),
    group_type: string().required('Group Type is required'),
    project_id: string().required('Project ID is required'),

    });
}

export const EditRegisterFarmerScheme = () => {
    return object({
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
    group_name: string().required('Group name is required'),
    group_type: string().required('Group Type is required'),
    project_id: string().required('Project ID is required'),
    family_id: string().required('Family ID is required'),
    });
}
