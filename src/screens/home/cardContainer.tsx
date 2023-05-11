import React from "react";
import { Card, Col, ColProps } from "react-bootstrap"
import { Divider } from 'components/styled';

interface Properties extends ColProps{
    title?: string;
    divder?: boolean;
    children?: React.ReactNode;
};

export const CardContainer: React.FC<Properties> = ({
    title,
    divder,
    children,
    ...rest
}) => {
    return (
        <Col className="pb-4" {...rest}>
            <Card>
                <Card.Header>
                    <Card.Title >{title}</Card.Title>
                </Card.Header>
                { divder ?? <Divider/> }
                <Card.Body>{children}</Card.Body>
            </Card>
        </Col>
    )
}