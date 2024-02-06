import { Carousel } from "../../components";
import { Flex, Box } from "@chakra-ui/react";
import { artistData } from "../../data/mock-data";

export const Home = () => {
  const forYouItems = artistData.map((artist) => ({
    id: artist.id,
    header: artist.name,
    subheader: artist.albums[0].name,
    description: "2021",
    image: artist.albums[0].image,
    imageAlt: artist.albums[0].name,
    width: 300,
  }));

  const recentlyPlayedItems = artistData.map((artist) => ({
    id: artist.id,
    header: artist.name,
    subheader: artist.albums[0].name,
    description: "2021",
    image: artist.albums[0].image,
    imageAlt: artist.albums[0].name,
    width: 250,
  }));

  return (
    <Box>
      <Flex
        justifyContent="start"
        alignItems="start"
        height="100%"
        width="100%"
        direction="column"
        gap={4}
        textAlign="start"
        wrap="nowrap"
      >
        <Carousel items={forYouItems} header="For You" width="100%" />
        <Carousel items={recentlyPlayedItems} header="Recently Played" width="100%" />
      </Flex>
    </Box>
  );
};
