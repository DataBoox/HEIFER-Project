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


export interface ChurchDashboardStatisticsResponse extends IResponse {
    data: {
        projects: number;
    }
}
