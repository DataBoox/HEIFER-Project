import { Button, ButtonProps, useToast } from "@chakra-ui/react";
import {
  PrimaryInput,
  GenderSelect,
  MaritalStatusSelect,
  AgeCategorySelect,
  HouseholdHeadSelect,
  EducationLevelSelect,
  IdentificationSelect,
  IdTypeSelect,
  GroupOrAssSelect,
  GroupTypeSelect,
} from "components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { useState } from "react";
import { useAddFarmerMutation } from "store/farmers";

export const RegisterFarmers = () => {
  const [show, setShow] = useState(false);
  const toast = useToast({ position: "top-right" });
  const navigate = useNavigate();
  const [request, { isLoading }] = useAddFarmerMutation();
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
      cluster_name: "",
      cluster_number: "",
      cluster_head: "",
      gender: "",
      gender_household: "",
      age: "",
      age_category: "",
      phone: "",
      household_head: "",
      marital_status: "",
      education_level: "",
      means_of_id: "",
      id_type: "",
      group_or_ass: "",
      gname: "",
      gtype: "",
    },
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
          title: "Household Registered",
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
              title="Register Households"
              routesRule={"registerFarmers"}
              bodyClassName={"p-3"}
              rightCardHeaderComponent={
                <div className="col-auto text-end mb-4">
                  <Button
                    colorScheme="teal"
                    onClick={() => navigate("/register/add")}
                    className={"fw-light"}
                    fontSize={"sm"}
                    backgroundColor={"#2A4153"}
                    color={"#ffffff"}
                    borderRadius={0}
                    padding={"16px, 48px, 16px, 48px"}
                  >
                    Register Household
                  </Button>
                </div>
              }
            >
              <div className="row g-2">
                <div className="col-lg-3 col-md-12">
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="cluster name"
                      label="What is the name of the farmer's cluster?"
                      placeholder="Your answer here..."
                      value={values.cluster_name}
                      error={Boolean(
                        touched.cluster_name && errors.cluster_name
                      )}
                      bottomText={errors.cluster_name}
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
                      name="cluster number"
                      label="What is the cluster number?"
                      placeholder="Your answer here..."
                      value={values.cluster_number}
                      error={Boolean(
                        touched.cluster_number && errors.cluster_number
                      )}
                      bottomText={errors.cluster_number}
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
                      name="cluster head"
                      label="What is the name of the cluster's head?"
                      placeholder="Your answer here..."
                      value={values.cluster_head}
                      error={Boolean(
                        touched.cluster_head && errors.cluster_head
                      )}
                      bottomText={errors.cluster_head}
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
                    <GenderSelect
                      isRequired
                      name="gender"
                      value={values.gender}
                      error={Boolean(touched.gender && errors.gender)}
                      bottomText={errors.gender}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      label="What is the farmer's gender?"
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-3 col-md-12">
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="age"
                      label="What is the farmer's age?"
                      placeholder="Your answer here..."
                      value={values.age}
                      error={Boolean(touched.age && errors.age)}
                      bottomText={errors.age}
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
                    <AgeCategorySelect
                      isRequired
                      name="age category"
                      value={values.age_category}
                      error={Boolean(
                        touched.age_category && errors.age_category
                      )}
                      bottomText={errors.age_category}
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
                      name="phone"
                      label="What is the farmer's phone number?"
                      type="phone"
                      placeholder="Your answer here..."
                      value={values.phone}
                      error={Boolean(touched.phone && errors.phone)}
                      bottomText={errors.phone}
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
                    <HouseholdHeadSelect
                      isRequired
                      name="household head"
                      value={values.household_head}
                      error={Boolean(
                        touched.household_head && errors.household_head
                      )}
                      bottomText={errors.household_head}
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

                <div className="col-lg-3 col-md-12">
                  <div className="col-auto mb-4">
                    <GenderSelect
                      isRequired
                      name="gender"
                      value={values.gender_household}
                      error={Boolean(
                        touched.gender_household && errors.gender_household
                      )}
                      bottomText={errors.gender_household}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      label="What is the gender of the household head?"
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                  <div className="col-auto mb-4">
                    <MaritalStatusSelect
                      isRequired
                      name="marital status"
                      value={values.marital_status}
                      error={Boolean(
                        touched.marital_status && errors.marital_status
                      )}
                      bottomText={errors.marital_status}
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
                    <EducationLevelSelect
                      isRequired
                      name="educational level"
                      value={values.education_level}
                      error={Boolean(
                        touched.education_level && errors.education_level
                      )}
                      bottomText={errors.education_level}
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
                    <IdentificationSelect
                      isRequired
                      name="means of id"
                      value={values.means_of_id}
                      error={Boolean(touched.means_of_id && errors.means_of_id)}
                      bottomText={errors.means_of_id}
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

                <div className="col-lg-3 col-md-12">
                  <div className="col-auto mb-4">
                    <IdTypeSelect
                      isRequired
                      name="ID type"
                      value={values.id_type}
                      error={Boolean(touched.id_type && errors.id_type)}
                      bottomText={errors.id_type}
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
                    <GroupOrAssSelect
                      isRequired
                      name="group or association?"
                      value={values.group_or_ass}
                      error={Boolean(
                        touched.group_or_ass && errors.group_or_ass
                      )}
                      bottomText={errors.group_or_ass}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                    {/* {values.household_head === "Yes" && (
                      <>
                        
                      </>
                    )} */}
                  </div>
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="gname"
                      label="what is the name of the group or cooperative or association?"
                      type="gname"
                      placeholder="Your answer here..."
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
                    <GroupTypeSelect
                      isRequired
                      name="group or association?"
                      value={values.group_or_ass}
                      error={Boolean(
                        touched.group_or_ass && errors.group_or_ass
                      )}
                      bottomText={errors.group_or_ass}
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
              </div>
            </DashboardCardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
