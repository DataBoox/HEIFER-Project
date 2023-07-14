import { Button, useToast } from "@chakra-ui/react";
import { PrimaryInput, PrimarySelect, PrimaryTextarea } from "components";
import { useFormik } from "formik";
import { FaFile } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useProject } from "store/projects";
import { useAddReportMutation, useGetReportsQuery } from "store/reports";
import { communities, locals, resolveApiError, states } from "utilities";
import { AddReportScheme } from "validations";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";

export const ReportForm = () => {
    const navigate = useNavigate();
    const projectId: number = useProject().project?.id;
    const { isLoading } = useGetReportsQuery({
        page: 1,
        query: "",
        project_id: projectId,
    });
    const toast = useToast({ position: "top-right" });

    const [request] = useAddReportMutation();
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        touched,
    } = useFormik({
        initialValues: {
            community_name: "",
            date_uploaded: "",
            shf_target: "",
            shf_achievement: "",
            shg_target: "",
            shg_achievement: "",
            activity: "",
            outcomes: "",
            challenges: "",
            no_male_farmers: "",
            no_female_farmers: "",
            training_duration: "",
            next_steps: "",
            remarks: "",
            state: "",
            lga: "",
            community: "",
        },
        validationSchema: AddReportScheme(),
        onSubmit: () => initRequest(),
    });
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
                    title: "Form Added, Your Manager Has Been Notified",
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
        <ContentBodyContainer
            title="Monthly Report Form"
            routesRule={"createReport"}
        >
            <DashboardCardContainer title="Fill This Form Accurately" bodyClassName="p-3"   rightCardHeaderComponent={
                <div className="col-auto text-end mb-4">
                  <Button
                    colorScheme="teal"
                    onClick={() => initRequest()} 
                    className={"fw-light"}
                    leftIcon={ <FaFile size={13} />}
                    fontSize={"sm"}
                    backgroundColor={"#2A4153"}
                    color={"#ffffff"}
                    borderRadius={0}
                    padding={"16px, 48px, 16px, 48px"}
                  >
                    File Report
                  </Button>
                </div>
              }>
                <div className="row g-2" >
                    <div className="col-lg-6 col-md-12">
                        <div className="col-auto mb-4">
                            <PrimarySelect
                                name="state"
                                placeholder="Select"
                                label="Select State"
                                options={states()}
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
                                    options={locals(values.state)}
                                    onChange={handleChange}
                                    size={"md"}
                                    isDisabled={isLoading}
                                    style={{
                                        backgroundColor: "#F2FAFC",
                                        borderRadius: 0,
                                        borderColor: "#CAECF3",
                                    }}
                                />
                            </div> : <></>)}

                        {(values.state.length && values.lga.length ?
                            <div className="col-auto mb-4">
                                <PrimarySelect
                                    name="community"
                                    placeholder="Select Community"
                                    options={communities(values.state, values.lga)}
                                    onChange={handleChange}
                                    size={"md"}
                                    isDisabled={isLoading}
                                    style={{
                                        backgroundColor: "#F2FAFC",
                                        borderRadius: 0,
                                        borderColor: "#CAECF3",
                                    }}
                                />
                            </div> : <></>)}
                        <div className="col-auto mb-3">
                            <PrimaryInput
                                isRequired
                                name="community_name"
                                label="Name of community"
                                placeholder="Enter the name"
                                value={values.community_name}
                                error={Boolean(touched.community_name && errors.community_name)}
                                bottomText={errors.community_name}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#F2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>

                        <div className="col-auto mb-3">
                            <PrimaryInput
                                isRequired
                                name="shf_target"
                                label="Target for the month (SHF)"
                                type="number"
                                placeholder="Your answer here..."
                                value={values.shf_target}
                                error={Boolean(touched.shf_target && errors.shf_target)}
                                bottomText={errors.shf_target}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#F2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>
                        <div className="col-auto mb-3">
                            <PrimaryInput
                                isRequired
                                name="shf_achievement"
                                label="Achievement for the month (SHF)"
                                type="number"
                                placeholder="Your answer here..."
                                value={values.shf_achievement}
                                error={Boolean(touched.shf_achievement && errors.shf_achievement)}
                                bottomText={errors.shf_achievement}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#F2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>
                        <div className="col-auto mb-3">
                            <PrimaryInput
                                isRequired
                                name="shg_target"
                                label="Target for the month (SHG)"
                                type="number"
                                placeholder="Your answer here..."
                                value={values.shg_target}
                                error={Boolean(touched.shg_target && errors.shg_target)}
                                bottomText={errors.shg_target}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#F2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>
                        <div className="col-auto mb-3">
                            <PrimaryInput
                                isRequired
                                name="shg_achievement"
                                label="Achievement for the month (SHG)"
                                type="number"
                                placeholder="Your answer here..."
                                value={values.shg_achievement}
                                error={Boolean(touched.shg_achievement && errors.shg_achievement)}
                                bottomText={errors.shg_achievement}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#F2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>
                        <div className="col-auto mb-3">
                            <PrimaryTextarea
                                isRequired
                                name="activity"
                                label="What were the activities carried out?"
                                placeholder="Your answer here..."
                                value={values.activity}
                                error={Boolean(touched.activity && errors.activity)}
                                bottomText={errors.activity}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#g2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>


                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="col-auto mb-3">
                            <PrimaryTextarea
                                isRequired
                                name="outcomes"
                                label="Outcomes"
                                placeholder="Your answer here..."
                                value={values.outcomes}
                                error={Boolean(touched.outcomes && errors.outcomes)}
                                bottomText={errors.outcomes}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#g2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>
                        <div className="col-auto mb-3">
                            <PrimaryTextarea
                                isRequired
                                name="challenges"
                                label="What challenges did you face?"
                                placeholder="Your answer here..."
                                value={values.challenges}
                                error={Boolean(touched.challenges && errors.challenges)}
                                bottomText={errors.challenges}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#g2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>
                        <div className="col-auto mb-3">
                            <PrimaryInput
                                isRequired
                                name="no_male_farmers"
                                label="Number of male farmers trained"
                                type="number"
                                placeholder="Your answer here..."
                                value={values.no_male_farmers}
                                error={Boolean(touched.no_male_farmers && errors.no_male_farmers)}
                                bottomText={errors.no_male_farmers}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#F2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>
                        <div className="col-auto mb-3">
                            <PrimaryInput
                                isRequired
                                name="no_female_farmers"
                                label="Number of female farmers trained"
                                type="number"
                                placeholder="Your answer here..."
                                value={values.no_female_farmers}
                                error={Boolean(touched.no_female_farmers && errors.no_female_farmers)}
                                bottomText={errors.no_female_farmers}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#F2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>
                        <div className="col-auto mb-3">
                            <PrimaryInput
                                isRequired
                                name="training_duration"
                                label="Training duration (x days)"
                                type="number"
                                placeholder="Your answer here..."
                                value={values.training_duration}
                                error={Boolean(touched.training_duration && errors.training_duration)}
                                bottomText={errors.training_duration}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#F2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>
                        <div className="col-auto mb-3">
                            <PrimaryTextarea
                                isRequired
                                name="next_steps"
                                label="Next Steps"
                                placeholder="Your answer here..."
                                value={values.next_steps}
                                error={Boolean(touched.next_steps && errors.next_steps)}
                                bottomText={errors.next_steps}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#g2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div><div className="col-auto mb-3">
                            <PrimaryTextarea
                                isRequired
                                name="remarks"
                                label="Remarks"
                                placeholder="Your answer here..."
                                value={values.remarks}
                                error={Boolean(touched.remarks && errors.remarks)}
                                bottomText={errors.remarks}
                                onChange={handleChange}
                                isDisabled={isLoading}
                                style={{
                                    backgroundColor: "#g2FAFC",
                                    borderRadius: 0,
                                    borderColor: "#CAECF3",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </DashboardCardContainer>
        </ContentBodyContainer>
    );
};