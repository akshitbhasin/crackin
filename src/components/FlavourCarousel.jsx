// src/components/FlavourCarousel.jsx
import React, { useRef } from "react";
import { Box, Heading, Text, HStack, IconButton, Flex } from "@chakra-ui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getTokens } from "../theme/tokens";
import flavours from "../data/flavours.json";
import FlavourCard from "./FlavourCard";

function FlavourCarousel({ onFlavourClick, theme }) {
  const t = getTokens(theme);
  const flavourCarouselRef = useRef(null);

  const scrollFlavours = (direction) => {
    const el = flavourCarouselRef.current;
    if (!el) return;

    const scrollAmount = 320; // pixels per click
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Box
      as="section"
      id="flavours"
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
          Flavour squad
        </Heading>

        <Text
          maxW="440px"
          mb={6}
          opacity={0.85}
          fontSize="0.95rem"
          noOfLines={1} // keeps it to one line with ellipsis if needed
        >
          Same addictive crunch, different personalities. Tap a pack to see what
          goes inside each flavour.
        </Text>

        <Box position="relative">
          {/* Left arrow */}
          <IconButton
            aria-label="Scroll flavours left"
            icon={<ChevronLeft size={18} />}
            onClick={() => scrollFlavours("left")}
            position="absolute"
            top="50%"
            left="-10px"
            transform="translateY(-50%)"
            borderRadius="full"
            size="sm"
            bg={t.text}
            color={t.bg}
            boxShadow="0 6px 12px rgba(0,0,0,0.18)"
            _hover={{ opacity: 0.9 }}
            display={{ base: "none", md: "flex" }}
            zIndex={2}
          />

          {/* Track */}
          <Flex
            ref={flavourCarouselRef}
            gap={4}
            overflowX="auto"
            py={2}
            sx={{
              scrollSnapType: "x mandatory",
              "& > *": {
                scrollSnapAlign: "center",
              },
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {flavours.map((flavour) => (
              <Box key={flavour.id} flex="0 0 auto" minW="260px" maxW="280px">
                <FlavourCard
                  flavour={flavour}
                  onClick={() => onFlavourClick(flavour)}
                  theme={theme}
                />
              </Box>
            ))}
          </Flex>

          {/* Right arrow */}
          <IconButton
            aria-label="Scroll flavours right"
            icon={<ChevronRight size={18} />}
            onClick={() => scrollFlavours("right")}
            position="absolute"
            top="50%"
            right="-10px"
            transform="translateY(-50%)"
            borderRadius="full"
            size="sm"
            bg={t.text}
            color={t.bg}
            boxShadow="0 6px 12px rgba(0,0,0,0.18)"
            _hover={{ opacity: 0.9 }}
            display={{ base: "none", md: "flex" }}
            zIndex={2}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default FlavourCarousel;
