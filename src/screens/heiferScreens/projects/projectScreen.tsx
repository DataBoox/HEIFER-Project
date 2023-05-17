// import { Devotional, DevotionalProps} from "./components/devotionalComponent";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Button, useToast } from "@chakra-ui/react";
import { CustomQuillTextarea, PrimaryButton, PrimaryInput } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { AddProjectScheme } from "validations";
import { AddProject } from "./addProject";
import { useAddProjectMutation } from "store/projects";
// import { ThemeTable } from "components/tables/themeTable";


export const ProjectScreen = () => {
  const toast = useToast({ position: "top-right" });
  const navigate = useNavigate();
   const [request, { isLoading }] = useAddProjectMutation();

  return (
    <ContentBodyContainer
      title="Projects"
      routesRule={"projects"}
      rightCardHeaderComponent={
        <div className="row g-3 mb-0 align-items-center">
          <div className="col-auto">
            <PrimaryInput
              name="search"
              placeholder="Search..."
              size={"lg"}
              rightComponent={<FaSearch color={"grey"} />}
              // onChange={({ target }) => onSearch(target.value)}
              isDisabled={isLoading}
              style={{
                backgroundColor: "#ffff",
                borderRadius: 0,
                border: 0,
              }}
            />
          </div>
          <div className="col-auto">
            <Button
              colorScheme="teal"
              onClick={() => navigate("/projects/add")}
              leftIcon={
                <MdOutlineAddCircleOutline className="svg-dark" size={12} />
              }
              className={"fw-bold"}
              fontSize={"sm"}
              backgroundColor={"#7AD0E2"}
              color={"#000000"}
              borderRadius={0}
              padding={"12px, 20px, 12px, 20px"}
            >
              Create Project
            </Button>
          </div>
        </div>
      }
    >
      <div className="col-xl-12">
        <DashboardCardContainer
          // cardHeaderTitle={"Participant Details"}
          title={""}
          bodyClassName={"p-4 m-3"}
        ></DashboardCardContainer>
      </div>
    </ContentBodyContainer>
  );
};






