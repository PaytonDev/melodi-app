import {
  Box,
  Flex,
  Slider,
  IconButton,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Icon,
} from "@chakra-ui/react";
import {
  PlayArrowOutlined,
  ReplayOutlined,
  SkipPreviousOutlined,
  SkipNextOutlined,
  ShuffleOutlined,
  PauseOutlined,
} from "@mui/icons-material";
import { useState } from "react";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const PlayingIcon = isPlaying ? PauseOutlined : PlayArrowOutlined;

  const ShuffleIcon = () => <Icon as={ShuffleOutlined} boxSize="0.75em" />;
  const RepeatIcon = () => <Icon as={ReplayOutlined} boxSize="0.75em" />;
  const SkipPreviousIcon = () => <Icon as={SkipPreviousOutlined} boxSize="1.5em" />;
  const SkipNextIcon = () => <Icon as={SkipNextOutlined} boxSize="1.5em" />;
  const PlayIcon = () => <Icon as={PlayingIcon} boxSize="2em" />;

  return (
    <Box padding={3} borderRadius="lg">
      <Box>
        <Flex direction="row" gap={4} align="center">
          <IconButton
            icon={<ShuffleIcon />}
            aria-label="shuffle songs"
            background="none"
            color="white"
          />
          <IconButton
            icon={<SkipPreviousIcon />}
            aria-label="previous song"
            background="none"
            color="white"
          />
          <IconButton
            icon={<PlayIcon />}
            aria-label={`${isPlaying ? "pause" : "play"} song`}
            onClick={() => setIsPlaying(!isPlaying)}
            background="none"
            color="white"
          />
          <IconButton
            icon={<SkipNextIcon />}
            aria-label="skip song"
            background="none"
            color="white"
          />
          <IconButton
            icon={<RepeatIcon />}
            aria-label="replay song"
            background="none"
            color="white"
          />
        </Flex>
        <Slider aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </Box>
  );
};
