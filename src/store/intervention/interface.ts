import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresInterventionID {
    interventions: (number | string)[],
}

export interface Intervention {
  fname: string;
  lname: string;
   id: number;
    intervention_id: number;
    contact_mode: string[];
    intervention: Intervention;
    status: number;
    updated_at: string;
    created_at: string;
}

export interface AddInterventionPayload {
    interventions: { name: string, file: File }[],
    intervention_id?: number | string | null,
}

export interface EditInterventionPayload extends RequiresInterventionID {

}

export interface DeleteInterventionsPayload {
    interventions: (number | string)[],
}

export interface FetchInterventionsPayload extends PaginatedPayload {
    interventions?: (number | string)[]
}


export interface BaseIntervention{
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

export interface Intervention extends BaseIntervention {
}


export interface ChurchInterventionsResponse extends IResponse {
    data: {
        data: Intervention[],
        next: number;
        total: number;
    }
}


export interface InterventionInfoResponse extends IResponse {
    data: Intervention,
}


export interface InterventionSuccessResponse extends IResponse {
    data: Intervention[],
}


