import { ContentBodyContainer } from "../../home";
import UnderConstructionImage from "../../../assets/svg/under_construction_-46-pa.svg"

export const StoriesUnderConstruction = () => {
    return (
        <ContentBodyContainer  title="Stories"
        routesRule={"Stories"}>
            <div className="h-100">
                <div className="d-grid container" style={{ placeItems: "center" }}>
                    <img src={UnderConstructionImage} width="700" alt="under-const" />
                    <h4 className="pt-4">Page under construction</h4>
                    <p>Upcoming updates dropping soon</p>
                </div>
            </div>
        </ContentBodyContainer>
    );
};
