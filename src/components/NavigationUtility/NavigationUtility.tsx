import { Flex, IconButton, InputGroup, InputLeftElement, Input, Icon } from "@chakra-ui/react";
import {
  ChevronLeft,
  ChevronRight,
  SearchOutlined,
  NotificationsNoneOutlined,
} from "@mui/icons-material";

export const NavigationUtility = () => {
  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      width="100%"
      paddingX={4}
      paddingY={2}
      borderBottomWidth="1px"
    >
      <Flex direction="row" align="center" justify="start" gap={2}>
        <IconButton
          icon={<ChevronLeft />}
          aria-label="previous page"
          background="gray.300"
          borderRadius="50%"
          border="1px"
          borderColor={"gray.400"}
        />
        <IconButton
          icon={<ChevronRight />}
          aria-label="next page"
          background="gray.300"
          border="1px"
          borderColor={"gray.400"}
          borderRadius="50%"
        />
      </Flex>
      <Flex direction="row" align="center" justify="start" gap={4}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchOutlined} aria-label="search" />
          </InputLeftElement>
          <Input type="text" placeholder="Search" border="1px" borderColor={"gray.400"} />
        </InputGroup>
        <IconButton
          icon={<NotificationsNoneOutlined />}
          aria-label="notifications"
          background="gray.300"
          border="1px"
          borderColor={"gray.400"}
          borderRadius="50%"
        />
      </Flex>
    </Flex>
  );
};
