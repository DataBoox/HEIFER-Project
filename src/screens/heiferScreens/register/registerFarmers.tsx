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
  PrimarySelect,
  HouseholdTypeSelect,
} from "components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { AddRegisterFarmerScheme } from "validations";
import { resolveApiError } from "utilities";
import { useState } from "react";
import { states, localGov, communities } from "utilities";
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
    setValues,
    setFieldTouched,
    touched,
  } = useFormik({
    initialValues: {
      farmer_address: "",
      first_name: "",
      last_name: "",
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
      latitude: "",
      longitude: "",
      state: "",
      lga: "",
      no_of_males: "",
      no_of_females: "",
      total_household: "",
      farm_size: "",
      household_type: "",
      household_income: "",
    },
    validationSchema: AddRegisterFarmerScheme(),
    onSubmit: () => initRequest(),
  });

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setValues({
            ...values,
            latitude: latitude.toString(),
            longitude: longitude.toString(),
          });
        },
        (error) => {
          console.log(error);
          toast({
            title: "Location Error",
            description: "Failed to retrieve your location.",
            status: "error",
          });
        }
      );
    } else {
      toast({
        title: "Geolocation Error",
        description: "Geolocation is not supported by your browser.",
        status: "error",
      });
    }
  };

  const initRequest = () => {
    const payload: any = {
      ...values,
    };
    console.log(payload);
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
                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="first_name"
                      label="First Name"
                      placeholder="Enter first name..."
                      value={values.first_name}
                      error={Boolean(touched.first_name && errors.first_name)}
                      bottomText={errors.first_name}
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
                      name="last_name"
                      label="Last Name"
                      placeholder="Enter last name..."
                      value={values.last_name}
                      error={Boolean(touched.last_name && errors.last_name)}
                      bottomText={errors.last_name}
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
                      name="cluster_name"
                      label="Farmer's Cluster"
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
                      label="Cluster's Number"
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

                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="cluster_head_name"
                      label="Cluster's Head"
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
                    <PrimaryInput
                      isRequired
                      name="farmer_address"
                      label="Farmer's Address"
                      placeholder="Your answer here..."
                      value={values.farmer_address}
                      error={Boolean(
                        touched.farmer_address && errors.farmer_address
                      )}
                      bottomText={errors.farmer_address}
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
                      onChange={handleChange}
                      isDisabled={isLoading}
                      label="Farmer's gender?"
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
            <PrimarySelect 
              name="state"
              placeholder="Select"
              label="Select State"
              options={ states }
              onChange={handleChange}
              size={"md"}
              isDisabled={isLoading}
              style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
            />
          </div>
          {(values.state.length ? 
            <div className="col-auto mb-4">
              <PrimarySelect 
                name="lga"
                placeholder="Select Local Gov"
                options={ localGov(Number(values.state)) }
                onChange={handleChange}
                size={"md"}
                isDisabled={isLoading}
                style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
              />
            </div> : <></> )}

            {(values.state.length && values.lga.length ? 
              <div className="col-auto mb-4">
                <PrimarySelect
                  name="community"
                  placeholder="Select Community"
                  options={ communities(Number(values.state), Number(values.lga)) }
                  onChange={handleChange}
                  size={"md"}
                  isDisabled={isLoading}
                  style={{
                    backgroundColor: "#F2FAFC",
                    borderRadius: 0,
                    borderColor: "#CAECF3",
                  }}
                />
              </div> : <></> )}
                  <div className="col-auto mb-4">
                    <Button
                      onClick={getLocation}
                      isLoading={isLoading}
                      isDisabled={isLoading}
                      colorScheme="teal"
                      size="sm"
                      mb={4}
                    >
                      Use My Location
                    </Button>
                    <PrimaryInput
                      name="latitude"
                      label="Latitude"
                      placeholder="Latitude"
                      value={values.latitude}
                      error={Boolean(touched.latitude && errors.latitude)}
                      bottomText={errors.latitude}
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
                      name="longitude"
                      label="Longitude"
                      placeholder="Longitude"
                      value={values.longitude}
                      error={Boolean(touched.longitude && errors.longitude)}
                      bottomText={errors.longitude}
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
                      name="farmer_age"
                      label="Farmer's Age"
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
                      name="farmer_phone"
                      label="Farmer's Phone Number"
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
                </div>

                <div className="col-lg-3 col-md-12">

                  
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
                    <PrimaryInput
                      isRequired
                      name="no_of_males"
                      label="Number of males in the household"
                      type="number"
                      placeholder="Your answer here..."
                      value={values.no_of_males}
                      error={Boolean(touched.no_of_males && errors.no_of_males)}
                      bottomText={errors.no_of_males}
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
                      name="no_of_females"
                      label="Number of females in the household"
                      type="number"
                      placeholder="Your answer here..."
                      value={values.no_of_females}
                      error={Boolean(touched.no_of_females && errors.no_of_females)}
                      bottomText={errors.no_of_females}
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
                      name="total_household"
                      label="Total number of members in the household"
                      type="number"
                      placeholder="Your answer here..."
                      value={values.total_household}
                      error={Boolean(touched.total_household && errors.total_household)}
                      bottomText={errors.total_household}
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
                      name="farm_size"
                      label="Farm Size (in Hectres)"
                      type="number"
                      placeholder="Your answer here..."
                      value={values.farm_size}
                      error={Boolean(touched.farm_size && errors.farm_size)}
                      bottomText={errors.farm_size}
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
                    <HouseholdTypeSelect
                      isRequired
                      name="household_type"
                      value={values.household_type}
                      error={Boolean(
                        touched.household_type &&
                          errors.household_type
                      )}
                     
                      onChange={handleChange}
                      isDisabled={isLoading}
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div>
                  {/* <div className="col-auto mb-4">
                    <GenderSelect
                      isRequired
                      name="house_head_gender"
                      value={values.house_head_gender}
                      error={Boolean(
                        touched.house_head_gender && errors.house_head_gender
                      )}
                      onChange={handleChange}
                      isDisabled={isLoading}
                      label="Gender of the household head"
                      style={{
                        backgroundColor: "#F2FAFC",
                        borderRadius: 0,
                        borderColor: "#CAECF3",
                      }}
                    />
                  </div> */}
                  
                </div>

                <div className="col-lg-3 col-md-12">
               

                  <div className="col-auto mb-4">
                    <PrimaryInput
                      isRequired
                      name="household_income"
                      label="What is the income of your household?"
                      type="number"
                      placeholder="Your answer here..."
                      value={values.household_income}
                      error={Boolean(touched.household_income && errors.household_income)}
                      bottomText={errors.household_income}
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
                    <MaritalStatusSelect
                      isRequired
                      name="marital_status"
                      value={values.marital_status}
                      error={Boolean(
                        touched.marital_status && errors.marital_status
                      )}
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
                      name="house_head_edu"
                      value={values.house_head_edu}
                      error={Boolean(
                        touched.house_head_edu && errors.house_head_edu
                      )}
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
                          label="Group / Cooperative / Association"
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
