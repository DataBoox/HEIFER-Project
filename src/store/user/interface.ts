import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresUserID {
    users: (number | string)[],
}

export interface UserInfo {
    fname: string;
    lname: string;
    state: string;
    lga: string;
    community: string;
    gender: string;
    phone: string;
    id: number;
    uid: number;
    contact_mode: string[];
    user: User;
    status: number;
    updated_at: string;
    created_at: string;
}

export interface AddUserPayload {
    users: { name: string, file: File }[],
    user_id?: number | string | null,
}

export interface EditUserPayload {
    uid: number | undefined;
    fname: string | undefined;
    lname: string | undefined;
    email: string | undefined;
    gender: string | undefined;
}

export interface DeleteUsersPayload {
    users: (number | string)[],
}

export interface FetchUsersPayload extends PaginatedPayload {
    project_id: number; 
}


export interface BaseUser {
    id: number;
    email: string;
    ref: string;
    status: number;
    created_by: number;
    updated_at: string;
    created_at: string;
}

export interface User extends BaseUser {
}


export interface ChurchUsersResponse extends IResponse {
    data: {
        data: User[],
        next: number;
        total: number;
    }
}


export interface UserInfoResponse extends IResponse {
    data: User,
}


export interface UserSuccessResponse extends IResponse {
    data: User[],
}

export interface ChangePasswordPayload {
    old: string,
    password: string,
    confirm: string,
}
