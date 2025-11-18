// src/components/Footer.jsx
import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { getTokens } from "../theme/tokens";

function Footer({ theme }) {
  const t = getTokens(theme);

  return (
    <Box
      as="footer"
      w="100%"
      textAlign="center"
      py={6}
      px={4}
      bg={t.footerBg}
      color={t.text}
      fontSize="0.85rem"
    >
      <Text opacity={0.9}>
        © {new Date().getFullYear()} crackin&apos; Foods. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
