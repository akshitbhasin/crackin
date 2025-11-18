import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  HStack,
  Image,
  Tag,
  Wrap
} from "@chakra-ui/react";
import { getTokens } from "../theme/tokens";
import flavours from "../data/flavours.json";
import StoreChip from "./StoreChip"

const heroFlavour = flavours.find((f) => f.isHero) ?? flavours[0];

function Hero({ theme }) {
  const t = getTokens(theme);

  return (
    <Box
      as="section"
      id="top"
      w="100%"
      py={{ base: 8, md: 10 }} // space above/below the box
      px={{ base: 4, md: 6 }}
      bg={t.bg}
      color={t.text}
    >
      {/* This is the BOX you were missing */}
      <Box
        maxW="1180px"
        mx="auto"
        bg={t.heroBg}
        borderRadius={t.radius}
        px={{ base: 5, md: 6 }}
        py={{ base: 6, md: 8 }}
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={{ base: 8, md: 10 }}
        >
          {/* LEFT CONTENT */}
          <Box flex="1">
            <Text
              fontSize="xs"
              textTransform="uppercase"
              letterSpacing="0.16em"
              opacity={0.7}
              mb={2}
            >
              NEW-AGE PAPAD · OLD-SCHOOL CRUNCH
            </Text>

            <Heading
              fontFamily="'Bangers', sans-serif"
              fontSize={{ base: "2rem", md: "3.4rem" }}
              lineHeight="1.05"
              color={t.pink}
              mb={4}
            >
              Turn every snack break into a comic-book crunch.
            </Heading>

            <Text maxW="460px" opacity={0.9} mb={6}>
              crackin&apos; takes classic urad papad and blasts it with bold
              global flavours. Super crunchy, super snackable, zero boring
              bites.
            </Text>

            {/* CTA BUTTONS */}
            <HStack spacing={3} mb={5} wrap="wrap">
              <Button
                bg={t.cyan}
                color={t.ink}
                borderRadius={t.radius}
                fontWeight="600"
                fontSize="0.9rem"
                px="1.25rem"
                py="0.7rem"
                _hover={{ opacity: 0.9 }}
              >
                Become a Retail Partner
              </Button>

              <Button
                variant="outline"
                borderColor={t.text}
                color={t.text}
                borderRadius={t.radius}
                fontWeight="600"
                fontSize="0.9rem"
                px="1.25rem"
                py="0.7rem"
                _hover={{ opacity: 0.9 }}
              >
                View Ingredient Story
              </Button>
            </HStack>

            {/* BADGES */}
            <HStack spacing={3} wrap="wrap">
              <Tag
                bg="rgba(255,255,255,0.6)"
                color="#2a2222"
                fontSize="0.72rem"
                letterSpacing="0.12em"
                textTransform="uppercase"
                borderRadius="full"
                px={3}
                py={1}
              >
                Made from urad flour
              </Tag>

              <Tag
                bg="rgba(255,255,255,0.6)"
                color="#2a2222"
                fontSize="0.72rem"
                letterSpacing="0.12em"
                textTransform="uppercase"
                borderRadius="full"
                px={3}
                py={1}
              >
                Small-batch roasted
              </Tag>

              <Tag
                bg="rgba(255,255,255,0.6)"
                color="#2a2222"
                fontSize="0.72rem"
                letterSpacing="0.12em"
                textTransform="uppercase"
                borderRadius="full"
                px={3}
                py={1}
              >
                No kitchen drama
              </Tag>
            </HStack>
            <Box mb={6} mt={3}>
              <Text
                fontFamily="'Bangers', sans-serif"
                fontSize="1.5rem"
                mb={3}
                letterSpacing="0.5px"
                color={t.pink}
              >
                Where to buy
              </Text>

              <Wrap spacing={{ base: 2, md: 3 }}>
                <StoreChip name="Blinkit" bg="#FFF000" accent="#00C853" />
                <StoreChip name="Zepto" bg="#2B0B3F" accent="#FF2E9A" />
                <StoreChip name="Amazon" bg="#ffc35bff" accent="#000" />
                <StoreChip name="Flipkart" bg="#2874F0" accent="#f7ca15ff" />
                <StoreChip name="Instamart" bg="#f89e55ff" accent="#2874F0" />
              </Wrap>
            </Box>
          </Box>

          {/* RIGHT IMAGE */}
          <Flex flex="1" justify="center">
            <Image
              src={heroFlavour.image}
              alt={heroFlavour.name}
              maxW="360px"
              filter="drop-shadow(0 12px 22px rgba(0,0,0,0.18))"
              draggable={false}
              style={{ userSelect: "none" }}
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Hero;
