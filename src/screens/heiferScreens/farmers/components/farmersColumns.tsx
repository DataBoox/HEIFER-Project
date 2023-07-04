import { FarmerInfo, Farmer } from 'store/farmers';
import _ from 'lodash';
import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const useAllFarmersColumn = () => {
    return useMemo<MRT_ColumnDef<FarmerInfo>[]>(
      () => [
        {
          header: "First Name",
          accessorFn: (row) => `${row.first_name}`,
          Cell: ({ row }) => (
            <Link
              to={"/farmers/view/" + (row.original as Farmer).id}
              state={{ member: row.original }}
              className="text-decoration-underline"
            >
              {_.startCase(row.original.first_name)}
            </Link>
          ),
        },
        {
          header: "Last Name",
          accessorFn: (row) => `${row.last_name}`,
          Cell: ({ row }) => (
            <Link
              to={"/farmers/view/" + (row.original as Farmer).id}
              state={{ member: row.original }}
              className="text-decoration-underline"
            >
              {_.startCase(row.original.last_name)}
            </Link>
          ),
        },
        {
          header: "Gender",
          accessorFn: (row) => `${row.farmer_gender}`,
        },
        {
          header: "Address",
          accessorFn: (row) => `${row.farmer_address}`,
        },
        {
          header: "Phone Number",
          accessorFn: (row) => `${row.farmer_phone}`,
        },
        {
          header: "Date Added",
          accessorFn: (row) => `${moment(row.created_at)}`,
        },
      ],
      []
    );
};