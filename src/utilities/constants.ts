

export const GENDER_OPTIONS = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" }
]

export const GENDER_PARENTING = {
    "male": "father",
    "female": "mother"
}


export const SUB_PLAN_DURATIONS = {
    'month': "monthly",
    'day': "daily",
    'year': "yearly"
};

export const SUB_PLAN_MAX_QUANTITY = {
    'month': 11,
    'day': 28,
    'year': 3
};

export const CURRENCY_DICT = {
    'dollar': "$",
    'naira': "₦",
};

export type CURRENCY_TYPES = keyof typeof CURRENCY_DICT;

export type GENDER_PARENTING_TYPES = keyof typeof GENDER_PARENTING;

export type SUB_PLAN_DURATIONS_KEYS = keyof typeof SUB_PLAN_DURATIONS


