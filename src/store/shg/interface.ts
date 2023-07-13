import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresShgID {
    shgs: (number | string)[],
}

export interface ShgInfo {
    name: string;
    entity_name: string,
    financial: string,
    business_plan: string,
    hold_meeting: string,
    cash: string,
    asset: string,
    financial_services: string,
    how_much_was_accessed: string,
    service_provider: string,
    conduct_sales: string,
    commodity_sold: string,
    quantity_sold: number,
    measurement_unit: string,
    price: number,
    value: number,
    comment: string,
}

export interface AddShgPayload {
    shgs: { name: string, file: File }[],
    shg_id?: number | string | null,
    project_id?: number | string | null,
}

export interface EditShgPayload extends RequiresShgID {

}

export interface DeleteShgsPayload {
    shgs: (number | string)[],
}

export interface FetchShgsPayload extends PaginatedPayload {
    project_id?: number;
    shgs?: (number | string)[]
    state?: string, 
    lga?: string, 
    community?: string,
}


export interface BaseShg {
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

export interface Shg extends BaseShg {
}


export interface ChurchShgsResponse extends IResponse {
    data: {
        data: Shg[],
        next: number;
        total: number;
    }
}


export interface ShgInfoResponse extends IResponse {
    data: Shg,
}


export interface ShgSuccessResponse extends IResponse {
    data: Shg[],
}


