import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";

export interface RouteDirector {
    name: string;
    to?: string;
}

interface BreadcrumbProps {
    title: string;
    routes?: RouteDirector[]
}

export const Breadcrumb:React.FC<BreadcrumbProps> = ({
    title, 
    routes = []
}) => {
    const navigate = useNavigate();

    const initNav = (path?: string) => {
        if (path) navigate(path);
    }
    
    return (
      <div className="row">
        <div className="col-12 m-4">
          <div className="d-flex align-items-lg-center flex-lg-row flex-column">
            <div className="flex-grow-1">
              <h4
                className="fs-2 fw-bold mb-1"
                style={{ color: "#29292A" }}
              >
                {title}
              </h4>
              <div className="page-title">
                <ol className="breadcrumb m-0 text-dark">
                  {routes.map((item, index) => (
                    <li
                      key={index}
                      className={`breadcrumb-item ${
                        index === routes.length - 1 && "active"
                      }`}
                    >
                      <a href="#" onClick={() => initNav(item.to)}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          {/* end card header */}
        </div>
      </div>
    );
}