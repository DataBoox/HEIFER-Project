import React from "react";
import { BorderedTable } from "./styled";
import { CheckBox } from "../styled";

interface Properties {
    header: Array<string>;
    children?: React.ReactNode;
    footer?: React.ReactNode;
};

export const ThemeTable: React.FC<Properties> = ({
    header,
    children,
    footer
}) => {
    return (
        <div className="table-responsive">
            <BorderedTable className="table-hover" cellSpacing={5}>
                <thead>
                    <tr>
                        <td><CheckBox type="checkbox" /></td>
                        {header.map((header) => (<td>{header.toUpperCase()}</td>))}
                    </tr>
                </thead>
                <tbody>{children}</tbody>
                {footer}
            </BorderedTable>
        </div>
    )
}