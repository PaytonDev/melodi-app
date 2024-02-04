import { Flex, Box, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { MusicCard } from "..";
import s from "./carousel.module.css";

type Item = {
  id: string;
  header: string;
  subheader: string;
  description: string;
  image: string;
  imageSize: number;
  imageAlt: string;
  width?: number;
};

type CarouselProps = {
  header: string;
  items: Item[];
  width?: string;
};

export const Carousel = ({ items, width = "100%", header }: CarouselProps) => {
  const carouselShift = items[0].width ? items[0].width : 320;

  const shiftCarousel = (direction: string) => {
    const carousel = document.getElementById("carousel");
    if (carousel) {
      carousel.style.scrollBehavior = "smooth";
      if (direction === "left") {
        carousel.scrollLeft -= carouselShift;
      } else {
        carousel.scrollLeft += carouselShift;
      }
    }
  };

  return (
    <Box width={width} maxWidth="100vw">
      <Flex direction="row" justify="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          {header}
        </Text>
        <Flex>
          <IconButton
            aria-label="Previous"
            icon={<ChevronLeft />}
            variant="ghost"
            colorScheme="blackAlpha"
            size="lg"
            onClick={() => shiftCarousel("left")}
          />
          <IconButton
            aria-label="Next"
            icon={<ChevronRight />}
            variant="ghost"
            colorScheme="blackAlpha"
            size="lg"
            onClick={() => shiftCarousel("right")}
          />
        </Flex>
      </Flex>
      <Flex
        w="100%"
        h="100%"
        overflowX="scroll"
        overflowY="hidden"
        gap="3"
        id="carousel"
        sx={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {items.map((item: Item) => (
          <>
            <MusicCard
              key={item.id}
              header={item.header}
              subheader={item.subheader}
              description="2021"
              imageSize={`${item.imageSize} px`}
              image={item.image}
              imageAlt={item.subheader}
              className={s.slide}
              width={item.width ? `${item.width}px` : undefined}
            />
          </>
        ))}
      </Flex>
    </Box>
  );
};
