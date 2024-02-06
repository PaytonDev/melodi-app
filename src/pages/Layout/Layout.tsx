import { Box, Flex } from "@chakra-ui/react";
import { MusicBar, NavigationBar, NavigationUtility } from "../../components";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <Box minHeight="100vh" width="100%" maxWidth="100vw">
      <Flex width="100%">
        <NavigationBar />
        <Flex direction="column" width="100%">
          <NavigationUtility />
          <Box
            padding="5"
            overflowY="auto"
            maxWidth="calc(100vw - 225px)"
            maxHeight="calc(100vh - 157px)"
          >
            <Outlet />
          </Box>
        </Flex>
      </Flex>
      <MusicBar />
    </Box>
  );
};
