import {
  Button,
  ButtonProps,
  ButtonGroup,
  ButtonGroupProps,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/react";
import { Dropdown, DropdownProps } from "react-bootstrap";
import { useWindowWidth } from "utilities";
import { ButtonTypeMap, ExtendButtonBase } from "@mui/material";

export type MaterialButtonProps = ExtendButtonBase<ButtonTypeMap<{}, "button">>;

export interface PrimaryButtonProps extends ButtonProps {
  value?: string;
}
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  value,
  children,
  ...rest
}) => {
  return (
    <Button
      isLoading={rest.isLoading}
      loadingText="Submitting"
      colorScheme="teal"
      {...rest}
    >
      {value}
      {children}
    </Button>
  );
};

interface ThemeGroupButtonProps extends ButtonGroupProps {
  to: string;
  name?: string;
  icon: IconType | undefined;
  bgColor?: string;
}

export const ThemeGroupButton: React.FC<ThemeGroupButtonProps> = ({
  to,
  name,
  icon,
  bgColor = "btn-success",
  ...rest
}) => {
  return (
    <ButtonGroup {...rest}>
      <a href={to} className={`btn btn-sm rounded-0 ${bgColor}`} title={name}>
        <Icon as={icon} color="#fff" />
        {useWindowWidth() >= 768 ? (
          <span className="hidden-xs text-white">&nbsp;&nbsp;{name}</span>
        ) : (
          <></>
        )}
      </a>
    </ButtonGroup>
  );
};

interface DropdownItemsProps {
  name: string;
  to: string;
}
interface ActionDropdownButtonProps extends DropdownProps {
  name: string;
  bgColor?: string;
  dropdownItems: Array<DropdownItemsProps>;
}

export const ActionDropdownButton: React.FC<ActionDropdownButtonProps> = ({
  name,
  bgColor = "secondary",
  dropdownItems,
  ...rest
}) => {
  return (
    <Dropdown {...rest}>
      <Dropdown.Toggle
        variant={bgColor}
        className=" rounded-0"
        id="dropdown-basic"
      >
        {useWindowWidth() >= 768 ? name : ""}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {dropdownItems.map((item) => (
          <Dropdown.Item href={item.to}>{item.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
