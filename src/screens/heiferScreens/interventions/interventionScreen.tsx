import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaEye, FaPen, FaSearch, FaTrash } from "react-icons/fa";
import { Button, useToast } from "@chakra-ui/react";
import { ThemeTable, PrimaryInput } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer } from "../../home";
import { useFormik } from "formik";
import { AddInterventionScheme } from "validations";
import { AddInterventionDialog } from "./addIntervention";
import { useGetInterventionsQuery, useDeleteInterventionMutation, Intervention } from "store/intervention";
import { useAllInterventionsColumn } from "./components";
import _ from "lodash";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useProject } from "store/projects";
import { resolveApiError } from "utilities";

export const InterventionScreen = () => {
  const navigate = useNavigate();
  const columns = useAllInterventionsColumn();
  const projectId: number = useProject().getProject()?.id;
  const { data, isLoading, refetch } = useGetInterventionsQuery({ page: 1, query: "", project_id: projectId });
  const toast = useToast({ position: "top-right" });
  const [deleteIntervention] = useDeleteInterventionMutation();

  const initDelete = (intervention: number) => {
    let payload = { project_id: projectId, interventions: [intervention]}
    deleteIntervention(payload).unwrap().then((response) => {
      let msg = "Intervention has been deleted successfully"
      toast({ title: "Intervention Deleted", description: msg, status: "success" })
      refetch();
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }

  return (
    <ContentBodyContainer
      title="Interventions"
      routesRule={"createIntervention"}
      rightCardHeaderComponent={
        <div className="row g-3 mb-0 align-items-center">
          <div className="col-auto">
            <PrimaryInput
              name="search"
              placeholder="Search..."
              size={"lg"}
              rightComponent={<FaSearch color={"grey"} />}
              // onChange={({ target }) => onSearch(target.value)}
              isDisabled={isLoading}
              style={{
                backgroundColor: "#ffff",
                borderRadius: 0,
                border: 0,
              }}
            />
          </div>
          <div className="col-auto">
            <AddInterventionDialog
              useButton={true}
              buttonProps={{
                leftIcon: (
                  <MdOutlineAddCircleOutline className="svg-dark" size={12} />
                ),
                fontSize: "sm",
                className: "fw-bold",
                backgroundColor: "#7AD0E2",
                color: "#000000",
                borderRadius: 0,
                padding: "12px, 20px, 12px, 20px",
              }}
              onClose={refetch}
            >
              Add Intervention
            </AddInterventionDialog>
          </div>
        </div>
      }
    >
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
                  <Button onClick={() => navigate(`/interventions/view/` + (row.original as Intervention).id)}>
                    <FaEye size={16} color="#7F8C9F" />
                  </Button>
                </OverlayTrigger>
              </div>
              {/* <div className="touchable pe-2">
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="edit-tooltip">Edit</Tooltip>}
                >
                  <Button onClick={() => navigate("/interventions/edit")}>
                    <FaPen size={16} color="#7F8C9F" />
                  </Button>
                </OverlayTrigger>
              </div> */}
              <div className="touchable" onClick={() => initDelete((row.original as Intervention).id)}>
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
