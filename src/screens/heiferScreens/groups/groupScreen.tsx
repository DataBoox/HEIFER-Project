// import { Devotional, DevotionalProps} from "./components/devotionalComponent";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Button, useToast, ButtonProps } from "@chakra-ui/react";
import { PrimaryButton, PrimaryInput } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError, validationError } from "utilities";
import { AddGroupScheme } from "validations";
import { AddGroupDialog } from "./addGroup";
import { useAddGroupMutation } from "store/group";
import { request } from "http";
import _ from "lodash";
import { toast } from "react-toastify";

export const GroupScreen = () => {
  const navigate = useNavigate();
  const [request, { isLoading }] = useAddGroupMutation();
  const toast = useToast({ position: "top-right" });
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
    validateForm,
    touched,
  } = useFormik({
    initialValues: {
      surname: "",
      fname: "",
      lname: "",
      mobileNumber: "",
      email: "",
    },
    validationSchema: AddGroupScheme(),
    onSubmit: async () => initRequest(),
  });

  const initRequest = () => {
    const payload: any = {
      ...values,
    };
  };

  return (
    <ContentBodyContainer
      title="Groups"
      routesRule={"createGroup"}
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
            <AddGroupDialog
              useButton={true}
              buttonProps={{
                leftIcon: (
                  <MdOutlineAddCircleOutline className="svg-dark" size={12} />
                ),
                fontSize: "sm",
                className: "fw-bold",
                backgroundColor: "#7AD0E2",
                color: "#000000",
                borderRadius: 0,
                padding: "12px, 20px, 12px, 20px",
              }}
            >
              Add Group
            </AddGroupDialog>
          </div>
        </div>
      }
    >
      <div className="col-xl-12">
        <DashboardCardContainer
          // cardHeaderTitle={"Participant Details"}
          bodyClassName={"p-4 m-3"}
        ></DashboardCardContainer>
      </div>
    </ContentBodyContainer>
  );
};
