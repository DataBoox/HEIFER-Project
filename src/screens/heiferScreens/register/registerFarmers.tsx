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
import { AddRegisterFarmerScheme } from "validations";
import { resolveApiError } from "utilities";
import { useState } from "react";
import { useAddFarmerMutation } from "store/farmers";
import { useProject } from "store/projects";

export const RegisterFarmers = () => {
  const {project} = useProject();
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
      farmer_address: "",
      email_address: "",
      fname: "",
      lname: "",
      created_at: "",
      cluster_name: "",
      cluster_no: "",
      cluster_head_name: "",
      farmer_gender: "",
      farmer_gender_household: "",
      farmer_age: "",
      farmer_age_category: "",
      farmer_phone: "",
      is_house_head: false,
      house_head_gender: "",
      house_head_edu: "",
      marital_status: "",
      valid_id: "",
      id_type: "",
      group_or_ass: "",
      group_name: "",
      group_type: "",
      project_id: project.id,
      farmer_id: "",
    },
    validationSchema: AddRegisterFarmerScheme(),
    onSubmit: () => initRequest(),
  });

  
  const initRequest = () => {
    const payload: any = {
      ...values,
    };
    request(payload)
      .unwrap()
      .then((res) => {
        console.log(payload);
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

    // navigate to farmers after clicking register
    navigate("/farmers");
  };

  console.log(errors)

  
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
                    onClick={() => handleSubmit()}
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
                  {/* <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="fname"
                      label="First Name"
                      placeholder="Enter first name..."
                      value={values.fname}
                      error={Boolean(touched.fname && errors.fname)}
                      bottomText={errors.fname}
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
                      name="lname"
                      label="Last Name"
                      placeholder="Enter last name..."
                      value={values.lname}
                      error={Boolean(touched.lname && errors.lname)}
                      bottomText={errors.lname}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div> */}
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="cluster_name"
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
                      name="cluster_no"
                      label="What is the cluster number?"
                      placeholder="Your answer here..."
                      value={values.cluster_no}
                      error={Boolean(touched.cluster_no && errors.cluster_no)}
                      bottomText={errors.cluster_no}
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
                    <PrimaryInput
                      isRequired
                      name="cluster_head_name"
                      label="What is the name of the cluster's head?"
                      placeholder="Your answer here..."
                      value={values.cluster_head_name}
                      error={Boolean(
                        touched.cluster_head_name && errors.cluster_head_name
                      )}
                      bottomText={errors.cluster_head_name}
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
                      name="farmer_gender"
                      value={values.farmer_gender}
                      error={Boolean(
                        touched.farmer_gender && errors.farmer_gender
                      )}
                      bottomText={errors.farmer_gender}
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
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="farmer_age"
                      label="What is the farmer's age?"
                      placeholder="Your answer here..."
                      value={values.farmer_age}
                      error={Boolean(touched.farmer_age && errors.farmer_age)}
                      bottomText={errors.farmer_age}
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
                      name="farmer_age_category"
                      value={values.farmer_age_category}
                      error={Boolean(
                        touched.farmer_age_category &&
                          errors.farmer_age_category
                      )}
                      bottomText={errors.farmer_age_category}
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
                    <PrimaryInput
                      isRequired
                      name="farmer_phone"
                      label="What is the farmer's phone number?"
                      type="phone"
                      placeholder="Your answer here..."
                      value={values.farmer_phone}
                      error={Boolean(
                        touched.farmer_phone && errors.farmer_phone
                      )}
                      bottomText={errors.farmer_phone}
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
                      name="is_house_head"
                      value={values.is_house_head ? "yes" : "no"}
                      error={Boolean(
                        touched.is_house_head && errors.is_house_head
                      )}
                      bottomText={errors.is_house_head}
                      onChange={({ target }) =>
                        setFieldValue(
                          "is_house_head",
                          Boolean(target.value === "yes")
                        )
                      }
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
                      name="house_head_gender"
                      value={values.house_head_gender}
                      error={Boolean(
                        touched.house_head_gender && errors.house_head_gender
                      )}
                      bottomText={errors.house_head_gender}
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
                      name="marital_status"
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
                </div>

                <div className="col-lg-3 col-md-12">
                  <div className="col-auto mb-4">
                    <EducationLevelSelect
                      isRequired
                      name="house_head_edu"
                      value={values.house_head_edu}
                      error={Boolean(
                        touched.house_head_edu && errors.house_head_edu
                      )}
                      bottomText={errors.house_head_edu}
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
                      name="valid_id"
                      value={values.valid_id}
                      error={Boolean(touched.valid_id && errors.valid_id)}
                      bottomText={errors.valid_id}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                  {Boolean(
                    values.valid_id.length && values.valid_id === "yes"
                  ) && (
                    <div className="col-auto mb-4">
                      <IdTypeSelect
                        name="valid_id"
                        value={values.valid_id}
                        error={Boolean(touched.valid_id && errors.valid_id)}
                        bottomText={errors.valid_id}
                        onChange={handleChange}
                        isDisabled={isLoading}
                        style={{
                          backgroundColor: "#F2FAFC",
                          borderRadius: 0,
                          borderColor: "#CAECF3",
                        }}
                      />
                    </div>
                  )}

                  <div className="col-auto mb-4">
                    <GroupOrAssSelect
                      isRequired
                      name="group_or_ass"
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
                  {Boolean(
                    values.group_or_ass.length && values.group_or_ass === "yes"
                  ) && (
                    <>
                      <div className="col-auto mb-4">
                        <PrimaryInput
                          isRequired
                          name="group_name"
                          label="what is the name of the group or cooperative or association?"
                          type="group_name"
                          placeholder="Your answer here..."
                          value={values.group_name}
                          error={Boolean(
                            touched.group_name && errors.group_name
                          )}
                          bottomText={errors.group_name}
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
                          name="group_type"
                          value={values.group_type}
                          error={Boolean(
                            touched.group_type && errors.group_type
                          )}
                          bottomText={errors.group_type}
                          onChange={handleChange}
                          isDisabled={isLoading}
                          style={{
                            backgroundColor: "#F2FAFC",
                            borderRadius: 0,
                            borderColor: "#CAECF3",
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </DashboardCardContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
