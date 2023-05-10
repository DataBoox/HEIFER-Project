import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresUploadID {
    uploads: (number | string)[],
}

export interface AddUploadPayload {
    uploads: { name: string, file: File }[],
    member_id?: number | string | null,
}

export interface EditUploadPayload extends RequiresUploadID {

}

export interface DeleteUploadsPayload {
    uploads: (number | string)[],
}

export interface FetchUploadsPayload extends PaginatedPayload {
    members?: (number | string)[]
}


export interface BaseUpload {
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

export interface Upload extends BaseUpload {
}


export interface ChurchUploadsResponse extends IResponse {
    data: {
        data: Upload[],
        next: number;
        total: number;
    }
}


export interface UploadInfoResponse extends IResponse {
    data: Upload,
}


export interface UploadSuccessResponse extends IResponse {
    data: Upload[],
}


