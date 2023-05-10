import { IResponse } from "../auth/interface"

export interface ColorVariations {
    primary: string;
    secondary: string;
}

export interface ProfileData {
    auth_id: string;
    name: string;
    username: string;
    email: string;
    phone: {
        mobile: string;
        whatsapp: string;
    },
    position: string | null;
    is_company: boolean,
    company_account: boolean,
    email_verified: number,
    connection_count: number,
    photo: {
        cover: string | null;
        profile: string | null;
        gallery: string[] | null;
    },
    social_link: {
        email: string;
        google_map: string | null;
        youtube: string | null;
        linkedin: string | null;
        facebook: string | null;
        twitter: string | null;
        instagram: string | null;
        website: string | null;
    },
    company: {
        logo: string;
        name: string;
        nature: string;
        address: string;
        bank: {
            bank_name: string;
            account_no: string;
            account_name: string;
        }
    }
}

export interface Connection {
    contact_name: string;
    contact_phone: string;
    updated_at: string;
    created_at: string;
}

// ===================================================================
// Payload Interfaces
// ===================================================================

export interface EditProfileDetailsPayload {
    name: string;
    username: string;
    position: string;
    mobile_number: string;
    whatsapp_number: string;
}

export interface ExchangeContactPayload {
    username: string;
    contact_name: string;
    contact_phone: string;
}

export interface VerifyTransactionPayload {
    ref: string;
    email: string;
}

export interface UpdatePasswordPayload {
    old: string;
    password: string;
    confirm: string;
}

export interface UpdateColorThemePayload {
    text_color: string;
    primary_button_text: string;
    primary_button_background: string;
    primary_button_border: string;
    secondary_button_text: string;
    secondary_button_background: string;
    secondary_button_border: string;
    primary_hover_text: string;
    primary_hover_background: string;
    primary_hover_border: string;
    secondary_hover_text: string;
    secondary_hover_background: string;
    secondary_hover_border: string;
}

export interface UpdateSocialsPayload {
    email?: string;
    google_map?: string;
    youtube?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    website?: string;
}

export interface UpdateCompanyPayload {
    name: string;
    nature: string;
    address: string;
    file?: string;
    account_name?: string;
    account_no?: string;
    bank_name?: string;
}
// ===================================================================
// Response Interfaces
// ===================================================================

export interface FetchProfileResponse extends IResponse {
    data: ProfileData
}

export interface ColorThemeResponse extends IResponse {
    data: {
        text_color: string,
        primary_button: {
            text: string,
            background: string,
            border: string
        },
        secondary_button: {
            text: string,
            background: string,
            border: string
        },
        primary_hover: {
            text: string,
            background: string,
            border: string
        }
        secondary_hover: {
            text: string,
            background: string,
            border: string
        }
    }
}

export interface ConnectionsResponse extends IResponse{
    "data": {
        "next": number,
        "total": number,
        "connections": Connection[]
    }
}