import { Card, CardBody, Stack, Image, Text } from "@chakra-ui/react";
import { artistData } from "../../data/mock-data";

export const MusicCard = () => {
  const { name, albums } = artistData[0];
  return (
    <Card bg="gray.200" boxShadow="md" minWidth="275px">
      <CardBody>
        <Image
          src={"https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png"}
          alt={albums[0].name}
          width="250px"
          height="250px"
          borderRadius="md"
        />
        <Stack direction="column" spacing={1} mt="4">
          <Text fontWeight="bold">{name}</Text>
          <Text fontWeight="medium">{albums[0].name}</Text>
          <Text fontSize="xs" fontWeight="light">
            2021
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
