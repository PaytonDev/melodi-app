import { Text, Flex, Menu, MenuButton, MenuList, MenuItem, Box } from "@chakra-ui/react";
import { LoginField } from "../../components/LoginField/LoginField";

export const Login = () => {
  return (
    <Flex direction="column" align="center" justify="center" h="100vh">
      <Box position="absolute" top="0" width="100%" py={4} px={8}>
        <Flex direction="row" justify="space-between" width="100%" height="100%">
          <Text fontSize="2xl" fontWeight="bold">
            Melodii
          </Text>
          <Menu>
            <MenuButton as={Text} fontSize="xl" fontWeight="bold">
              Menu
            </MenuButton>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
      <LoginField />
    </Flex>
  );
};
