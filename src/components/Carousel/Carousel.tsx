import { Flex, Box, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { MusicCard } from "..";
import { artistData } from "../../data/mock-data";

export const Carousel = () => {
  const songs = artistData[0].albums[0].songs;

  return (
    <Box>
      <Flex direction="row" justify="space-between" width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Latest Releases
        </Text>
        <Flex>
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeft />}
            variant="ghost"
            colorScheme="blackAlpha"
            size="lg"
          />
          <IconButton
            aria-label="Next"
            icon={<ChevronRight />}
            variant="ghost"
            colorScheme="blackAlpha"
            size="lg"
          />
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        overflowX="scroll"
        overflowY="hidden"
        gap="3"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {songs.map((song) => (
          <MusicCard key={song.id} />
        ))}
      </Flex>
    </Box>
  );
};
