// import { Devotional, DevotionalProps} from "./components/devotionalComponent";
import { FaPaperPlane } from "react-icons/fa";
import { Button, useToast, } from "@chakra-ui/react";
import {
    CustomQuillTextarea,
    PrimaryButton,
    PrimaryInput,
} from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";

export const RegisterFarmers = () => {
    const toast = useToast({ position: "top-right" });
    const navigate = useNavigate();
const surveyFormCode = `
  <iframe
    src="https://heifer.surveycto.com/collect/naija_unlock_actual_income_assessment?appearance=min"
    height="600"
    width="100%"
    allow-same-origin
  ></iframe>
`;
//  src =
//    "https://example.surveycto.com/collect/apiToken/formApiKey?appearance=minimal";
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
            <h1 className="fw-bold" style={{ textAlign: "center" }}>Register Farmers</h1>
            <p style={{ textAlign: "center" }}>Kindly provide farmer's information</p>
            <div dangerouslySetInnerHTML={{ __html: surveyFormCode }} />
          </DashboardCardContainer>
        </div>
      </ContentBodyContainer>
    );
};

