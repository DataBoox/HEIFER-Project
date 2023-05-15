import { MRT_TableInstance } from "material-react-table";

export interface BaseMaterialTableProps {
    data?: any[];
    rowTotal?: number;
    isLoading?: boolean;
    tableRef?: any,
    onRefetch?: () => {}
}