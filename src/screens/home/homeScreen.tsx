import { Box, Drawer, DrawerContent, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { useWindowWidth } from 'utilities';
import { PrimaryLoader } from 'components';
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from 'store/auth/hooks';
import { AdminMenuLinkItem, NavHeader, SidebarMenu as DashboardSidebarMenu } from './components';


export const HomeScreen = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  const windowWidth = useWindowWidth()
  let sidebarMenu = AdminMenuLinkItem;

  useEffect(() => {
    let redirectTo: string | null = null;
    setTimeout(() => {
      // if (user && !user?.email_verification) redirectTo = "/verify/email";
      if (!user) redirectTo = "/login";
      if (redirectTo) navigate(redirectTo)
      setIsLoading(false);
    }, 2000)
  });

  return (
    <Box minH="100vh" bg={"#F4F5F6"}>
      <NavHeader
        onOpen={onOpen}
        onToggleSideBar={() => (isOpen ? onClose() : onOpen())}
      />

      {/* sidebar */}
      {Boolean(windowWidth > 768) ? (
        <DashboardSidebarMenu
          onClose={onClose}
          menuLinkItem={sidebarMenu}
          display={{ base: "none", md: "block" }}
        />
      ) : (
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent backgroundColor={"rgba(0, 0, 0, 0.4)"}>
            <DashboardSidebarMenu
              onClose={onClose}
              menuLinkItem={sidebarMenu}
            />
          </DrawerContent>
        </Drawer>
      )}

      <div
        className={`main-content ${Boolean(windowWidth > 768) ? "hasSidebar" : ""
          }`}
      >
        {isLoading ? <PrimaryLoader height={"90vh"} /> : <Outlet />}
      </div>

      <footer className="footer"
        style={{
          color: "#1E1E1E",
          backgroundColor: "#F4F5F6",
          border: "1px solid #D4D9DD",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <script>document.write(new Date().getFullYear())</script>2023 ©
              Heifer
            </div>
          </div>
        </div>
      </footer>
    </Box>
  );
}