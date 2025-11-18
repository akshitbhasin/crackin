// src/components/ContactSection.jsx
import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Link,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { getTokens } from "../theme/tokens";
import contact from "../data/contact.json";

import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircleHeart,
  Globe,
} from "lucide-react";

const SOCIAL_ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  whatsapp: MessageCircleHeart,
};

const SOCIAL_LABELS = {
  instagram: "Instagram",
  facebook: "Facebook",
  twitter: "X / Twitter",
  linkedin: "LinkedIn",
  whatsapp: "WhatsApp"
};

function ContactSection({ theme }) {
  const t = getTokens(theme);
  const { email, phone, addressLine1, addressLine2, addressLine3, socials } =
    contact;

  return (
    <Box
      as="section"
      id="contact"
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
          Contact us
        </Heading>

        <Text maxW="70%" mb={8} opacity={0.85}>
          Wanna stock crackin&apos;, collaborate, or just talk about snacks?
          Drop us a line and we&apos;ll get back faster than your papad can
          crack.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 12 }}>
          {/* LEFT COLUMN - INFO + SOCIALS */}
          <VStack align="flex-start" spacing={8}>
            {/* Reach out */}
            <Box>
              <Heading
                as="h3"
                fontFamily="'Bangers', sans-serif"
                fontSize="xl"
                color={t.pink}
                mb={2}
              >
                Reach out
              </Heading>

              {email && (
                <Text>
                  <strong>Email:</strong>{" "}
                  <Link
                    href={`mailto:${email}`}
                    color={t.cyan}
                    fontWeight="600"
                  >
                    {email}
                  </Link>
                </Text>
              )}

              {phone && (
                <Text>
                  <strong>Phone:</strong>{" "}
                  <Link href={`tel:${phone}`} color={t.cyan} fontWeight="600">
                    {phone}
                  </Link>
                </Text>
              )}
            </Box>

            {/* Address */}
            <Box>
              <Heading
                as="h3"
                fontFamily="'Bangers', sans-serif"
                fontSize="xl"
                color={t.pink}
                mb={2}
              >
                Address
              </Heading>
              <Text opacity={0.9}>
                {addressLine1 && (
                  <>
                    {addressLine1}
                    <br />
                  </>
                )}
                {addressLine2 && (
                  <>
                    {addressLine2}
                    <br />
                  </>
                )}
                {addressLine3 && (
                  <>
                    {addressLine3}
                    <br />
                  </>
                )}
              </Text>
            </Box>

            {/* Socials */}
            <Box>
              <Heading
                as="h3"
                fontFamily="'Bangers', sans-serif"
                fontSize="xl"
                color={t.pink}
                mb={3}
              >
                Socials
              </Heading>

              {/* Split socials into two columns */}
              {socials && (
                <SimpleGrid
                  columns={{ base: 1, sm: 2 }}
                  spacingX={4}
                  spacingY={3}
                >
                  {Object.entries(socials).map(([key, url]) => {
                    if (!url) return null;
                    const Icon = SOCIAL_ICONS[key] ?? Globe;
                    const label = SOCIAL_LABELS[key] ?? key;

                    return (
                      <HStack
                        as={Link}
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        spacing={2}
                        px={3}
                        py={2}
                        borderRadius={t.pillRadius}
                        borderWidth="1px"
                        borderColor={t.borderSoft}
                        _hover={{ bg: t.cardBg, opacity: 0.9 }}
                      >
                        <Icon size={16} />
                        <Text fontSize="sm" noOfLines={1}>
                          {label}
                        </Text>
                      </HStack>
                    );
                  })}
                </SimpleGrid>
              )}
            </Box>
          </VStack>

          {/* RIGHT COLUMN - CONTACT FORM */}
          <Box
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "This is a static demo form – wire this up to your backend when you're ready!"
              );
            }}
            p={6}
            borderRadius={t.radius}
            borderWidth="1px"
            borderColor={t.borderSoft}
            bg={t.cardBg}
          >
            <VStack spacing={5}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Your name" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="you@example.com" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  rows={4}
                  placeholder="Tell us how you want to crackin'..."
                />
              </FormControl>

              <Button
                type="submit"
                bg={t.cyan}
                color={t.ink}
                fontWeight="600"
                borderRadius={t.radius}
                width="100%"
                _hover={{ opacity: 0.9 }}
              >
                Send message
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default ContactSection;
