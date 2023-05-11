import React from "react";
import { Card, Col, ColProps, FormControl, InputGroup, ButtonGroup } from "react-bootstrap"
import { FaSearch, FaPlus, FaDownload, FaUpload } from "react-icons/fa";
import { SearchButton } from "./styled";
import { ThemeGroupButton, ActionDropdownButton } from "components";
import { IconType } from 'react-icons';

interface CustomButtonProps {
    to?: string;
    name?: string;
    bgColor?: string;
    icon?: IconType;
};

interface Properties {
    searchBar?: boolean;
    addButton?: string;
    exportButton?: string;
    importButton?: string;
    customButton?: CustomButtonProps;
    colProps?: ColProps;
    children?: React.ReactNode;
};

export const TableContainer: React.FC<Properties> = ({
    searchBar = false,
    addButton = "add",
    exportButton = "export",
    importButton = "import",
    customButton = {},
    colProps,
    children
}) => {
    const actionDropdownItems = [
        { name: "Delete selected", to: "/" },
        { name: "Archive selected", to: "/" }
    ]

    return (
        <Col className="pb-4" {...colProps}>
            <Card style={{ borderRadius: 3 }}>
                <Card.Header className="border-bottom bg-white py-4">
                    <div className="float-start">
                        <ActionDropdownButton 
                            name="Batch Action" 
                            className="d-inline-flex me-3" 
                            dropdownItems={actionDropdownItems}
                        >{""}</ActionDropdownButton>

                        {searchBar ? (
                            <form action="/" className="d-inline-block">
                                <InputGroup style={{ width: "200px" }}>
                                    <FormControl className="rounded-0" type="text" name="search" placeholder="Search..." />
                                    <div className="input-group-btn d-inline-block bg-secondary">
                                        <SearchButton type="submit" className="p-3"><FaSearch color="#fff" /></SearchButton>
                                    </div>
                                </InputGroup>
                            </form>
                        ) : (<></>)}
                    </div>
                    <div className="float-end pt-1">
                        <ButtonGroup>
                            {addButton.length > 0 ? (
                                <ThemeGroupButton name="Add" to={addButton} icon={FaPlus} />
                            ) : (<></>)}
                            {exportButton.length > 0 ? (
                                <ThemeGroupButton name="Export" to={exportButton} icon={FaDownload} bgColor="bg-info" />
                            ) : (<></>)}
                            {importButton.length > 0 ? (
                                <ThemeGroupButton name="Import" to={importButton} icon={FaUpload} bgColor="bg-secondary"/>
                            ) : (<></>)}
                            {customButton.to ? (
                                <ThemeGroupButton 
                                    name={customButton.name} 
                                    to={customButton.to} 
                                    icon={customButton.icon} 
                                    bgColor={customButton.bgColor} 
                                />
                            ) : (<></>)}

                        </ButtonGroup>
                    </div>
                </Card.Header>
                <Card.Body className="p-3">
                    {children}
                </Card.Body>
            </Card>
        </Col>
    )
}