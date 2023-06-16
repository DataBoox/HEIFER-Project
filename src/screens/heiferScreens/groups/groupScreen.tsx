import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Button, useToast} from "@chakra-ui/react";
import { PrimaryInput, ThemeTable, YesNoSelect, EntitySelect, PrimaryTextarea, FinancialServicesSelect, ServiceProviderSelect} from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer} from "../../home";
import { useFormik } from "formik";
import { resolveApiError, validationError } from "utilities";
import { AddGroupScheme } from "validations";
import { useAddUserMutation } from "store/user";
import { AddUserScheme } from "validations";
import { useGetGroupsQuery } from "store/group";
import { useAllGroupsColumn } from "./components";
import { FaEye, FaPen, FaTrash, FaPlus } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import _ from "lodash";
import { toast } from "react-toastify";
import { StateLGAInput, FilterSystem } from "custom";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useProject } from "store/projects";

export const GroupScreen = () => {
  const navigate = useNavigate();
  const columns = useAllGroupsColumn();
  const projectId: number = useProject().project?.id;
  const { data, isLoading, refetch } = useGetGroupsQuery({
    page: 1,
    query: "",
    project_id: projectId,
  });
  const toast = useToast({ position: "top-right" });
  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const handleFormButtonClick = () => setShowFormModal(true);
  const handleFormModalClose = () => setShowFormModal(false);

  const [request] = useAddUserMutation();
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    setFieldValue,
    resetForm,
    touched,
    setValues,
    setFieldTouched,
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
      comment: "",
    },
    validationSchema: AddUserScheme(),
    onSubmit: () => initRequest(),
  });
const initRequest = () => {
    const payload: any = {
      ...values,
    };
    request(payload)
      .unwrap()
      .then((res) => {
        // console.log(res);
        toast({
          title: "User Added",
          description: res?.response,
          status: "success",
        });
        resetForm({}); // reset form
        initOnClose();
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: "Request Failed",
          description: resolveApiError(error),
          status: "error",
        });
      });
  };


  return (
    <ContentBodyContainer
      title="Groups"
      routesRule={"createGroup"}
      rightCardHeaderComponent={
        <div className="row g-3 mb-0 align-items-center">
          <div className="col-auto">
            <Button
              colorScheme="teal"
              onClick={() => navigate("/groups/add")}
              leftIcon={
                <MdOutlineAddCircleOutline className="svg-dark" size={12} />
              }
              className={"fw-bold"}
              fontSize={"sm"}
              backgroundColor={"#7AD0E2"}
              color={"#000000"}
              borderRadius={0}
              padding={"12px, 20px, 12px, 20px"}
              _hover={{ bg: "#bbc7ca" }}
              transition={"background-color 0.5s ease-in-out"}
            >
              Create Group
            </Button>
          </div>
        </div>
      }
    >
      <FilterSystem />
      <div className="col-xl-12">
        <ThemeTable
          data={data?.data?.data ?? []}
          columns={columns as any}
          isLoading={isLoading}
          onRefetch={refetch}
          enableRowActions
          positionActionsColumn="last"
          renderRowActions={({ row }) => (
            <div className="d-flex justify-content-evenly">
              <div className="touchable pe-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="view-tooltip">View</Tooltip>}
                >
                  <div>
                    <FaEye size={16} color="#7F8C9F" />
                  </div>
                </OverlayTrigger>
              </div>
              <div className="touchable pe-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}
                >
                  <div>
                    <FaPen size={16} color="#7F8C9F" />
                  </div>
                </OverlayTrigger>
              </div>
              <div className="touchable pe-2" onClick={handleButtonClick}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="Addform-tooltip">Add Form</Tooltip>}
                >
                  <div>
                    <FaPlus size={16} color="red" />
                  </div>
                </OverlayTrigger>
              </div>
              <div className="touchable">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="delete-tooltip">Delete</Tooltip>}
                >
                  <div>
                    <FaTrash size={16} color="red" />
                  </div>
                </OverlayTrigger>
              </div>
            </div>
          )}
        />
      </div>

      <Modal isOpen={showModal} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h4 className="border-bottom pb-2">Additional Groups Forms</h4>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <h5 className="mb-4">Select a Form</h5>
            <ul>
              <li className="mb-2">
                <Button variant="link" onClick={handleFormButtonClick}>Self Help Group Record Tracking</Button>
              </li>
              <li className="mb-2">
                <Button variant="link">SHG & Entities Summary Form</Button>
              </li>
              {/* Add more form options as needed */}
            </ul>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleModalClose}>
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={showFormModal} onClose={handleFormModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <h4 className="border-bottom pb-2">Groups Form Modal</h4>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <div style={{ height: '300px', overflowY: 'auto', overflowX: 'hidden' }}>
          <div className="row g-2" >

          <div className="col-12 mb-1">
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
          <div className="col-12 mb-1">
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
          <div className="col-12 mb-1">
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
          <div className="col-12 mb-1">
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
          <div className="col-12 mb-1">
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
          <div className="col-12 mb-1">
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
          <div className="col-12 mb-1">
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
          <div className="col-12 mb-1">
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
          <div className="col-12 mb-1">
            <PrimaryTextarea
              name="comment"
              label="Any Additional Comments?"
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
         
        </div>
        </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary" onClick={handleFormModalClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleFormModalClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </ContentBodyContainer>
  );
};
function initOnClose() {
  throw new Error("Function not implemented.");
}

