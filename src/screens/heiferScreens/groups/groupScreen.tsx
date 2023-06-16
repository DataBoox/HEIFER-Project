import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Button, useToast} from "@chakra-ui/react";
import { PrimaryInput, ThemeTable, YesNoSelect,} from "components";
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
      fname: "",
      lname: "",
      phone: "",
      email: "",
      state: "",
      community: "",
      project: "",
      role: "",
      lga: "",
      gender: "",
      entity: "",
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
                <Button variant="link">Form 2</Button>
              </li>
              <li className="mb-2">
                <Button variant="link">Form 3</Button>
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
          <div className="row g-2" >

          <div className="col-12 mb-1">
            <PrimaryInput
              isRequired
              name="fname"
              label="Name of Entity/Self Help Group"
              placeholder="Enter the name"
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
          <div className="col-12 mb-1">
            <YesNoSelect
              isRequired
              name="gender"
              label="Does The Self Help Group Have A Business Plan?"
              placeholder="Yes or No?"
              value={values.gender}
              error={Boolean(touched.gender && errors.gender)}
              bottomText={errors.gender}
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
              name="entity"
              label="Did The Entity Hold Meetings During The Month?"
              placeholder="Yes or No?"
              value={values.entity}
              error={Boolean(touched.entity && errors.entity)}
              bottomText={errors.entity}
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
              name="community"
              label="Community"
              placeholder="Did Entity/SHG Access Any Financial Services?"
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

