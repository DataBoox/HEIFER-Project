import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Button, useToast, ButtonProps } from "@chakra-ui/react";
import { PrimaryButton, PrimaryInput, ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { resolveApiError, validationError } from "utilities";
import { AddGroupScheme } from "validations";
import { useGetGroupsQuery } from "store/group";
import { useAllGroupsColumn } from "./components";
import { FaEye, FaPen, FaSearch, FaTrash, FaPlus } from "react-icons/fa";
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
  const { data, isLoading, refetch } = useGetGroupsQuery({ page: 1, query: "", project_id: projectId });
  const toast = useToast({ position: "top-right" });
  const [showModal, setShowModal] = useState(false);
  const handleButtonClick = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);


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
      <FilterSystem/>
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
              <div className="touchable">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="Addform-tooltip">Add Form</Tooltip>}
                >
                  <div>
                    <FaPlus size={16} color="red" />
                  </div>
                </OverlayTrigger>
              </div>

              <Modal isOpen={showModal} onClose={handleModalClose}>
                <ModalHeader>
                  <h2>Selectable Fields</h2>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>{/* Add your selectable fields here */}</ModalBody>
                <ModalFooter>
                  <Button variant="secondary" onClick={handleModalClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleModalClose}>
                    Save Changes
                  </Button>
                </ModalFooter>
              </Modal>
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
    </ContentBodyContainer>
  );
};
