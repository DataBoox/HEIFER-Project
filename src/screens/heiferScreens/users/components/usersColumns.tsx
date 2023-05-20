import { UserInfo } from 'store/user';
import _ from 'lodash';
import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const useAllUsersColumn = () => {
    return useMemo<MRT_ColumnDef<UserInfo>[]>(() => [
        {
            header: 'Full Name',
            accessorFn: (row) => `${row.fname} ${row.lname}`,
            Cell: ({ row }) => (
                <Link
                    to={'/users/view/' + row.original.id}
                    state={{ member: row.original }}
                    className="fw-bold text-decoration-underline"
                >
                    {_.startCase(`${row.original.fname} ${row.original.lname}`)}
                </Link>
            )
        },
        {
            accessorKey: 'user.email',
            header: 'Email  Address.',
        },
        {
            accessorKey: 'gender',
            header: 'Gender',
        },
        {
            header: "Date Added",
            accessorFn: (row) => `${moment(row.created_at).format('HH:mm a, DD MMM YYYY')}`,
        },
    ], []);
};