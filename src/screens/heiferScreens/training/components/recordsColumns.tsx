import { ShgInfo, Shg } from 'store/shg';
import _ from 'lodash';
import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const useAllShgsColumn = () => {
    return useMemo<MRT_ColumnDef<ShgInfo>[]>(
      () => [
        {
          header: "Record Name",
          accessorFn: (row) => `${row.entity_name}`,
          Cell: ({ row }) => (
            <Link
              to={"/records/view/" + (row.original as unknown as Shg).id}
              state={{ member: row.original }}
              className="text-decoration-underline"
            >
              {_.startCase(row.original.entity_name)}
            </Link>
          ),
        },
        {
          header: "Business Plan (Yes/No)",
          accessorFn: (row) => `${row.business_plan}`,
        },
        {
          header: "Financial Services ( Yes / No )",
          accessorFn: (row) => `${row.financial}`,
        },
        {
          header: "Service Provider",
          accessorFn: (row) => `${row.service_provider}`,
        },
        {
          header: "Total Sales",
          accessorFn: (row) => `${row.value}`,
        },
        {
          header: "Date Added",
          Cell: ({ row }) => {
            const dateAdded = moment().subtract(row.index, 'days');
            return `${dateAdded.format("YYYY-MM-DD")}`;
          },
        },
      ],
      []
    );
};