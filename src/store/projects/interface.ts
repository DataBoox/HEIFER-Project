import { PaginatedPayload } from "@store/interface";
import { IResponse } from "../auth";

export interface RequiresProjectID {
    projects: (number | string)[],
}

export interface Project {
  fname: string;
  lname: string;
   id: number;
    project_id: number;
    contact_mode: string[];
    project: Project;
    status: number;
    updated_at: string;
    created_at: string;
}

export interface AddProjectPayload {
    projects: { name: string, file: File }[],
    project_id?: number | string | null,
}

export interface EditProjectPayload extends RequiresProjectID {

}

export interface DeleteProjectsPayload {
    projects: (number | string)[],
}

export interface FetchProjectsPayload extends PaginatedPayload {
    projects?: (number | string)[]
}


export interface BaseProject {
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

export interface Project extends BaseProject {
}


export interface ChurchProjectsResponse extends IResponse {
    data: {
        data: Project[],
        next: number;
        total: number;
    }
}


export interface ProjectInfoResponse extends IResponse {
    data: Project,
}


export interface ProjectSuccessResponse extends IResponse {
    data: Project[],
}


