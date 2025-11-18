import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  HStack,
  Button,
} from "@chakra-ui/react";
import { getTokens } from "../theme/tokens";

function StockistsSection({ theme }) {
  const t = getTokens(theme);

  return (
    <Box
      as="section"
      id="stockists"
      w="100%"
      py={12}
      px={{ base: 4, md: 6 }}
      bg={t.bg}
      color={t.text}
    >
      <Box maxW="1180px" mx="auto">
        {/* Heading */}
        <Heading
          as="h2"
          fontFamily="'Bangers', sans-serif"
          mb={4}
          fontSize={{ base: "2xl", md: "3xl" }}
        >
          Get crackin&apos; on your shelves
        </Heading>

        {/* Intro copy */}
        <Text maxW="460px" mb={5} opacity={0.85} fontSize="0.95rem">
          We&apos;re onboarding modern trade, cafés, QSRs and boutique stores
          across India. Be the first in your neighbourhood to stock the crunch.
        </Text>

        {/* Bullet list */}
        <List styleType="disc" pl="1.2rem" mb={6} fontSize="0.95rem">
          <ListItem>Low MOQs for first-time partners</ListItem>
          <ListItem>Eye-catching POS and sampling support</ListItem>
          <ListItem>Strong visual identity for digital shelves</ListItem>
        </List>

        {/* CTA Buttons */}
        <HStack spacing={3} wrap="wrap">
          <Button
            bg={t.cyan}
            color={t.ink}
            borderRadius={t.radius}
            fontWeight="600"
            fontSize="0.85rem"
            px="1.25rem"
            py="0.6rem"
            _hover={{ opacity: 0.9 }}
          >
            Download Product Deck
          </Button>

          <Button
            variant="outline"
            borderColor={t.text}
            color={t.text}
            borderRadius={t.radius}
            fontWeight="600"
            fontSize="0.85rem"
            px="1.25rem"
            py="0.6rem"
            _hover={{ opacity: 0.9 }}
          >
            Talk to Sales
          </Button>
        </HStack>
      </Box>
    </Box>
  );
}

export default StockistsSection;
