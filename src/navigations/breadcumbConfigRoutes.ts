import { RouteDirector } from "./interface";


export const breadcrumbConfig: { [x: string]: RouteDirector[] } = {
    'heiferDashboard': [{ name: 'Home' }, { name: 'Dashboard' }],
    'registerFarmers': [{ name: 'Dashboard', to: '/' }, { name: 'Register' }],
    'createUser': [{ name: 'Dashboard', to: '/' }, { name: 'Users' }],
    'createIntervention': [{ name: 'Dashboard', to: '/' }, { name: 'Interventions' }],
    'project': [{ name: 'Dashboard', to: '/' }, { name: 'Projects' }],
    'createProjects': [{ name: 'Dashboard', to: '/' }, { name: 'Projects', to: '/projects' }, { name: 'Create Project' }],
    'createGroup': [{ name: 'Dashboard', to: '/' }, { name: 'Groups' }],
    'createGroups': [{ name: 'Dashboard', to: '/' }, { name: 'Groups', to: '/groups' }, { name: 'Create Group' }],
    // 'subscriptionPlans': [{ name: 'Settings' }, { name: 'Subscription', to: '/church/settings/subscription' }, { name: 'Purchase Plans' }],
}

export type BreadcrumbConfigKeys = keyof typeof breadcrumbConfig;
