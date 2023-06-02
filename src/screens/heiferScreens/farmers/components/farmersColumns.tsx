import { FarmerInfo } from 'store/farmers';
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
          accessorFn: (row) => `${row.fname}`,
          Cell: ({ row }) => (
            <Link
              to={"/farmers/view/" + row.original.farmer_id}
              state={{ member: row.original }}
              className="text-decoration-underline"
            >
              {_.startCase(row.original.fname)}
            </Link>
          ),
        },
        {
          header: "Last Name",
          accessorFn: (row) => `${row.lname}`,
          Cell: ({ row }) => (
            <Link
              to={"/farmers/view/" + row.original.farmer_id}
              state={{ member: row.original }}
              className="text-decoration-underline"
            >
              {_.startCase(row.original.lname)}
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
          header: "Email Address",
          accessorFn: (row) => `${row.email_address}`,
        },
        {
          header: "Date Added",
          accessorFn: (row) =>
            `${moment(row.created_at).format("HH:mm a, DD MMM YYYY")}`,
        },
      ],
      []
    );
};