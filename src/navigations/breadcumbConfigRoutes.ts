import { RouteDirector } from "./interface";


export const breadcrumbConfig: { [x: string]: RouteDirector[] } = {
    'heiferDashboard': [{ name: 'Home' }, { name: 'Dashboard' }],
    'registerFarmers': [{ name: 'Dashboard', to: '/' }, { name: 'Register' }],
    // 'subscriptionPlans': [{ name: 'Settings' }, { name: 'Subscription', to: '/church/settings/subscription' }, { name: 'Purchase Plans' }],
}

export type BreadcrumbConfigKeys = keyof typeof breadcrumbConfig;
