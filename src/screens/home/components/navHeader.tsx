import {
    Avatar,
    Box,
    Flex,
    FlexProps,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    Image,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import { useAuth } from "store/auth";
import React, { useState } from "react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import { FaBell} from "react-icons/fa";
import { LogoutAlertDialog } from "../../../components";
import { formatName } from '../../../utilities/formatting';
import { useNavigate } from "react-router-dom";
import { useProject } from "store/projects";

const SidebarOverlay = ({  onToggleSideBar }: {  onToggleSideBar: () => void }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      onClick={ onToggleSideBar}
    />
  );
};
interface NavHeaderProps extends FlexProps {
    onOpen: () => void;
    onToggleSideBar: () => void;
}
export const NavHeader: React.FC<NavHeaderProps> = ({
    onOpen,
    onToggleSideBar, 
    ...rest
}) => {
    const { user } = useAuth()
    const [show, setShow] = useState({ logout: false });
    const navigate = useNavigate();
    const projectName: number = useProject().project?.name;

    
  return (
    <>
      <SidebarOverlay onToggleSideBar={onToggleSideBar} />
      <div id="page-topbar" className="topbar-shadow">
        <div id="layout-wrapper">
          <div
            className="navbar-header"
            style={{
              color: "#1E1E1E",
              backgroundColor: "#F4F5F6",
              border: "1px solid #D4D9DD",
            }}
          >
            <div className="d-flex">
              <button
                type="button"
                onClick={onToggleSideBar}
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                id="topnav-hamburger-icon"
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
            <Text
              display={{ base: "none", md: "flex" }}
              fontSize="2xl"
              fontWeight="600"
              flexGrow={1}
              className="m-3"
              ml={{ base: "-1.5rem", sm: "-2rem", md: "1rem" }}
            >
              Naija Unlock Signature Program { projectName }
            </Text>
            <Text
              display={{ base: "flex", md: "none" }}
              fontSize="xl"
              fontWeight="bold"
              className="mt-3"
            >
              Naija Unclock
            </Text>

            <HStack spacing={{ base: "0", md: "6" }}>
              <IconButton
                size="lg"
                variant="ghost"
                aria-label="open menu"
                icon={<FaBell className="svg-dark" />}
              />
              <Flex alignItems={"center"}>
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                  >
                    <HStack>
                    <Box
        width="30px"
        height="30px"
        borderRadius="50%"
        bg="gray.200"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize="md"
        fontWeight="bold"
      >
        {user?.user_info.fname ? user.user_info.fname.charAt(0).toUpperCase() : ''}
      </Box>
                      <VStack
                        display={{ base: "none", md: "flex" }}
                        alignItems="flex-start"
                        spacing="2px"
                        ml="2"
                      >
                        <Text
                          fontSize="md"
                          textTransform={"capitalize"}
                          className="mt-3"
                        >
                          { user?.user_info.fname }
                        </Text>
                      </VStack>
                      <Box display={{ base: "none", md: "flex" }}>
                        {" "}
                        <FiChevronDown className="svg-dark"/>{" "}
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList
                    bg={useColorModeValue("white", "gray.900")}
                    borderColor={useColorModeValue("gray.200", "gray.700")}
                  >
                    <MenuItem
                      onClick={() => navigate("/profile/view")}
                    >
                      Profile
                    </MenuItem>
                    {/* <MenuItem>Settings</MenuItem>
                    <MenuItem>Billing</MenuItem> */}
                    <MenuDivider />
                    <MenuItem
                      onClick={() =>
                        setShow((prev) => ({ ...prev, logout: true }))
                      }
                    >
                      Sign out
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>
          </div>

          <LogoutAlertDialog
            isOpen={show.logout}
            onClose={() => setShow((prev) => ({ ...prev, logout: false }))}
          />
        </div>
      </div>
    </>
  );
};
