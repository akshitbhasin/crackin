// src/components/FlavourModal.jsx
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Tag,
  List,
  ListItem,
} from "@chakra-ui/react";
import { getTokens } from "../theme/tokens";

function FlavourModal({ flavour, onClose, theme }) {
  if (!flavour) return null;

  const t = getTokens(theme);
  const accent = flavour.accentColor || t.pink;

  return (
    <Modal isOpen={!!flavour} onClose={onClose} isCentered size="lg">
      <ModalOverlay bg="rgba(0,0,0,0.7)" />
      <ModalContent
        bg={t.cardBg}
        color={t.text}
        borderWidth="2px"
        borderColor={accent}
        borderRadius={t.radius}
        maxW="720px"
      >
        <ModalCloseButton />

        <ModalBody p={{ base: 4, md: 6 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 4, md: 6 }}
          >
            {/* LEFT: IMAGE */}
            <Box flex="1" display="flex" justifyContent="center">
              <Image
                src={flavour.image}
                alt={flavour.name}
                maxW="260px"
                mx="auto"
                filter="drop-shadow(0 10px 22px rgba(0,0,0,0.25))"
                draggable={false}
                style={{ userSelect: "none" }}
              />
            </Box>

            {/* RIGHT: CONTENT */}
            <Box flex="1">
              {flavour.label && (
                <Tag
                  size="sm"
                  mb={2}
                  borderRadius="full"
                  bg={`${accent}22`}
                  color={accent}
                  textTransform="uppercase"
                  fontSize="0.7rem"
                  letterSpacing="0.12em"
                >
                  {flavour.label}
                </Tag>
              )}

              <Heading
                as="h2"
                fontFamily="'Bangers', sans-serif"
                fontSize="2xl"
                color={accent}
                mb={2}
              >
                {flavour.name}
              </Heading>

              {flavour.subtitle && (
                <Text fontSize="sm" opacity={0.9} mb={2}>
                  {flavour.subtitle}
                </Text>
              )}

              {flavour.heat && (
                <Text
                  fontSize="xs"
                  textTransform="uppercase"
                  letterSpacing="0.12em"
                  opacity={0.75}
                  mb={3}
                >
                  Heat: {flavour.heat}
                </Text>
              )}

              {flavour.description && (
                <Text fontSize="sm" mb={3}>
                  {flavour.description}
                </Text>
              )}

              {flavour.ingredients && flavour.ingredients.length > 0 && (
                <Box mt={2}>
                  <Text
                    fontSize="xs"
                    textTransform="uppercase"
                    letterSpacing="0.14em"
                    mb={1}
                    opacity={0.8}
                  >
                    Ingredients
                  </Text>
                  <List
                    styleType="disc"
                    pl={4}
                    fontSize="sm"
                    maxH="120px"
                    overflowY="auto"
                  >
                    {flavour.ingredients.map((item) => (
                      <ListItem key={item}>{item}</ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default FlavourModal;
