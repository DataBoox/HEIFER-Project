import { InterventionInfo } from 'store/intervention';
import _ from 'lodash';
import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const useAllInterventionsColumn = () => {
    return useMemo<MRT_ColumnDef<InterventionInfo>[]>(
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
        
        {
          header: "Created by",
          accessorFn: (row) =>
            `${moment(row.created_by).format("HH:mm a, DD MMM YYYY")}`,
        },
      ],
      []
    );
};