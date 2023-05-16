import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresUserID {
    users: (number | string)[],
}

export interface User {
  fname: string;
  lname: string;
   id: number;
    user_id: number;
    contact_mode: string[];
    User: User;
    status: number;
    updated_at: string;
    created_at: string;
}

export interface AddUserPayload {
    users: { name: string, file: File }[],
    user_id?: number | string | null,
}

export interface EditUserPayload extends RequiresUserID {

}

export interface DeleteUsersPayload {
    users: (number | string)[],
}

export interface FetchUsersPayload extends PaginatedPayload {
    users?: (number | string)[]
}


export interface BaseUser {
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


