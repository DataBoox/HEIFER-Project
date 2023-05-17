import { PrimaryLoader } from "components";
import { breadcrumbConfig, BreadcrumbConfigKeys } from "navigations";
import { Breadcrumb, RouteDirector } from "./components";
import { title } from "process";

interface CardContainerProps {
  title: string;
  cardHeaderTitle?: string;
  cardHeaderProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >;
  routes?: RouteDirector[];
   routesRule?: BreadcrumbConfigKeys;
  leftCardHeaderComponent?: React.ReactNode;
  rightCardHeaderComponent?: React.ReactNode;
  bodyClassName?: string;
  children?: React.ReactNode;
}
export const DashboardCardContainer: React.FC<CardContainerProps> = ({
  title,
  cardHeaderTitle,
  cardHeaderProps,
  routes,
  routesRule,
  leftCardHeaderComponent,
  rightCardHeaderComponent,
  bodyClassName,
  children,
}) => {
  return (
    <div className="card custom-card">
      <div className="card-header align-items-center d-flex">
        {leftCardHeaderComponent}
        <div className="mb-0 flex-grow-1 ">
          <Breadcrumb
            title={title}
            routes={routesRule ? breadcrumbConfig[routesRule] : routes}
          />
        </div>

        <h4
          className="card-title mb-0 flex-grow-1 fw-bold"
          style={{
            color: "#2A4153",
          }}
          {...cardHeaderProps}
        >
          {cardHeaderTitle}
        </h4>
        {rightCardHeaderComponent}
      </div>
      <div className={`card-body ${bodyClassName}`}>{children}</div>
    </div>
  );
};
