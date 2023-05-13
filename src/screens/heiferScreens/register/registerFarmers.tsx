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


    return (
      <ContentBodyContainer
        title="Register Farmer"
        routesRule={"registerFarmers"}
      >
        
      </ContentBodyContainer>
    );
};

