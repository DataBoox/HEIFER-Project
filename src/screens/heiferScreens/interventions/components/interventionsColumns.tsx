import { Intervention } from 'store/intervention';
import _ from 'lodash';
import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const useAllInterventionsColumn = () => {
    return useMemo<MRT_ColumnDef<Intervention>[]>(
      () => [
        {
          header: "Name",
          accessorFn: (row) => `${row.name}`,
          Cell: ({ row }) => (
            <Link
              to={"/interventions/view/" + (row.original as Intervention).id}
              state={{ member: row.original }}
              className="text-decoration-underline"
            >
              {_.startCase(row.original.name)}
            </Link>
          ),
        },

        {
          header: "Description",
          accessorFn: (row) => `${row.description}`,
        },
        // {
        //   header: "Project ID",
        //   accessorFn: (row) => `${row.project_id}`,
        // },
        
        {
          header: "Date Created",
          accessorFn: (row) => `${row.created_at}`,
        },
      ],
      []
    );
};