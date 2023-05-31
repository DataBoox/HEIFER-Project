import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresFarmerID {
    farmers: (number | string)[],
}

export interface FarmerInfo {
    address: string,
      email_address: string,
      gender: string,
      age: number,
      age_category: string,
      phone: number,
      household_head: string,
      marital_status: string,
      education_level: string,
      means_of_id: string,
      id_type: string,
      group_or_ass: string,
      fname: string,
    id: number;
      lname: string,
      created_at: string,
      gtype: string,
}

export interface AddFarmerPayload {
    farmers: { name: string, file: File }[],
    farmer_id?: number | string | null,
}

export interface EditFarmerPayload extends RequiresFarmerID {

}

export interface DeleteFarmersPayload {
    farmers: (number | string)[],
}

export interface FetchFarmersPayload extends PaginatedPayload {
    farmers?: (number | string)[]
}


export interface BaseFarmer{
    id: number;
    church_id: number;
    ref: string;
    provider: string;
    url: string;
    meta: { type: string, size: number, name: string, extension: string, name_on_disk: string }
    // creator?: UserWithMember;
    created_by: number;
    updated_at: string;
    created_at: string;
}

export interface Farmer extends BaseFarmer {
}


export interface ChurchFarmersResponse extends IResponse {
    data: {
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


