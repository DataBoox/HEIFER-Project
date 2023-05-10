import { Heading } from "@chakra-ui/react"
import React from 'react';

export type AuthHeaderTextProps = {
    title?: string,
    subTitle?: string
}
export const AuthHeaderText: React.FC<AuthHeaderTextProps> = ({
    title,
    subTitle
}) => {
    return (
        <div>
            <Heading as='h5' size='md' color="MenuText">{title}</Heading>
            <p className="text-muted">{subTitle}</p>
        </div>
    )
}