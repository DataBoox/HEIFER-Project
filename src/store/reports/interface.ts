import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresReportID {
    reports: (number | string)[],
}

export interface ReportInfo {
    report_id: number;
    project_id: number;
    farmer_id: number,
    uploaded_by: string;
    community_name: string;
    date_uploaded: string;
    shf_target: (number | string)[],
    shf_achievement: (number | string)[],
    shg_target: (number | string)[],
    shg_achievement: (number | string)[],
    activity: string;
    outcomes: string;
    challenges: string;
    no_male_farmers: string;
    no_female_farmers: string;
    training_duration: string;
    next_steps: string;
    remarks: string;
}

export interface AddReportPayload {
    reports: { name: string, file: File }[],
    report_id?: number | string | null,
    project_id?: number | string | null,
}

export interface EditReportPayload extends RequiresReportID {

}

export interface DeleteReportsPayload {
    reports: (number | string)[],
}

export interface FetchReportsPayload extends PaginatedPayload {
    project_id: number;
    query?: string;
    state?: string, 
    lga?: string, 
    community?: string, 
    interventions?: Array<number>, 
}


export interface BaseReport{
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

export interface Report extends BaseReport {
    name: any;
}


export interface ChurchReportsResponse extends IResponse {
    data: {
        data: Report[],
        next: number;
        total: number;
    }
}


export interface ReportInfoResponse extends IResponse {
    data: Report,
}


export interface ReportSuccessResponse extends IResponse {
    data: Report[],
}


export interface AssignInterventionPayload {
    report_id: number | string;
    interventions: Array<object>
}

export interface AssignFarmerPayload {
    report_id: number | string;
    farmers: Array<object>
}
