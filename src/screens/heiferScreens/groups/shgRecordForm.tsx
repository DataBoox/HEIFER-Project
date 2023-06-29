import { Button, useToast } from "@chakra-ui/react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { PrimaryInput, YesNoSelect, EntitySelect, PrimaryTextarea, FinancialServicesSelect, ServiceProviderSelect, MeasurementUnitSelect } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError } from "utilities";
import { AddShgRecordScheme } from "validations";
import { useGetShgsQuery, useAddShgMutation } from "store/shg";
import { useProject } from "store/projects";

export const ShgRecordForm = () => {
    const navigate = useNavigate();
    const projectId: number = useProject().project?.id;
    const { isLoading } = useGetShgsQuery({
        page: 1,
        query: "",
        project_id: projectId,
    });
    const toast = useToast({ position: "top-right" });

    const [request] = useAddShgMutation();
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        resetForm,
        touched,
    } = useFormik({
        initialValues: {
            entity_name: "",
            financial: "",
            business_plan: "",
            hold_meeting: "",
            cash: "",
            asset: "",
            financial_services: "",
            how_much_was_accessed: "",
            service_provider: "",
            conduct_sales: "",
            commodity_sold: "",
            quantity_sold: "",
            measurement_unit: "",
            price: "",
            value: "",
            comment: "",
        },
        validationSchema: AddShgRecordScheme(),
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
                    title: "Form Added",
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

        // navigate to groups after clicking register
        navigate("/groups");
    };



    return (
        <ContentBodyContainer
            title="Groups Sub Forms"
            routesRule={"formsOne"}
        >
            <DashboardCardContainer title="Small Holder Groups Record Form" bodyClassName="p-3">
                <div className="row g-2" >
                    <div className="col-lg-6 col-md-12">
                        <div className="col-auto mb-3">
                            <PrimaryInput
                                isRequired
                                name="entity_name"
                                label="Name of Entity/Self Help Group"
                                placeholder="Enter the name"
                                value={values.entity_name}
                                error={Boolean(touched.entity_name && errors.entity_name)}
                                bottomText={errors.entity_name}
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
                            <YesNoSelect
                                isRequired
                                name="business_plan"
                                label="Does The Self Help Group Have A Business Plan?"
                                placeholder="Select"
                                value={values.business_plan}
                                error={Boolean(touched.business_plan && errors.business_plan)}
                                bottomText={errors.business_plan}
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
                            <YesNoSelect
                                isRequired
                                name="hold_meeting"
                                label="Did The Entity Hold Meetings During The Month?"
                                placeholder="Select"
                                value={values.hold_meeting}
                                error={Boolean(touched.hold_meeting && errors.hold_meeting)}
                                bottomText={errors.hold_meeting}
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
                        <EntitySelect
                            isRequired
                            name="financial"
                            label="Did Entity/SHG Access Any Financial Services?"
                            placeholder="Select"
                            value={values.financial}
                            error={Boolean(touched.financial && errors.financial)}
                            bottomText={errors.financial}
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
                        <YesNoSelect
                            isRequired
                            name="cash"
                            label="Was The Loan Received In Form Of Cash?"
                            placeholder="Select"
                            value={values.cash}
                            error={Boolean(touched.cash && errors.cash)}
                            bottomText={errors.cash}
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
                        <YesNoSelect
                            isRequired
                            name="asset"
                            label="Was The Loan Received In Form Of Input/Assets Credit?"
                            placeholder="Select"
                            value={values.asset}
                            error={Boolean(touched.asset && errors.asset)}
                            bottomText={errors.asset}
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
                        <FinancialServicesSelect
                            isRequired
                            name="financial_services"
                            label="What Was The Purpose Of The Financial Services?"
                            placeholder="Select"
                            value={values.financial_services}
                            error={Boolean(touched.financial_services && errors.financial_services)}
                            bottomText={errors.financial_services}
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
                            name="how_much_was_accessed"
                            label="How Much Was Accessed (In Local Currency)?"
                            placeholder="Answer here"
                            value={values.how_much_was_accessed}
                            error={Boolean(touched.how_much_was_accessed && errors.how_much_was_accessed)}
                            bottomText={errors.how_much_was_accessed}
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
                   
                    
                    <div className="col-auto mb-3">
                        <ServiceProviderSelect
                            isRequired
                            name="service_provider"
                            label="Type Of Service Provider?"
                            placeholder="Select"
                            value={values.service_provider}
                            error={Boolean(touched.service_provider && errors.service_provider)}
                            bottomText={errors.service_provider}
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
                        <YesNoSelect
                            isRequired
                            name="conduct_sales"
                            label="Did The Group Conduct Sales This Month?"
                            placeholder="Select"
                            value={values.conduct_sales}
                            error={Boolean(touched.conduct_sales && errors.conduct_sales)}
                            bottomText={errors.conduct_sales}
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
                            name="commodity_sold"
                            label="Type Of Commodity Sold"
                            placeholder="Answer here"
                            value={values.commodity_sold}
                            error={Boolean(touched.commodity_sold && errors.commodity_sold)}
                            bottomText={errors.commodity_sold}
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
                            name="quantity_sold"
                            label="How Much Was Sold?"
                            type="number"
                            placeholder="Answer here"
                            value={values.quantity_sold}
                            error={Boolean(touched.quantity_sold && errors.quantity_sold)}
                            bottomText={errors.quantity_sold}
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
                        <MeasurementUnitSelect
                            isRequired
                            name="measurement_unit"
                            label="What Unit Of Measurement Was Used?"
                            placeholder="Select"
                            value={values.measurement_unit}
                            error={Boolean(touched.measurement_unit && errors.measurement_unit)}
                            bottomText={errors.measurement_unit}
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
                            name="price"
                            label="What Was The Unit Price?"
                            type="number"
                            placeholder="Answer here"
                            value={values.price}
                            error={Boolean(touched.price && errors.price)}
                            bottomText={errors.price}
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
                            name="value"
                            label="The Total Value Of Sales?"
                            type="number"
                            placeholder="Answer here"
                            value={values.value}
                            error={Boolean(touched.value && errors.value)}
                            bottomText={errors.value}
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
                            name="comment"
                            label="Highlight Any Major Achievements or Challenges"
                            placeholder="Answer here"
                            value={values.comment}
                            error={Boolean(touched.comment && errors.comment)}
                            bottomText={errors.comment}
                            onChange={handleChange}
                            isDisabled={isLoading}
                            style={{
                                backgroundColor: "#F2FAFC",
                                borderRadius: 0,
                                borderColor: "#CAECF3",
                            }}
                        />
                    </div>
                    <div className="col-auto text-end">
                  <Button
                    colorScheme="teal"
                    leftIcon={
                        <MdOutlineAddCircleOutline size={12} />
                      }
                    onClick={() => handleSubmit()}
                    className={"fw-light"}
                    fontSize={"sm"}
                    backgroundColor={"#2A4153"}
                    color={"#ffffff"}
                    borderRadius={0}
                    padding={"16px, 48px, 16px, 48px"}
                  >
                    Submit Response
                  </Button>
                </div>
                    </div>
                </div>
            </DashboardCardContainer>
        </ContentBodyContainer>
    );
};