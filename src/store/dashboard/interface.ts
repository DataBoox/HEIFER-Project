import { IResponse } from "../auth/interface"


export interface SubPlan {
    sid: string;
    name: string;
    prices: { dollar: number, naira: number },
    duration_type: string,
    duration: string
}

export interface SubPlansResponse extends IResponse {
    data: {
        month: SubPlan[],
        year: SubPlan[],
    }
}


export interface DashboardStatisticsResponse extends IResponse {
    data: {
        no_users: number,
        no_projects: number,
        no_households: number,
        no_group: number,
        no_interventions: number,
        no_state: number,
        no_lga: number,
        no_community: number
    }
}
