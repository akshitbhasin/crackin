import { Box, Heading, SimpleGrid, VStack, Text } from "@chakra-ui/react";
import { getTokens } from "../theme/tokens";

function WhySection({ theme }) {
  const t = getTokens(theme);

  const reasons = [
    {
      title: "Shelf pop",
      text: "Bold colours, comic vibes and clean packs that jump off both shelves and screens.",
    },
    {
      title: "Snack-ready",
      text: "Urban flavours, easy prep and resealable pouches built for modern snacking.",
    },
    {
      title: "Menu friendly",
      text: "Perfect with chai, mocktails, cheese boards or fusion chaat — plug it into any menu.",
    },
  ];

  return (
    <Box
      as="section"
      id="why"
      w="100%"
      py={12}
      px={{ base: 4, md: 6 }}
      bg={t.bg}
      color={t.text}
    >
      <Box maxW="1180px" mx="auto">
        <Heading
          as="h2"
          fontFamily="'Bangers', sans-serif"
          mb={4}
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          Why crackin&apos;?
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 6 }}>
          {reasons.map((reason) => (
            <VStack
              key={reason.title}
              align="flex-start"
              spacing={2}
              p={5}
              borderRadius={t.radius}
              borderWidth="1px"
              borderColor={t.borderSoft}
              bg={t.cardBg}
              boxShadow="0 4px 12px rgba(0, 0, 0, 0.06)"
            >
              <Heading
                as="h3"
                fontFamily="'Bangers', sans-serif"
                fontSize="xl"
                color={t.pink}
              >
                {reason.title}
              </Heading>

              <Text fontSize="sm" opacity={0.9}>
                {reason.text}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default WhySection;
