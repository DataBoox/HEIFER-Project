import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaEye, FaTrash } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer } from "../../home";
import { useGetFarmersQuery, useDeleteFarmerMutation, Farmer } from "store/farmers";
import { useAllFarmersColumn } from "./components";
import { OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import { HouseholdFilterSystem } from "custom";
import { useProject } from "store/projects";
import { resolveApiError } from "utilities";
import { useToast } from "@chakra-ui/react";
import { useState } from "react";

export const FarmerScreen = () => {
  const navigate = useNavigate();
  const columns = useAllFarmersColumn();
  const projectId: number = useProject().getProject()?.id;
  const [query, setQuery] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [community, setCommunity] = useState("");
  const [intervention, setIntervention] = useState([]);
  const [income, setIncome] = useState("");

  const { data, isLoading, refetch } = useGetFarmersQuery({
    page: 1, query: query, project_id: projectId,
    gender: gender, age_catgeory: age, state: state, 
    lga: lga, community: community, 
    interventions: intervention, income: income
  });
  const [deleteFarmer] = useDeleteFarmerMutation();
  const toast = useToast({ position: "top-right" });
  const [showModal, setShowModal] = useState(false);
  const [selectedFarmerId, setSelectedFarmerId] = useState(0);

  const handleDelete = (row: any) => {
    setSelectedFarmerId(row.original.id);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    initDelete(selectedFarmerId);
    setShowModal(false);
  };

  const handleCancelDelete = () => setShowModal(false);

  const initDelete = (farmerId: number) => {
    let payload = { project_id: projectId, farmers: [farmerId] };
    deleteFarmer(payload)
      .unwrap()
      .then((response) => {
        let msg = "Farmer has been deleted successfully";
        toast({ title: "Farmer Deleted", description: msg, status: "success" });
        refetch();
      })
      .catch((error) => {
        let msg = resolveApiError(error?.data?.response);
        toast({ title: "Request Failed", description: msg, status: "error" });
      });
  };

  return (
    <ContentBodyContainer
      title="Households"
      routesRule={"createFarmers"}
      rightCardHeaderComponent={
        <div className="row g-3 mb-0 align-items-center">
          <div className="col-auto">
            <Button
              colorScheme="teal"
              onClick={() => navigate("/register")}
              leftIcon={<MdOutlineAddCircleOutline size={12} />}
              className={"fw-bold"}
              fontSize={"sm"}
              backgroundColor={"#7AD0E2"}
              color={"#ffffff"}
              borderRadius={0}
              padding={"12px, 20px, 12px, 20px"}
              _hover={{ bg: "#bbc7ca" }}
              transition={"background-color 0.5s ease-in-out"}
            >
              Register Household
            </Button>
          </div>
        </div>
      }
    >
      <HouseholdFilterSystem 
        gender={(target: any) => setGender(target) } 
        age={(target: any) => setAge(target) } 
        state={(target: any) => setState(target) } 
        lga={(target: any) => setLga(target) } 
        community={(target: any) => setCommunity(target) } 
        intervention={(target: any) => setIntervention(target) } 
        income={(target: any) => setIncome(target) } 
        query={(target: any) => setQuery(target) } 
      />
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
                  <Button
                    onClick={() =>
                      navigate("/farmers/view/" + (row.original as Farmer).id)
                    }
                  >
                    <FaEye size={16} color="#7F8C9F" />
                  </Button>
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

              {/* Delete confirmation modal */}
            </div>
          )}
        />
      </div>
      <Modal show={showModal} onHide={handleCancelDelete}>
  <Modal.Header closeButton>
    <Modal.Title>Delete Farmer</Modal.Title>
  </Modal.Header>
  <Modal.Body className="fs-4 p-4">Are you sure you want to delete this farmer?</Modal.Body>
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
