// import { Devotional, DevotionalProps} from "./components/devotionalComponent";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaEye, FaPen, FaSearch, FaTrash } from "react-icons/fa";
import { useToast, } from "@chakra-ui/react";
import { PrimaryInput, ThemeTable } from "components";
import { useNavigate } from "react-router-dom";
import { ContentBodyContainer, DashboardCardContainer } from "../../home";
import { useFormik } from "formik";
import { AddUserScheme } from "validations";
import { AddUserDialog } from "./addUser";
import { useAddUserMutation, useGetUsersQuery } from "store/user";
import { useAllUsersColumn } from "./components";



export const UserScreen = () => {
  const navigate = useNavigate();
  const columns = useAllUsersColumn()
  const { data, isLoading, refetch } = useGetUsersQuery({ page: 1, query: '' });
  const toast = useToast({ position: "top-right" });

  console.log(data)

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
        <DashboardCardContainer
          cardHeaderTitle={"Participant Details"}
          title={""}
          bodyClassName={""}
        >
          <ThemeTable
            data={data?.data?.data ?? []}
            columns={columns as any}
            isLoading={isLoading}
            onRefetch={refetch}
            enableRowActions
            positionActionsColumn="last"
            renderRowActions={({ row }) => (
              <div className="d-flex justify-content-evenly">
                <div className="touchable">
                  <FaEye size={16} color="#7F8C9F" />
                </div>
                <div className="touchable">
                  <FaPen size={16} color="#7F8C9F" />
                </div>
                <div className="touchable">
                  <FaTrash size={16} color="red" />
                </div>
              </div>
            )}
          />
        </DashboardCardContainer>
      </div>
    </ContentBodyContainer>
  );
};
