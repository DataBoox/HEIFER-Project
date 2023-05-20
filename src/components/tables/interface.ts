import { MRT_ColumnDef, MRT_TableInstance, MaterialReactTableProps } from "material-react-table";

export interface BaseMaterialTableProps extends MaterialReactTableProps{
    data: any[];
    columns: MRT_ColumnDef<{}>[]
    rowTotal?: number;
    isLoading?: boolean;
    tableRef?: any,
    onRefetch?: () => {}
}