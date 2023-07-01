import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresProfileID {
    profile: (number | string)[],
}

export interface ProfileInfo {
    fname: string;
    lname: string;
    state: string;
    lga: string;
    community: string;
    gender: string;
    phone: string;
    id: number;
    pid: number;
    contact_mode: string[];
    profile: Profile;
    status: number;
    updated_at: string;
    created_at: string;
}

export interface AddProfilePayload {
    profile: { name: string, file: File }[],
    profile_id?: number | string | null,
}

export interface EditProfilePayload extends RequiresProfileID {

}

export interface DeleteProfilePayload {
    profile: (number | string)[],
}

export interface FetchProfilePayload extends PaginatedPayload {
    project_id: number; 
}


export interface BaseProfile {
    id: number;
    email: string;
    ref: string;
    status: number;
    created_by: number;
    updated_at: string;
    created_at: string;
}

export interface Profile extends BaseProfile {
}


export interface ChurchProfileResponse extends IResponse {
    data: {
        data: Profile[],
        next: number;
        total: number;
    }
}


export interface ProfileInfoResponse extends IResponse {
    data: Profile,
}


export interface ProfileSuccessResponse extends IResponse {
    data: Profile[],
}


