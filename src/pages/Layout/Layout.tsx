import { Box, Flex } from "@chakra-ui/react";
import { MusicBar, NavigationBar, NavigationUtility } from "../../components";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <Box minHeight="100vh" width="100%" maxWidth="100vw" overflowX="hidden">
      <Flex width="100%">
        <NavigationBar />
        <Flex direction="column" width="100%">
          <NavigationUtility />
          <Box padding="5">
            <Outlet />
          </Box>
        </Flex>
      </Flex>
      <MusicBar />
    </Box>
  );
};
