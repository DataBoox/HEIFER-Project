import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresFarmerformID {
    farmerforms: (number | string)[],
}

export interface FarmerformInfo {
    cluster_name: string,
      cluster_number: string,
      cluster_head: string,
      gender: string,
      gender_household: string,
      age: number,
      age_category: string,
      phone: number,
      household_head: string,
      marital_status: string,
      education_level: string,
      means_of_id: string,
      id_type: string,
      group_or_ass: string,
      gname: string,
      gtype: string,
}

export interface AddFarmerformPayload {
    farmerforms: { name: string, file: File }[],
    farmerform_id?: number | string | null,
}

export interface EditFarmerformPayload extends RequiresFarmerformID {

}

export interface DeleteFarmerformsPayload {
    farmerforms: (number | string)[],
}

export interface FetchFarmerformsPayload extends PaginatedPayload {
    farmerforms?: (number | string)[]
}


export interface BaseFarmerform{
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

export interface Farmerform extends BaseFarmerform {
}


export interface ChurchFarmerformsResponse extends IResponse {
    data: {
        data: Farmerform[],
        next: number;
        total: number;
    }
}


export interface FarmerformInfoResponse extends IResponse {
    data: Farmerform,
}


export interface FarmerformSuccessResponse extends IResponse {
    data: Farmerform[],
}


