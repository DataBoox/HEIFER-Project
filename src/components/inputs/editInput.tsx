import React from 'react';
import { Input } from '@chakra-ui/react';

export const EditInput = ({ ...props }) => {
  return (
    <Input
      {...props}
      sx={{
        borderRadius: 0,
        background: "#FFF !important",
        border: 0,
        borderBottom: "1px solid #ddd",
        padding: "1rem",
        paddingTop: "2rem",
        outline: "none !important",
        boxShadow: "none",
        "&:focus": {
          boxShadow: "none",
          border: 0,
          borderBottom: "1px solid #ddd",
        },
        ...props.sx, // Allow overriding styles from the parent component
      }}
    />
  );
};
