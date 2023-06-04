import { GroupInfo } from 'store/group';
import _ from 'lodash';
import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const useAllGroupsColumn = () => {
    return useMemo<MRT_ColumnDef<GroupInfo>[]>(
      () => [
        {
          header: "Group Name",
          accessorFn: (row) => `${row.name}`,
          Cell: ({ row }) => (
            <Link
              to={"/groups/view/" + row.original.group_id}
              state={{ member: row.original }}
              className="text-decoration-underline"
            >
              {_.startCase(row.original.name)}
            </Link>
          ),
        },
        {
          header: "Venue",
          accessorFn: (row) => `${row.community}`,
        },
        {
          header: "Farmers",
          accessorFn: (row) => `${row.farmers}`,
          Cell: ({ row }) => (
            <Link
              to={"/farmers/view/" + row.original.farmer_id}
              state={{ member: row.original }}
              className="text-decoration-underline"
            >
              {_.startCase(row.original.farmers)}
            </Link>
          ),
        },
        {
          header: "Interventions",
          accessorFn: (row) => `${row.interventions}`,
        },

        {
          header: "Date Added",
          accessorFn: (row) =>
            `${moment(row.established_at).format("HH:mm a, DD MMM YYYY")}`,
        },
      ],
      []
    );
};