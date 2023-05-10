import { RouteDirector } from "./interface";


export const breadcrumbConfig: { [x: string]: RouteDirector[] } = {
    'paymentGateway': [{ name: 'Settings' }, { name: 'Payment Gateway' }],
    'churchDashboard': [{ name: 'Church' }, { name: 'Dashboard' }],
    'userDashboard': [{ name: 'User' }, { name: 'Dashboard' }],
    'subscriptionHome': [{ name: 'Settings' }, { name: 'Subscription' }],
    'subscriptionPlans': [{ name: 'Settings' }, { name: 'Subscription', to: '/church/settings/subscription' }, { name: 'Purchase Plans' }],
    'membersHome': [{ name: 'Dashboard', to: '/church' }, { name: 'Members' }],
    'membersAdd': [{ name: 'Dashboard', to: '/church' }, { name: 'Members', to: '/church/members' }, { name: 'Add Member' }],
    'membersFamilyAdd': [{ name: 'Dashboard', to: '/church' }, { name: 'Members', to: '/church/members' }, { name: 'Family', to: '/church/families' }, { name: 'Add Member' }],
    'editProfile': [{ name: 'Dashboard', to: '/church' }, { name: 'Members', to: '/church/members' }, { name: 'Edit Profile' }],
    'userHome': [{ name: 'Dashboard', to: '/church' }, { name: 'Members', to: '/church/members' }, { name: 'Member Profile' }],
    'archivesHome': [{ name: 'Dashboard', to: '/church' }, { name: 'Archived Members' },],
    'first-timersHome': [{ name: 'Dashboard', to: '/church' }, { name: 'First Timers' }],
    'first-timersAdd': [{ name: 'Dashboard', to: '/church' }, { name: 'First Timers', to: '/church/first-timers' }, { name: 'Add First Timer' }],
    'documentHome': [{ name: 'Dashboard', to: '/member' }, { name: 'Documents' }],
    'devotionalHome': [{ name: 'Dashboard', to: '/member' }, { name: 'Devotionals' }],
    'resourcesHome': [{ name: 'Dashboard', to: '/member' }, { name: 'resources' }],
    'profileHome': [{ name: 'Dashboard', to: '/member' }, { name: 'Profile' }],
    'emailHome': [{ name: 'Dashboard', to: '/church' }, { name: 'Email' }],
    'smsHome': [{ name: 'Dashboard', to: '/church' }, { name: 'Sms' }],
    'whatsappHome': [{ name: 'Dashboard', to: '/church' }, { name: 'Whatsapp' }],
}

export type BreadcrumbConfigKeys = keyof typeof breadcrumbConfig;
