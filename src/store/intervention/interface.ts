import { PaginatedPayload } from "@store/interface";
import { IResponse, User } from "../auth";

export interface RequiresInterventionID {
    interventions: (number | string)[],
}

export interface AddInterventionPayload {
    interventions: { name: string, file: File }[],
    name: string;
    intervention_id: number;
    description: string[];
    project_id?: number | string | null,
}

export interface EditInterventionPayload extends RequiresInterventionID {

}

export interface DeleteInterventionsPayload {
    interventions: (number | string)[],
}

export interface FetchInterventionsPayload extends PaginatedPayload {
    project_id: number;
    interventions?: (number | string)[]
}


export interface BaseIntervention {
    id: number;
    name: string;
    project_id: number;
    intervention_id: number;
    description: string[];
    created_at: string;
    updated_at: string;
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


