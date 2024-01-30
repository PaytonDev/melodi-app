import { Layout } from "../Layout/Layout";
import { MusicCard } from "../../components";
import { Flex, Text } from "@chakra-ui/react";

export const Home = () => {
  return (
    <Layout>
      <Flex
        justifyContent="start"
        alignItems="start"
        height="100%"
        width="100%"
        direction="column"
        gap="4"
        textAlign="start"
        wrap="nowrap"
      >
        <Text fontSize="lg" fontWeight="bold">
          For You
        </Text>
        <Flex gap="3">
          <MusicCard />
          <MusicCard />
          <MusicCard />
        </Flex>
      </Flex>
    </Layout>
  );
};
