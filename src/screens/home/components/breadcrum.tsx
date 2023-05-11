import { Link, useNavigate } from "react-router-dom";

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
            <div className="col-12">
                <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">{title}</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            {(routes).map((item, index) => (
                                <li key={index} className={`breadcrumb-item ${(index === (routes.length -1)) && 'active'}`} >
                                    <a href="#" onClick={() => initNav(item.to)}>
                                        {item.name}
                                    </a>
                                </li>
                            ))}                            
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}