import { useNavigate } from "react-router-dom";
import vectorLogo from "../../../assets/images/Vectorlogo .png";
import Photodp from "../../../assets/images/Photodp.png";
import "./projectStyles.css";
import { BaseProject, useGetProjectsQuery } from "store/projects";
import { PrimaryLoader } from "components";
import { useProject } from "store/projects";

export const ProjectScreen = () => {
    const { setProject } = useProject()
    const { data: projects, isLoading } = useGetProjectsQuery({ page: 1, query: ""});
    const navigate = useNavigate();

    const redirect = (project: BaseProject) => {
        setProject(project)
        navigate("/"); // navigate
    }
    
    return (
        <section className="bg george">
            <nav className="nav flex">
                <div className="logo">
                    <img src={vectorLogo} alt="heifer logo" />
                </div>
                <div className="profile-area">
                    <ul role="list" className="flex">
                        <li className="flex">
                        <img className="profile" src={Photodp} alt="lady" />
                        Clara
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="text flex">
                <p className="main-header">Welcome Clara!</p>
                <p className="sub-header">What would you like to work on today?</p>
            </div>
            <div className="card-holder flex">
                {(!projects?.data || isLoading) ?
                <PrimaryLoader height={"70vh"} />
                : projects?.data?.data.map((project) => (
                    <a onClick={ () => redirect(project)}>
                        <div className="carddy flex maxwidth animate">
                            <img src={project.image.url} alt={project.name} />
                            <p className="card-text">{project.name}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>    
    );
}
  






