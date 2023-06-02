import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresInterventionID {
    interventions: (number | string)[],
}

export interface InterventionInfo {
  name: string;
   project_id: number;
    intervention_id: number;
    description: string[];
    intervention: Intervention;
    created_by: string;
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
    ref: string;
    provider: string;
    url: string;
    meta: { type: string, size: number, name: string, extension: string, name_on_disk: string }
    name: string;
   project_id: number;
    intervention_id: number;
    description: string[];
    intervention: Intervention;
    created_by: string;
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


