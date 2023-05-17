import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresGroupID {
    groups: (number | string)[],
}

export interface Group {
  fname: string;
  lname: string;
   id: number;
    group_id: number;
    contact_mode: string[];
    group: Group;
    status: number;
    updated_at: string;
    created_at: string;
}

export interface AddGroupPayload {
    groups: { name: string, file: File }[],
    group_id?: number | string | null,
}

export interface EditGroupPayload extends RequiresGroupID {

}

export interface DeleteGroupsPayload {
    groups: (number | string)[],
}

export interface FetchGroupsPayload extends PaginatedPayload {
    groups?: (number | string)[]
}


export interface BaseGroup{
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

export interface Group extends BaseGroup {
}


export interface ChurchGroupsResponse extends IResponse {
    data: {
        data: Group[],
        next: number;
        total: number;
    }
}


export interface GroupInfoResponse extends IResponse {
    data: Group,
}


export interface GroupSuccessResponse extends IResponse {
    data: Group[],
}

