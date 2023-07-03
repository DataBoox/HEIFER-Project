// import { Devotional, DevotionalProps} from "./components/devotionalComponent";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Button} from "@chakra-ui/react";
import { FaEye, FaPen, FaSearch, FaTrash, FaUserCheck, FaUserSlash } from "react-icons/fa";
import { useToast, } from "@chakra-ui/react";
import { PrimaryInput, ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer} from "../../home";
import { AddUserDialog } from "./addUser";
import { useAddUserMutation, useDisableUserMutation, useGetUsersQuery, useEnableUserMutation } from "store/user";
import { useAllUsersColumn } from "./components";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { resolveApiError } from "utilities";
import { useProject } from "store/projects";
import { UserInfo } from "@store/user";
import { useState } from "react";

export const UserScreen = () => {
  const navigate = useNavigate();
  const columns = useAllUsersColumn()
  const projectId: number = useProject().project?.id;
  const [query, setQuery] = useState("");
  const { data, isLoading, refetch } = useGetUsersQuery({ page: 1, query: query, project_id: projectId });
  const toast = useToast({ position: "top-right" });
  const [disableUser] = useDisableUserMutation();
  const [enableUser] = useEnableUserMutation();

  const initDisable = (user: number) => {
    disableUser({users: [user]}).unwrap().then((response) => {
      let msg = "User has been disabled successfully"
      toast({ title: "User Disabled", description: msg, status: "success" })
      navigate("/users");
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }

  const enableDisable = (user: number) => {
    enableUser({users: [user]}).unwrap().then((response) => {
      let msg = "User has been enabled successfully"
      toast({ title: "User Enabled", description: msg, status: "success" })
      navigate("/users");
    }).catch((error) => {
      let msg = resolveApiError(error?.data?.response)
      toast({ title: "Request Failed", description: msg, status: "error"})
    });
  }

  return (
    <ContentBodyContainer
      title="Register Users"
      routesRule={"createUser"}
      rightCardHeaderComponent={
        <div className="row g-3 mb-0 align-items-center">
          <div className="col-auto">
            <PrimaryInput
              name="search"
              placeholder="Search..."
              size={"lg"}
              rightComponent={<FaSearch color={"grey"} />}
              onChange={({ target }) => setQuery(target.value)}
              isDisabled={isLoading}
              style={{
                backgroundColor: "#ffff",
                borderRadius: 0,
                border: 0,
              }}
            />
          </div>
          <div className="col-auto">
            <AddUserDialog
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
                transition: "background-color 0.5s ease-in-out", // Add transition property
              }}
              onClose={refetch}
            >
              Add User
            </AddUserDialog>
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
                  <Button onClick={() => navigate(`/users/view/` + (row.original as UserInfo).id)}>
                    <FaEye size={16} color="#7F8C9F" />
                  </Button>
                </OverlayTrigger>
              </div>
              {(row.original as UserInfo).user.status ? (
                  <div className="touchable" onClick={() => initDisable((row.original as UserInfo).id)}>
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="delete-tooltip">Disable</Tooltip>}
                    >
                      <div>
                        <FaUserSlash size={16} color="red" />
                      </div>
                    </OverlayTrigger>
                  </div>
              ) : (
                <div className="touchable" onClick={() => enableDisable((row.original as UserInfo).id)}>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id="enable-tooltip">Enable</Tooltip>}
                  >
                    <div>
                      <FaUserCheck size={16} color="green" />
                    </div>
                  </OverlayTrigger>
                </div>
              ) }
              
            </div>
          )}
        />
      </div>
    </ContentBodyContainer>
  );
};
