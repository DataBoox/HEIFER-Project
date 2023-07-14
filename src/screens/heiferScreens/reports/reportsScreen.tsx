import { Button, useToast } from "@chakra-ui/react";
import { ThemeTable } from "components";
import { useState } from "react";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaEye, FaTrash } from "react-icons/fa";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useProject } from "store/projects";
import { Report, useDeleteReportMutation, useGetReportsQuery } from "store/reports";
import { resolveApiError } from "utilities";
import { ContentBodyContainer } from "../../home";
import { useAllReportsColumn } from "./components/reportsColumns";

export const ReportsScreen = () => {
  const navigate = useNavigate();
  const columns = useAllReportsColumn();
  const projectId: number = useProject().project?.id;
  const [query, setQuery] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [intervention, setIntervention] = useState([]);
  const [community, setCommunity] = useState("");
  const { data, isLoading, refetch } = useGetReportsQuery({
    page: 1, query: query, project_id: projectId,
    state: state, lga: lga, community: community, 
  });
  const toast = useToast({ position: "top-right" });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteReport] = useDeleteReportMutation();
  const [selectedReportId, setSelectedReportId] = useState(0);


  const handleDelete = (row: any) => {
    setSelectedReportId(row.original.id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = () => {
    initDelete(selectedReportId);
    setShowDeleteModal(false);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };

  const initDelete = (report: number) => {
    let payload = { project_id: projectId, reports: [report]}
    deleteReport(payload).unwrap().then((response) => {
      let msg = "Record has been deleted successfully"
      toast({ title: "Record Deleted", description: msg, status: "success" })
      refetch();
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }


  return (
    <ContentBodyContainer
      title="All Reports"
      routesRule={"createReport"}
    >
      
      
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
              {/* <div className="touchable pe-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="view-tooltip">View</Tooltip>}
                >
                  <Button onClick={() => navigate(`/groups/subs/view/` + (row.original as Report).id)}>
                    <FaEye size={16} color="#7F8C9F" />
                  </Button>
                </OverlayTrigger>
              </div> */}
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

      <Modal show={showDeleteModal} onHide={handleCancelDelete}>
  <Modal.Header closeButton>
    <Modal.Title>Delete Record</Modal.Title>
  </Modal.Header>
  <Modal.Body className="fs-4 p-4">Are you sure you want to delete this record?</Modal.Body>
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

