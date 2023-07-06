
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

export const FormsScreen = () => {
    const toast = useToast({ position: "top-right" });
    const navigate = useNavigate();
const surveyFormCode = `
  <iframe
    src="https://heifer.surveycto.com/collect/"
    height="600"
    width="100%"
    allow-same-origin
  ></iframe>
`;
    return (
      <ContentBodyContainer
        title="View Forms"
        routesRule={"forms"}
      >
        <div className="col-xl-12">
          <DashboardCardContainer
                    // cardHeaderTitle={"Participant Details"}
                    bodyClassName={"p-4 m-3"} title={""}          >
            <h1 className="fw-bold" style={{ textAlign: "center" }}>View All Forms</h1>
            <p style={{ textAlign: "center" }}>Login to your SurveyCTO account and manage your forms from here</p>
            <div dangerouslySetInnerHTML={{ __html: surveyFormCode }} />
          </DashboardCardContainer>
        </div>
      </ContentBodyContainer>
    );
};