import { Card, CardBody, Stack, Image, Text } from "@chakra-ui/react";

type MusicCardProps = {
  header: string;
  subheader: string;
  description?: string;
  image: string;
  imageSize: string;
  imageAlt: string;
  className?: string;
  width?: string;
};

export const MusicCard = ({
  header,
  subheader,
  description,
  image,
  imageSize,
  width = "300px",
  imageAlt,
  className,
}: MusicCardProps) => {
  return (
    <Card bg="gray.200" boxShadow="md" minWidth={width} className={className}>
      <CardBody>
        <Image src={image} alt={imageAlt} width={imageSize} height={imageSize} borderRadius="md" />
        <Stack direction="column" spacing={1} mt="4">
          <Text fontWeight="bold">{header}</Text>
          <Text fontWeight="medium">{subheader}</Text>
          <Text fontSize="xs" fontWeight="light">
            {description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};
