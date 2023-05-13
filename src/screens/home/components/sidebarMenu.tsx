import { Box, BoxProps, CloseButton, Flex, FlexProps, Icon, Link, Spacer, Stack, Text, Image } from '@chakra-ui/react';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { LinkItemProps } from '../interface';
import Heiferlogo from "./Heifer-logo1.png";


interface SelectedRoute { path: string, items: LinkItemProps[] };
interface SidebarMenuProps extends BoxProps {
    onClose: () => void;
    menuLinkItem: Array<LinkItemProps>;
}

const SidebarOverlay = ({ onClose }: { onClose: () => void }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      onClick={onClose}
    />
  );
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({
    onClose,
    menuLinkItem,
    ...rest
}: SidebarMenuProps) => {
    const [selected, setSelected] = useState<LinkItemProps>();

    return (
      <>
        <SidebarOverlay onClose={onClose} /> 
      <Box className="app-menu navbar-menu" {...rest}>
        <Box style={{ height: "100px" }}>
          <Image src={Heiferlogo} alt="Heifer" width="100%" maxHeight="100%" />
        </Box>
        <Box style={{ overflowY: "auto", height: "calc(100% - 80px)" }}>
          <Flex
            alignItems="center"
            mx={{ base: "6", md: "8" }}
            justifyContent="space-between"
          >
            <CloseButton
              color="#fff"
              display={{ base: "flex", md: "none"}}
              onClick={onClose}
            />
          </Flex>
          {menuLinkItem.map((link) => (
            <NavItem
              isView={Boolean(
                link.path === selected?.path &&
                  link.dropdown === selected?.dropdown
              )}
              key={link.name}
              icon={link.icon}
              dropdownItems={link.dropdown}
              path={link.path}
              onSelectNav={() => setSelected(link)}
              ml="2rem"
            >
              {link.name}
            </NavItem>
          ))}
        </Box>
        </Box>
      </>
    );
};

interface NavItemProps extends FlexProps {
    isView?: boolean;
    path?: string;
    icon: IconType;
    children: string | number;
    dropdownItems?: LinkItemProps[];
    onSelectNav?: () => void;
}

const NavItem = ({
    isView,
    icon,
    children,
    dropdownItems = [],
    path,
    onSelectNav = () => { },
    ...rest
}: NavItemProps) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [selPath, setSelPath] = useState<string>();

    useEffect(() => {
        // console.log(isView, show);
        // once changes occur on isView and is not defined update the status of show 
        let run = _.debounce(() => {
            if (isView && !show){
                setShow(false)
            }
        }, 500);
        run();
    }, [isView])

    const navAction = (path?: string, items?: any[]) => {
        setSelPath(path)
        if (items && items.length) {
            setShow(!show);
        } else {
            if (path) {
                navigate(path)
            }
        }

        onSelectNav();
    }

    return (
      <Stack style={{ cursor: "pointer" }} className="add-transition" mb={1}>
        <Link
          href={"#"}
          style={{ textDecoration: "none" }}
          _focus={{ boxShadow: "none" }}
          onClick={() => navAction(path, dropdownItems)}
          className="add-transition"
        >
          <Flex
            align="center"
            p="4"
            cursor="pointer"
            bg={isView ? "#F2FAFC" : "transparent"}
            color={isView ? "white" : "#7F8C9F"}
            _hover={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "16px",
              background: "#F2FAFC",
              color: "#2A4153",
              borderRight: "2px solid #2A4153",
            }}
            style={{ transition: "all 0.6s ease-out" }}
            {...rest}
          >
            <Flex align="center" className="add-transition">
              {icon && (
                <Icon
                  mr="4"
                  className="add-transition"
                  fontSize="16"
                  _groupHover={{ color: "#2A4153" }}
                  as={icon}
                />
              )}
              {children}
            </Flex>
            <Spacer />
            {dropdownItems && dropdownItems.length ? (
              <Icon
                fontSize="16"
                right="9%"
                position="absolute"
                className="add-transition"
                _groupHover={{ color: "#2A4153" }}
                as={show ? FiChevronDown : FiChevronRight}
              />
            ) : null}
          </Flex>
        </Link>

        {isView &&
          show &&
          dropdownItems.map((link, index) => (
            <Link
              className="add-transition"
              key={`${index}`}
              href={"#"}
              style={{
                textDecoration: "none",
                marginLeft: "1.2em",
              }}
              _focus={{ boxShadow: "none" }}
              onClick={() => navAction(link.path)}
              mb={1}
            >
              <Flex
                className="add-transition"
                style={{
                  transition: "all 0.6s ease-out",
                }}
                align="center"
                p="4"
                mx="4"
                role="group"
                cursor="pointer"
                fontSize="13"
                bg={
                  link.path && selPath === link.path ? "#F2FAFC" : "transparent"
                }
                color={link.path && selPath === link.path ? "navy" : "#2A4153"}
                _hover={{
                  bg: "#F2FAFC",
                  color: "#2A4153",
                  borderRight: "2px solid #2A4153",
                }}
              >
                {link.icon && (
                  <Icon
                    mr="4"
                    className="add-transition"
                    fontSize="16"
                    _groupHover={{
                      color: "#2A4153",
                    }}
                    as={link.icon}
                  />
                )}
                {link.name}
              </Flex>
            </Link>
          ))}
      </Stack>
    );
};
