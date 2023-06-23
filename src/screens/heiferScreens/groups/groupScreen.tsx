import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Button, useToast} from "@chakra-ui/react";
import { ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer} from "../../home";
import { Group, useGetGroupsQuery } from "store/group";
import { useAllGroupsColumn} from "./components";
import { FaEye, FaPen, FaTrash, FaPlus } from "react-icons/fa";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import _ from "lodash";
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
import { useDeleteGroupMutation } from "store/group";
import { resolveApiError } from "utilities";

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
  const [deleteGroup] = useDeleteGroupMutation();

  const initDelete = (group: number) => {
    let payload = { project_id: projectId, groups: [group]}
    deleteGroup(payload).unwrap().then((response) => {
      let msg = "Group has been deleted successfully"
      toast({ title: "Group Deleted", description: msg, status: "success" })
      refetch();
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }


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
          renderRowActions={({row}) => (
            <div className="d-flex justify-content-evenly">
              <div className="touchable pe-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="view-tooltip">View</Tooltip>}
                >
                  <Button onClick={() => navigate("/groups/view")}>
                    <FaEye size={16} color="#7F8C9F" />
                  </Button>
                </OverlayTrigger>
              </div>
              <div className="touchable pe-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}
                >
                  <Button onClick={() => navigate("/groups/edit")}>
                    <FaPen size={16} color="#7F8C9F" />
                  </Button>
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
              <div className="touchable" onClick={() => initDelete((row.original as Group).id)}>
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
                <Button variant="link" onClick={() => navigate("/groups/form-1")}>Self Help Group Record Tracking</Button>
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

     
    </ContentBodyContainer>
  );
};

