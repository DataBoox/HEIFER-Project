import { History } from 'store/interventionHistory';
import _ from 'lodash';
import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const useAllHistorysColumn = () => {
    return useMemo<MRT_ColumnDef<History>[]>(
      () => [
        {
          header: "Name",
          accessorFn: (row) => `${row.name}`,
          Cell: ({ row }) => (
            <Link
              to={"/interventions/view/" + row.original.intervention_id}
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
          header: "Date Assigned",
          accessorFn: (row) =>
            `${moment(row.created_at).format("HH:mm a, DD MMM YYYY")}`,
        },
      ],
      []
    );
};