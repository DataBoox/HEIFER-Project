import { PaginatedPayload } from "@store/interface";
import { IResponse, User } from "../auth";

export interface RequiresHistoryID {
    historys: (number | string)[],
}

export interface AddHistoryPayload {
    historys: { name: string, file: File }[],
    name: string;
    history_id: number;
    intervention_id: number;
    description: string[];
    project_id?: number | string | null,
}

export interface EditHistoryPayload extends RequiresHistoryID {

}

export interface DeleteHistorysPayload {
    historys: (number | string)[],
}

export interface FetchHistorysPayload extends PaginatedPayload {
    project_id?: number;
    historys?: (number | string)[]
}


export interface BaseHistory {
    id: number;
    name: string;
    project_id: number;
    history_id: number;
    intervention_id: number;
    description: string[];
    created_at: string;
    updated_at: string;
}

export interface History extends BaseHistory {
}


export interface ChurchHistorysResponse extends IResponse {
    data: {
        data: History[],
        next: number;
        total: number;
    }
}


export interface HistoryInfoResponse extends IResponse {
    data: History,
}


export interface HistorySuccessResponse extends IResponse {
    data: History[],
}


