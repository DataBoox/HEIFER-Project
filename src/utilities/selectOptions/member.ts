import { PrimarySelectOption } from "components";

export const ProfessionOptions = (selected?: string): PrimarySelectOption[] => {
    const setSelAttr = (selected && selected.length) ? [{ text: selected }] : [];
    return [
        ...setSelAttr,
        { text: 'Student' },
        { text: '------------------', props: { disabled: true } },
        { text: 'Accounting' },
        { text: 'Admin/Clerical/Customer Service' },
        { text: 'Architecture' },
        { text: 'Artisan' },
        { text: 'Arts Entertainment' },
        { text: 'Aviation/Airlines' },
        { text: 'Banking/Finance/Brokerage' },
        { text: 'Business Owner/CEO' },
        { text: 'Civil Servant' },
        { text: 'Construction/Trade' },
        { text: 'Engineering' },
        { text: 'Food Service/Restaurant/Hospitality' },
        { text: 'Government' },
        { text: 'Human Resources' },
        { text: 'Information Technology' },
        { text: 'Insurance' },
        { text: 'Legal' },
        { text: 'Manufacturing/Adverting/PR' },
        { text: 'Medical/Healthcare' },
        { text: 'Military/Armed Forces' },
        { text: 'New Media/Creative Arts/Writers' },
        { text: 'Sales/Sales Management' },
        { text: 'Telecom' },
        { text: 'Others', props: { value: 'other' } },
    ]
}
export const WeekdayOptions = (selected?: string): PrimarySelectOption[] => {
    const setSelAttr = (selected && selected.length) ? [{ text: selected, props:{ disabled: true} }] : [];
    return [
        ...setSelAttr,
        { text: '------------------', props: { disabled: true } },
        { text: 'Monday'},
        { text: 'Tuesday' },
        { text: 'Wednesday' },
        { text: 'Thursday' },
        { text: 'Friday' },
        { text: 'Saturday' },
        { text: 'Sunday' },
    ]
}

export const HearingOptions = (selected?: string): PrimarySelectOption[] => {
    const setSelAttr = (selected && selected.length) ? [{ text: selected }] : [];
    return [
        ...setSelAttr,
        { text: '------------------', props: { disabled: true } },
        { text: 'Social Media' },
        { text: 'Invited by a church member', props: { value: 'member' } },
        { text: 'TV/Radio Broadcast' },
        { text: 'Google' },
        { text: 'Magazine' },
        { text: 'Online' },
        { text: 'Flyers' },
        { text: 'Others', props: { value: 'other' } },
    ]
}


export const FamilyRoleOptions = (gender?: string, maritalStatus?: string): PrimarySelectOption[] => {
    return [
        { text: 'Father', props: { value: 'father', disabled: Boolean(gender === 'female') } },
        { text: 'Mother', props: { value: 'mother', disabled: Boolean(gender === 'male') } },
        { text: 'Child', props: { value: 'child', disabled: Boolean((maritalStatus && maritalStatus !== 'single')) } }
    ]
}

export const MaritalStatusOptions = (): PrimarySelectOption[] => {
    return [
        { text: 'Single', props: { value: 'single' } },
        { text: 'Married', props: { value: 'married' } },
        { text: 'Divorced', props: { value: 'divorced' } },
        { text: 'Widowed', props: { value: 'widowed' } },
    ]
}

export const FamilyStatusOptions = (defaultFamilyStatus: string = ''): PrimarySelectOption[] => {
    return [
        { text: 'Yes', props: { value: 'primary' } },
        { text: 'No', props: { value: defaultFamilyStatus } }
    ]
}

export const MembershipOptions = (): PrimarySelectOption[] => {
    return [
        { text: 'Yes', props: { value: 'yes' } },
        { text: 'No', props: { value: 'no' } },
        { text: 'Not Decided', props: { value: 'pending' } }
    ]
}