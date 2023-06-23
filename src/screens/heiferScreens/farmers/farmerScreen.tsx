
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Button} from "@chakra-ui/react";
import { ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer} from "../../home";
import { useGetFarmersQuery, useDeleteFarmerMutation, Farmer } from "store/farmers";
import { useAllFarmersColumn } from "./components";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { HouseholdFilterSystem } from "custom";
import { useProject } from "store/projects";
import { resolveApiError } from "utilities";
import { useToast } from "@chakra-ui/react";

export const FarmerScreen = () => {
  const navigate = useNavigate();
  const columns = useAllFarmersColumn()
  const projectId: number = useProject().getProject()?.id;
  const { data, isLoading, refetch } = useGetFarmersQuery({ page: 1, query: '', project_id: projectId });
  const [deleteFarmer] = useDeleteFarmerMutation();
  const toast = useToast({ position: "top-right" });


  const initDelete = (farmer: number) => {
    let payload = { project_id: projectId, farmers: [farmer]}
    deleteFarmer(payload).unwrap().then((response) => {
      let msg = "Farmer has been deleted successfully"
      toast({ title: "Farmer Deleted", description: msg, status: "success" })
      refetch();
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }

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
              leftIcon={
                <MdOutlineAddCircleOutline size={12} />
              }
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
      <HouseholdFilterSystem />
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
                  <Button onClick={() => navigate("/farmers/view")}>
                    <FaEye size={16} color="#7F8C9F" />
                  </Button>
                </OverlayTrigger>
              </div>
              <div className="touchable pe-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}
                >
                  <Button onClick={() => navigate("/farmers/edit")}>
                    <FaPen size={16} color="#7F8C9F" />
                  </Button>
                </OverlayTrigger>
              </div>
              <div className="touchable" onClick={() => initDelete((row.original as Farmer).id)}>
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
