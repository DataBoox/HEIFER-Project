import { ReportInfo, Report } from 'store/reports';
import _ from 'lodash';
import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const useAllReportsColumn = () => {
    return useMemo<MRT_ColumnDef<ReportInfo>[]>(
      () => [
        {
          header: "Farmers' Target",
          accessorFn: (row) => `${row.shf_target}`,
          Cell: ({ row }) => (
            <Link
              to={"/records/view/" + (row.original as unknown as Report).id}
              state={{ member: row.original }}
              className="text-decoration-underline"
            >
              {row.original.shf_target}
            </Link>
          ),
        },
        {
          header: "Farmers' Achievement",
          accessorFn: (row) => `${row.shf_achievement}`,
        },
        {
          header: "Groups' Target",
          accessorFn: (row) => `${row.shg_target}`,
        },
        {
          header: "Groups' Achievement",
          accessorFn: (row) => `${row.shg_achievement}`,
        },
        {
          header: "Outcomes",
          accessorFn: (row) => `${row.outcomes}`,
        },
        {
          header: "Male Farmers Trained",
          accessorFn: (row) => `${row.no_male_farmers}`,
        },
        {
          header: "Female Farmers Trained",
          accessorFn: (row) => `${row.no_female_farmers}`,
        },
        {
          header: "Date Added",
          accessorFn: (row) => `${moment(row.date_uploaded)}`,
        },
      ],
      []
    );
};