import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { AddGroupScheme } from "validations";
import { PrimaryInput, PrimaryTextarea, GroupChairmanSelect, GroupSecretarySelect, GroupVCSelect } from "components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useState } from "react";
import { useAddGroupMutation } from "store/group";

export const AddGroup = () => {
  const [show, setShow] = useState(false);
  const toast = useToast({ position: "top-right" });
  const navigate = useNavigate();
  const [request, { isLoading }] = useAddGroupMutation();
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
    touched,
  } = useFormik({
    initialValues: {
      address: "",
      description: "",
      gname: "",
      plead: "",
      tmembers: "",
      community: "",
      dateofest: "",
      gc: "",
      gvc: "",
      gsc: "",
      venue: "",
      dom: "",
    },
    validationSchema: AddGroupScheme(),
    onSubmit: () => initRequest(),
  });

  const payload: any = {
    ...values,
  };
  const initRequest = () => {
    request(payload)
      .unwrap()
      .then((res) => {
        // console.log(res);
        toast({
          title: "Group Added",
          description: res?.response,
          status: "success",
        });
        resetForm({}); // reset form
      })
      .catch((error) => {
        // console.log(error);
        toast({
          title: "Request Failed",
          description: resolveApiError(error),
          status: "error",
        });
      });
  };

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <DashboardCardContainer
              title="Create a Group"
              routesRule={"createGroups"}
              bodyClassName={"p-0"}
            >
              <div className="row g-2">
                <div className="col-lg-6 col-md-12">
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="gname"
                      label="Group Name"
                      placeholder="Enter your group name"
                      value={values.gname}
                      error={Boolean(touched.gname && errors.gname)}
                      bottomText={errors.gname}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>

                  <div className="col-auto mb-4">
                    <PrimaryTextarea
                      isRequired
                      name="description"
                      label={"Group Description"}
                      placeholder="About your group"
                      size={"lg"}
                      rows={7}
                      value={values.description}
                      error={Boolean(touched.description && errors.description)}
                      bottomText={errors.description}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="venue"
                      label="Venue of Meeting"
                      placeholder="Enter venue"
                      value={values.venue}
                      error={Boolean(touched.venue && errors.venue)}
                      bottomText={errors.venue}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="dom"
                      label="Days of Meeting"
                      placeholder="Enter meeting day"
                      value={values.dom}
                      error={Boolean(touched.dom && errors.dom)}
                      bottomText={errors.dom}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="community"
                      label="Community"
                      placeholder="Enter resident community"
                      value={values.community}
                      error={Boolean(touched.community && errors.community)}
                      bottomText={errors.community}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="dateofest"
                      label="Date of Establishment"
                      type="date"
                      placeholder="Enter date"
                      value={values.dateofest}
                      error={Boolean(touched.dateofest && errors.dateofest)}
                      bottomText={errors.dateofest}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="col-auto mb-4">
                    <GroupChairmanSelect
                      isRequired
                      name="gc"
                      value={values.gc}
                      error={Boolean(touched.gc && errors.gc)}
                      bottomText={errors.gc}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                  <div className="col-auto mb-4">
                    <GroupVCSelect
                      isRequired
                      name="gvc"
                      value={values.gvc}
                      error={Boolean(touched.gvc && errors.gvc)}
                      bottomText={errors.gvc}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                  <div className="col-auto mb-4">
                    <GroupSecretarySelect
                      isRequired
                      name="gsc"
                      value={values.gsc}
                      error={Boolean(touched.gsc && errors.gsc)}
                      bottomText={errors.gsc}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                  <div className="col-auto text-end mb-4">
                    <Button
                      colorScheme="teal"
                      onClick={() => handleSubmit()}
                      className={"fw-light"}
                      fontSize={"sm"}
                      backgroundColor={"#2A4153"}
                      color={"#ffffff"}
                      borderRadius={0}
                      padding={"16px, 48px, 16px, 48px"}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </DashboardCardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
 {
   /* <div className="col-lg-3 col-md-12 d-flex justify-content-center">
                  <div className="sidebar">
                    <Link to="/page1" className="sidebar-link text-muted">
                      <input type="radio" name="sidebar" />
                      <span className="sidebar-text">Group Details</span>
                    </Link>
                    <Link to="/page2" className="sidebar-link text-muted">
                      <input type="radio" name="sidebar" />
                      <span className="sidebar-text">Add Farmers</span>
                    </Link>
                    <Link to="/page3" className="sidebar-link text-muted">
                      <input type="radio" name="sidebar" />
                      <span className="sidebar-text">Assign Interventions</span>
                    </Link>
                  </div>
                </div> */
 }