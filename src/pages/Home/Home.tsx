import { MusicCard } from "../../components";
import { Flex, Text } from "@chakra-ui/react";
import { artistData } from "../../data/mock-data";

export const Home = () => {
  return (
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
        {artistData.map((artist) => (
          <MusicCard
            header={artist.name}
            subheader={artist.albums[0].name}
            description="2021"
            image={artist.albums[0].image}
            imageAlt={artist.albums[0].name}
            width="300px"
          />
        ))}
      </Flex>
    </Flex>
  );
};
