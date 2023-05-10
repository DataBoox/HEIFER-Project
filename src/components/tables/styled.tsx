import styled from '@emotion/styled';
import { Table } from "react-bootstrap";

export const BorderedTable = styled(Table)(`
    border: #ddd solid 1px;
    thead td, tbody td { padding: 12px; }
`)