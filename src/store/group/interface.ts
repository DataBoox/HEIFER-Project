import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresGroupID {
    groups: (number | string)[],
}

export interface GroupInfo {

    group_id: number;
    project_id: number;
    farmer_id: number,
    name: string;
    description: string;
    meeting_days: (number | string)[],
    venue: string;
    community: string;
    established_at: string;
    chairman: string;
    vice_chairman: string;
    secretary: string;
    farmers: string;
    group_interventions_count: number;
    group_farmers_count: number
}

export interface AddGroupPayload {
    groups: { name: string, file: File }[],
    group_id?: number | string | null,
    project_id?: number | string | null,
}

export interface EditGroupPayload extends RequiresGroupID {

}

export interface DeleteGroupsPayload {
    groups: (number | string)[],
}

export interface FetchGroupsPayload extends PaginatedPayload {
    project_id: number;
    query?: string;
    state?: string, 
    lga?: string, 
    community?: string, 
    interventions?: Array<number>, 
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
    name: any;
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


export interface AssignInterventionPayload {
    group_id: number | string;
    interventions: Array<object>
}

export interface AssignFarmerPayload {
    group_id: number | string;
    farmers: Array<object>
}
