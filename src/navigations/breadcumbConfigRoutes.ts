import { RouteDirector } from "./interface";


export const breadcrumbConfig: { [x: string]: RouteDirector[] } = {
    'heiferDashboard': [{ name: 'Home' }, { name: 'Dashboard' }],
    'registerFarmers': [{ name: 'Dashboard', to: '/' }, { name: 'Households', to: '/farmers' }, { name: 'Register' }],
    'createFarmers': [{ name: 'Dashboard', to: '/' }, { name: 'Households' }],
    'viewFarmers': [{ name: 'Dashboard', to: '/' }, { name: 'Households', to: '/farmers' }, { name: 'View Household' }],
    'createUser': [{ name: 'Dashboard', to: '/' }, { name: 'Users' }],
    'createIntervention': [{ name: 'Dashboard', to: '/' }, { name: 'Interventions' }],
    'project': [{ name: 'Dashboard', to: '/' }, { name: 'Projects' }],
    'map': [{ name: 'Dashboard', to: '/' }, { name: 'Maps' }],
    'createProjects': [{ name: 'Dashboard', to: '/' }, { name: 'Projects', to: '/projects' }, { name: 'Create Project' }],
    'createGroup': [{ name: 'Dashboard', to: '/' }, { name: 'Groups' }],
    'createGroups': [{ name: 'Dashboard', to: '/' }, { name: 'Groups', to: '/groups' }, { name: 'Create Group' }],
    'viewGroups': [{ name: 'Dashboard', to: '/' }, { name: 'Groups', to: '/groups' }, { name: 'View Group' }],
    // 'subscriptionPlans': [{ name: 'Settings' }, { name: 'Subscription', to: '/church/settings/subscription' }, { name: 'Purchase Plans' }],
}

export type BreadcrumbConfigKeys = keyof typeof breadcrumbConfig;
