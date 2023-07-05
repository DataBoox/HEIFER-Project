import { RouteDirector } from "./interface";


export const breadcrumbConfig: { [x: string]: RouteDirector[] } = {
    'heiferDashboard': [{ name: 'Home' }, { name: 'Dashboard' }],
    'registerFarmers': [{ name: 'Dashboard', to: '/' }, { name: 'Households', to: '/farmers' }, { name: 'Register' }],
    'createFarmers': [{ name: 'Dashboard', to: '/' }, { name: 'Households' }],
    'viewFarmers': [{ name: 'Dashboard', to: '/' }, { name: 'Households', to: '/farmers' }, { name: 'View Household' }],
    'viewUsers': [{ name: 'Dashboard', to: '/' }, { name: 'Users', to: '/users' }, { name: 'View User' }],
    'createUser': [{ name: 'Dashboard', to: '/' }, { name: 'Users' }],
    'createIntervention': [{ name: 'Dashboard', to: '/' }, { name: 'Interventions' }],
    'viewInterventions': [{ name: 'Dashboard', to: '/' }, { name: 'Interventions', to: '/interventions' }, { name: 'View Intervention' }],
    'project': [{ name: 'Dashboard', to: '/' }, { name: 'Projects' }],
    'map': [{ name: 'Dashboard', to: '/' }, { name: 'Maps' }],
    'forms': [{ name: 'Dashboard', to: '/' }, { name: 'Forms' }],
    'createProjects': [{ name: 'Dashboard', to: '/' }, { name: 'Projects', to: '/projects' }, { name: 'Create Project' }],
    'createGroup': [{ name: 'Dashboard', to: '/' }, { name: 'Groups' }],
    'createGroups': [{ name: 'Dashboard', to: '/' }, { name: 'Groups', to: '/groups' }, { name: 'Create Group' }],
    'formsOne': [{ name: 'Dashboard', to: '/' }, { name: 'Groups', to: '/groups' }, { name: 'SHG Record Tracking' }],
    'viewGroups': [{ name: 'Dashboard', to: '/' }, { name: 'Groups', to: '/groups' }, { name: 'View Group' }],
    'Communication': [{ name: 'Dashboard', to: '/' }, { name: 'Communication' }],
    'Reports': [{ name: 'Dashboard', to: '/' }, { name: 'Reports' }],
    'Schedule': [{ name: 'Dashboard', to: '/' }, { name: 'Schedule' }],
    'Stories': [{ name: 'Dashboard', to: '/' }, { name: 'Stories' }],
    'viewProfile': [{ name: 'Dashboard', to: '/' }, { name: 'Profile' }],
    // 'subscriptionPlans': [{ name: 'Settings' }, { name: 'Subscription', to: '/church/settings/subscription' }, { name: 'Purchase Plans' }],
}

export type BreadcrumbConfigKeys = keyof typeof breadcrumbConfig;
