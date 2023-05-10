
export interface IResponse {
    status: boolean;
    status_code: number;
    response: string;
    data: null | any
}

export interface User {
    account_type: string;
    auth_id: string;
    created_at: string;
    email: string;
    email_verification: boolean;
    last_seen: string | null;
    meta_data: string | null;
    status: boolean;
    updated_at: string;
    username: string;
}

// export interface UserWithMember extends User {
//     member: Member
// }

export interface Auth {
    user?: User | null;
    token_type: string;
    access_token?: string | null;
    isLoading?: boolean;
    expires_in: number;
}

export interface LoginPayload {
    auth: string;
    password: string;
}

export interface AuthResponse extends IResponse {
    data: {
        authorization: {
            type: string;
            token?: string | null;
            expires_in: number;
        }
        data: User
    };
}

export interface ForgotPayload {
    email: string;
}

export interface ResetPayload {
    token: string;
    password: string;
    confirm: string;
}
export interface RegisterPayload {
    church_name: string;
    email: string;
    sub_domain: string;
    password: string;
    confirm: string;
}

export interface VerifyEmailPayload {
    token: string;
    email: string;
}