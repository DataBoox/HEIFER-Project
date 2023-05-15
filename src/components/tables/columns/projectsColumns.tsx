import _ from "lodash";
import { MRT_ColumnDef } from "material-react-table";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Project } from "store/projects";
import { TableActionButtons } from "../components/actionButtons";



export const useAllProjectsColumn = () => {
    
  return useMemo<MRT_ColumnDef<Project>[]>(
    () => [
      {
        header: "Full Name",
        accessorFn: (row) => `${row.fname} ${row.lname}`,
        Cell: ({ row }) => (
          <Link
            to={"/church/projects/view/" + row.original.id}
            state={{ project: row.original }}
            className="fw-bold text-decoration-underline"
          >
            {_.startCase(`${row.original.fname} ${row.original.lname}`)}
          </Link>
        ),
      },
     
      // {
      //   header: "Family projects",
      //   accessorFn: (row) => {
      //     const familyCount = row.family.length ?? 0;

      //     return (
      //       <div className="d-flex align-items-center">
      //         <div
      //           className={`badge bg-${
      //             row.family_status ?? "primary"
      //           } align-self-center text-capitalize`}
      //           title={`Family Role: ${row.family_role}`}
      //         >
      //           {row.family_role ?? "default"}
      //         </div>
      //         {row?.family_status && (
      //           <div
      //             className="fw-bold ms-2 align-self-center badge bg-dark"
      //             title={`Family Count: ${familyCount}`}
      //           >
      //             {familyCount}
      //           </div>
      //         )}
      //       </div>
      //     );
      //   },
      // },
      // {
      //   accessorKey: "marital_status",
      //   header: "Marital Status",
      //   Cell: ({ row }) => {
      //     let badge =
      //       row.original.marital_status === "single"
      //         ? "btn-danger"
      //         : "btn-success";
      //     badge =
      //       row.original.marital_status && row.original.marital_status.length
      //         ? badge
      //         : "bg-dark";

      //     return (
      //       <h5>
      //         <span className={"badge " + badge + " text-capitalize"}>
      //           {row.original.marital_status ?? "Unknown"}
      //         </span>
      //       </h5>
      //     );
      //   },
      // },
      {
        header: "Actions",
        Cell: ({ row }) => {
          return <TableActionButtons table={""} />;
        },
      },
    ],
    []
  );
};
