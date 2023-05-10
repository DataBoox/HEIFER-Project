import styled from '@emotion/styled';
import { Table } from "react-bootstrap";

export const CheckBox = styled.input(`
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border: none;
    border-radius: none;
    cursor: pointer;
`)

export const BorderedTable = styled(Table)(`
    border: #ddd solid 1px;
    thead td, tbody td { padding: 12px; }
`)

export const Divider = styled.div`
  border: 0.5px solid #b9b9b9;
  margin: 20px 0;
`;