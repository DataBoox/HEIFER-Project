import { PrimaryLoader } from "components";
import { breadcrumbConfig, BreadcrumbConfigKeys } from "navigations";
import { Breadcrumb, RouteDirector } from "./components"

interface ContentBodyContainerProps {
  title: string;
  routes?: RouteDirector[];
  rightTitle?: string; // this will be removed from next update (please remove from your code and implement routing rule)
  routesRule?: BreadcrumbConfigKeys;
  isLoading?: boolean;
//   leftCardHeaderComponent?: React.ReactNode;
  rightCardHeaderComponent?: React.ReactNode;
  children: React.ReactNode;
}
export const ContentBodyContainer: React.FC<ContentBodyContainerProps> = ({
    title,
    routes,
    routesRule,
    isLoading,
    // leftCardHeaderComponent,
  rightCardHeaderComponent,
    children
}) => {
   return (
     <div className="page-content">
       <div className="d-flex justify-content-between">
         <Breadcrumb
           title={title}
           routes={routesRule ? breadcrumbConfig[routesRule] : routes}
         />
         <div className="p-4">{rightCardHeaderComponent}</div>
       </div>
       <div className="container-fluid">
         {isLoading ? (
           <PrimaryLoader height={"90vh"} />
         ) : (
           <div className="row">{children}</div>
         )}
       </div>
     </div>
   );

}