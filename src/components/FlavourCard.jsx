// src/components/FlavourCard.jsx
import React from "react";
import { Box, Text, Image, Heading } from "@chakra-ui/react";
import { getTokens } from "../theme/tokens";

function FlavourCard({ flavour, onClick, theme }) {
  const t = getTokens(theme);

  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      borderRadius={t.radius}
      borderWidth="1px"
      borderColor={t.borderSoft}
      bg={t.cardBg}
      p={4}
      textAlign="center"
      transition="all 0.2s ease-out"
      _hover={{
        transform: "translateY(-4px) scale(1.02)",
        boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
      }}
    >
      {/* Label */}
      {flavour.label && (
        <Text
          fontSize="xs"
          textTransform="uppercase"
          letterSpacing="0.12em"
          opacity={0.75}
        >
          {flavour.label}
        </Text>
      )}

      {/* Image */}
      <Image
        src={flavour.image}
        alt={flavour.name}
        mx="auto"
        mt={2}
        mb={2}
        maxW="200px"
        draggable={false}
        style={{ userSelect: "none" }}
        filter="drop-shadow(0 6px 12px rgba(0,0,0,0.12))"
      />

      {/* Name */}
      <Heading
        as="h3"
        fontFamily="'Bangers', sans-serif"
        fontSize="xl"
        color={t.pink}
      >
        {flavour.name}
      </Heading>

      {/* Subtitle */}
      {flavour.subtitle && (
        <Text fontSize="sm" opacity={0.9} mt={1}>
          {flavour.subtitle}
        </Text>
      )}

      {/* Heat indicator */}
      {flavour.heat && (
        <Text
          fontSize="xs"
          textTransform="uppercase"
          letterSpacing="0.12em"
          opacity={0.7}
          mt={1}
        >
          Heat: {flavour.heat}
        </Text>
      )}
    </Box>
  );
}

export default FlavourCard;
