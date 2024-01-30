import { Box, Flex } from "@chakra-ui/react";
import { MusicBar, NavigationBar, NavigationUtility } from "../../components";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box minHeight="100vh" width="100%" maxWidth="100vw" overflowX="hidden">
      <Flex width="100%">
        <NavigationBar />
        <Flex direction="column" width="100%">
          <NavigationUtility />
          <Box padding="5">{children}</Box>
        </Flex>
      </Flex>
      <MusicBar />
    </Box>
  );
};
