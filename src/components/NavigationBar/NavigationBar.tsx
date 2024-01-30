import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { top_level_nav, my_collection_nav, playlists } from "./data";
import s from "./navigation-bar.module.css";

export const NavigationBar = () => {
  return (
    <Box height="calc(100vh - 100px)" bg="gray.200" minWidth="200px" overflow="auto">
      <Flex
        height="100%"
        direction="column"
        align="start"
        justify="start"
        paddingX={2}
        paddingY={4}
      >
        <Flex direction="column" align="start">
          <Text fontSize="xl" fontWeight="bold">
            Melodii
          </Text>
          <Text fontSize="sm">Your music, your way</Text>
        </Flex>
        <Flex direction="column" justify="stretch" marginTop={8} width="100%">
          {top_level_nav.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              marginTop={2}
              height="2.5rem"
              className={s["menu-item"]}
            >
              <Flex direction="row" justify="start" width="100%">
                <Text> {item.name}</Text>
              </Flex>
            </Button>
          ))}
        </Flex>
        <Flex direction="column" justify="stretch" marginTop={8} width="100%">
          <Text fontSize="sm" fontWeight="bold" paddingX={2}>
            My Collection
          </Text>
          {my_collection_nav.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              marginTop={1}
              height="2.5rem"
              className={s["menu-item"]}
              leftIcon={item.icon}
              paddingX={2}
            >
              <Flex direction="row" justify="start" width="100%">
                <Text> {item.name}</Text>
              </Flex>
            </Button>
          ))}
        </Flex>
        <Flex direction="column" justify="stretch" marginTop={8} width="100%">
          <Text fontSize="sm" fontWeight="bold" paddingX={2}>
            Playlists
          </Text>
          {playlists.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              marginTop={1}
              height="2.5rem"
              className={s["menu-item"]}
              paddingX={2}
            >
              <Flex direction="row" justify="start" width="100%">
                <Text> {item.name}</Text>
              </Flex>
            </Button>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
