// import { Devotional, DevotionalProps} from "./components/devotionalComponent";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { ThemeTable } from "components/tables/themeTable";


export const ProjectScreen = () => {
  const toast = useToast({ position: "top-right" });
  const navigate = useNavigate();

  return (
    <ContentBodyContainer
      title="Register Farmer"
      routesRule={"registerFarmers"}
    >
      <div className="col-xl-12">
        <DashboardCardContainer
          // cardHeaderTitle={"Participant Details"}
          bodyClassName={"p-4 m-3"}
        >
          {/* <ThemeTable /> */}
        </DashboardCardContainer>
      </div>
    </ContentBodyContainer>
  );
};






