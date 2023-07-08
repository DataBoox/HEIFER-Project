import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Button, useToast} from "@chakra-ui/react";
import { ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer} from "../../home";
import { Group, useGetGroupsQuery } from "store/group";
import { useAllGroupsColumn} from "./components";
import { FaEye, FaTrash, FaPlus } from "react-icons/fa";
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import _ from "lodash";
import { FilterSystem } from "custom";
import { useState } from "react";
import { useProject } from "store/projects";
import { useDeleteGroupMutation } from "store/group";
import { resolveApiError } from "utilities";

export const GroupScreen = () => {
  const navigate = useNavigate();
  const columns = useAllGroupsColumn();
  const projectId: number = useProject().project?.id;
  const [query, setQuery] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [community, setCommunity] = useState("");
  const [intervention, setIntervention] = useState([]);
  const { data, isLoading, refetch } = useGetGroupsQuery({
    page: 1, query: query, project_id: projectId,
    state: state, lga: lga, community: community, 
    interventions: intervention
  });
  const toast = useToast({ position: "top-right" });
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleButtonClick = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);
  const [deleteGroup] = useDeleteGroupMutation();
  const [selectedGroupId, setSelectedGroupId] = useState(0);


  const handleDelete = (row: any) => {
    setSelectedGroupId(row.original.id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    initDelete(selectedGroupId);
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

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
      <FilterSystem 
        query={(target: any) => setQuery(target) }
        state={(target: any) => setState(target) } 
        lga={(target: any) => setLga(target) } 
        community={(target: any) => setCommunity(target) } 
        intervention={(target: any) => setIntervention(target) }  
      />
      
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
                  <Button onClick={() => navigate(`/groups/view/` + (row.original as Group).id)}>
                    <FaEye size={16} color="#7F8C9F" />
                  </Button>
                </OverlayTrigger>
              </div>
              {/* <div className="touchable pe-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}
                >
                  <Button onClick={() => navigate("/groups/edit")}>
                    <FaPen size={16} color="#7F8C9F" />
                  </Button>
                </OverlayTrigger>
              </div> */}
              <div className="touchable pe-2" onClick={() => handleButtonClick()}>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="Addform-tooltip">Add Form</Tooltip>}
                >
                  <div>
                    <FaPlus size={16} color="#7F8C9F" />
                  </div>
                </OverlayTrigger>
              </div>
              <div className="touchable" onClick={() => handleDelete(row)}>
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

      <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <h4 className="pt-2">Additional Groups Forms</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 className="mb-4">Select a Form</h5>
        <ul>
          <li className="mb-2">
            <Button variant="link" onClick={() => navigate("/groups/sub")}>
              Self Help Group Record Tracking
            </Button>
          </li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleModalClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>


      <Modal show={showDeleteModal} onHide={handleCancelDelete}>
  <Modal.Header closeButton>
    <Modal.Title>Delete Group</Modal.Title>
  </Modal.Header>
  <Modal.Body className="fs-4 p-4">Are you sure you want to delete this group?</Modal.Body>
  <Modal.Footer style={{ borderTop: "none" }}>
    <Button
      variant="secondary"
      onClick={handleCancelDelete}
      style={{ backgroundColor: "#cccccc", color: "#ffffff" }}
    >
      Cancel
    </Button>
    <Button
      variant="danger"
      onClick={handleConfirmDelete}
      style={{ backgroundColor: "red", color: "#ffffff" }}
    >
      Delete
    </Button>
  </Modal.Footer>
</Modal>
     
    </ContentBodyContainer>
  );
};

