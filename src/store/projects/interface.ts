import { PaginatedPayload } from "@store/interface";
import { IResponse, User } from "../auth";
import { Upload } from "@store/uploads";

export interface RequiresProjectID {
    projects: (number | string)[],
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
    id: number,
    pid: string,
    name: string,
    image_id: number,
    lead: number,
    locations: string[]|null,
    created_by: number,
    updated_at: string,
    created_at:string,
    image: Upload
}

export interface Project extends BaseProject {
    creator: User,
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


