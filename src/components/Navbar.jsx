import { Box, Flex, HStack, Button, Link, Text } from "@chakra-ui/react";
import { getTokens } from "../theme/tokens";

function Navbar({ theme, onToggleTheme }) {
  const t = getTokens(theme); // <<< light/dark aware

  return (
    <Box
      as="header"
      bg={t.navBg}
      w="100%"
      px={{ base: 4, md: 6 }}
      py={3}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex
        maxW="1180px"
        mx="auto"
        align="center"
        justify="space-between"
        gap={4}
      >
        <Flex align="center">
          <Text
            fontFamily="'Bangers', sans-serif"
            fontSize={{ base: "1.6rem", md: "2rem" }}
            letterSpacing="1px"
            color={t.pink}
          >
            crackin&apos;
          </Text>
        </Flex>

        <HStack
          as="nav"
          spacing={5}
          display={{ base: "none", md: "flex" }}
          fontSize="0.9rem"
          fontWeight="600"
        >
          <Link href="#flavours" color={t.text} _hover={{ opacity: 0.7 }}>
            Flavours
          </Link>
          <Link href="#why" color={t.text} _hover={{ opacity: 0.7 }}>
            Why crackin&apos;
          </Link>
          <Link href="#stockists" color={t.text} _hover={{ opacity: 0.7 }}>
            Where to buy
          </Link>
          <Link href="#contact" color={t.text} _hover={{ opacity: 0.7 }}>
            Contact
          </Link>
        </HStack>

        <HStack spacing={2}>
          <Button
            onClick={onToggleTheme}
            fontSize="0.8rem"
            borderRadius={t.pillRadius}
            borderWidth="1px"
            borderColor={t.borderSoft}
            bg="transparent"
            color={t.text}
            px={3}
            py={1}
            _hover={{ bg: "rgba(0,0,0,0.03)" }}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </Button>

          <Button
            bg={t.pink}
            color="#ffffff"
            fontWeight="600"
            fontSize="0.85rem"
            borderRadius={t.cardRadius}
            px={4}
            py={2}
            _hover={{ opacity: 0.9 }}
          >
            Get a Sample
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
