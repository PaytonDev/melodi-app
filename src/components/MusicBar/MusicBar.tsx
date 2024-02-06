import { Text, IconButton, Flex, Box } from "@chakra-ui/react";
import {
  FavoriteBorder,
  VolumeUpOutlined,
  SpeakerGroupOutlined,
  MenuOutlined,
  KeyboardArrowUpOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import { MusicPlayer } from "..";
import { artistData } from "../../data/mock-data";

const mockSong = {
  title: artistData[0].albums[0].songs[0].title,
  artist: artistData[0].name,
  album: artistData[0].albums[0].name,
};

const NowPlaying = () => {
  return (
    <Box maxWidth="30%">
      <Flex direction="column" align="start">
        <Flex direction="row" align="center" gap={2}>
          <Text>{mockSong.title}</Text>
          <IconButton icon={<FavoriteBorder />} size="xs" aria-label="menu" background="none" />
          <IconButton icon={<MoreHorizOutlined />} aria-label="more" background="none" size="xs" />
        </Flex>
        <Flex direction="row" align="center" justify="start" gap={2}>
          <Text>{mockSong.artist}</Text>
        </Flex>
        <Flex direction="row" align="center" justify="start" gap={2}>
          <Text>{mockSong.album}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

const NowPlayingUtils = () => {
  return (
    <Box maxWidth="30%">
      <Flex direction="row" align="center" justify="space-between" gap={4} color="white">
        <IconButton
          icon={<VolumeUpOutlined />}
          aria-label="volume"
          background="none"
          color="white"
        />
        <IconButton
          icon={<SpeakerGroupOutlined />}
          aria-label="speaker"
          background="none"
          color="white"
        />
        <IconButton icon={<MenuOutlined />} aria-label="favorite" background="none" color="white" />
        <IconButton
          icon={<KeyboardArrowUpOutlined />}
          aria-label="speaker"
          background="gray.300"
          borderRadius="md"
          borderColor={"gray.400"}
        />
      </Flex>
    </Box>
  );
};

export const MusicBar = () => {
  return (
    <Box
      position="absolute"
      bottom={0}
      left={0}
      width="100%"
      height="100px"
      bg="gray.800"
      paddingX={4}
      zIndex={10}
    >
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        width="100%"
        height="100%"
        borderTopWidth="1px"
      >
        <NowPlaying />
        <MusicPlayer />
        <NowPlayingUtils />
      </Flex>
    </Box>
  );
};
