import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";
import { BaseIntervention } from "store/intervention";
export interface RequiresFarmerID {
    project_id: number;
    farmer_id: number|string
}

export interface FarmerInfo {
    id: number,
    farmer_address: string,
    first_name: string,
    last_name: string,
    created_at: string,
    cluster_name: string,
    cluster_no: string,
    cluster_head_name: string,
    farmer_gender: string,
    farmer_gender_household: string,
    farmer_age: number,
    farmer_age_category: string,
    farmer_phone: number,
    is_house_head: boolean,
    house_head_gender: string,
    house_head_edu: string,
    marital_status: string,
    valid_id: string,
    state: string,
    lga: string,
    community: string,
    id_type: string,
    group_name: string,
    group_type: string,
    project_id: number,
    farmer_id: number,
    latitude: number,
    longitude: number,
    no_of_males: number,
    no_of_females: number,
    total_household: number,
    farm_size: string,
    household_type: string,
    household_income: string,
    farmer_interventions: FarmerInterventions[]
}

export interface AddFarmerPayload {
    farmer_address: string,
      first_name: string,
      last_name: string,
      created_at: string,
      cluster_name: string,
      cluster_no: number,
      cluster_head_name: string,
      farmer_gender: string,
      farmer_gender_household: string,
      farmer_age: number,
      farmer_age_category: string,
      farmer_phone: number | string,
      is_house_head: boolean,
      house_head_gender: string,
      house_head_edu: string,
      marital_status: string,
      valid_id: string,
      id_type: string,
      group_or_ass: string,
      group_name: string,
      group_type: string,
      project_id: number,
      farmer_id: number,
      latitude: number,
      longitude: number,
      state: string,
      lga: string,
      no_of_males: string,
      no_of_females: string,
      total_household: string,
      farm_size: string,
      household_type: string,
      household_income: string,

}

export interface EditFarmerPayload extends RequiresFarmerID {
    farmer_address: string,
    first_name: string,
    last_name: string,
    created_at: string,
    cluster_name: string,
    cluster_no: number,
    cluster_head_name: string,
    farmer_gender: string,
    farmer_gender_household: string,
    farmer_age: number,
    farmer_age_category: string,
    farmer_phone: number | string,
    is_house_head: boolean,
    house_head_gender: string,
    house_head_edu: string,
    marital_status: string,
    valid_id: string,
    id_type: string,
    group_or_ass: string,
    group_name: string,
    group_type: string,
    project_id: number,
    farmer_id: number,
    latitude: number,
    longitude: number,
    state: string,
    lga: string,
    no_of_males: string,
    no_of_females: string,
    total_household: string,
    farm_size: string,
    household_type: string,
    household_income: string,
}

export interface DeleteFarmersPayload {
    farmers: (number | string)[],
}

export interface FetchFarmersPayload extends PaginatedPayload {
    project_id: number,
    query?: string, 
    gender?: string, 
    age_catgeory?: string, 
    state?: string, 
    lga?: string, 
    community?: string, 
    interventions?: Array<number>, 
    income?: string
}


export interface BaseFarmer {
    id: number;
    farmer_id: number;
    ref: string;
    provider: string;
    url: string;
    meta: { type: string, size: number, name: string, extension: string, name_on_disk: string }
    // creator?: UserWithMember;
    created_by: number;
    updated_at: string;
    created_at: string;
}

export interface Farmer extends FarmerInfo {
    
}


export interface ChurchFarmersResponse extends IResponse {
    total: any;
    data: {
        map: any;
        data: Farmer[],
        next: number;
        total: number;
    }
}


export interface FarmerInfoResponse extends IResponse {
    data: Farmer,
}


export interface FarmerSuccessResponse extends IResponse {
    data: Farmer[],
}

export interface AssignInterventionPayload {
    farmer_id: number | string;
    interventions: Array<object>
}

export interface FarmerInterventions {
    id: number,
    farmer_id: number,
    intervention_id: number,
    created_by: number,
    deleted_at: null | string,
    updated_at: string,
    created_at: string,
    intervention: BaseIntervention[]
}