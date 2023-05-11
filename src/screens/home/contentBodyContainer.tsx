import { PrimaryLoader } from "components";
import { breadcrumbConfig, BreadcrumbConfigKeys } from "navigations";
import { Breadcrumb, RouteDirector } from "./components"

interface ContentBodyContainerProps {
    title: string;
    routes?: RouteDirector[];
    rightTitle?: string; // this will be removed from next update (please remove from your code and implement routing rule)
    routesRule?: BreadcrumbConfigKeys;
    isLoading?: boolean,
    children: React.ReactNode
}
export const ContentBodyContainer: React.FC<ContentBodyContainerProps> = ({
    title,
    routes,
    routesRule,
    isLoading,
    children
}) => {
    return (
        <div className="page-content">
            <Breadcrumb title={title} routes={routesRule ? breadcrumbConfig[routesRule] : routes} />
            <div className="container-fluid">
                {isLoading ? (
                    <PrimaryLoader height={'90vh'} />
                ) : (
                    <div className="row">{children}</div>
                )}

            </div>
        </div>
    )
}