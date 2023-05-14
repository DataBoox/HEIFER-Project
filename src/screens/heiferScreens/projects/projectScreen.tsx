// import { Devotional, DevotionalProps} from "./components/devotionalComponent";
import { FaPaperPlane } from "react-icons/fa";
import { Button, useToast } from "@chakra-ui/react";
import { CustomQuillTextarea, PrimaryButton, PrimaryInput } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
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
          {/* <div style={{ height: 400, width: "100%" }}></div> */}
           <ThemeTable/>
        </DashboardCardContainer>
      </div>
    </ContentBodyContainer>
  );
};






