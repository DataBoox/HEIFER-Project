import { MRT_ColumnDef } from 'material-react-table';
import { useMemo } from 'react';

export const useDefaultColumn = () => {
    return useMemo<MRT_ColumnDef<{}>[]>(() => [
        {
            header: 'Name',
            accessorFn: (row) => `Test column data`,
        },
    ], []);
};