import { Button, Link } from "@chakra-ui/react";

function StoreChip({ name, bg, accent, url = "#" }) {
  return (
    <Button
      as={Link}
      href={url}
      isExternal
      size="sm"
      borderRadius="999px"
      bg={bg}
      color={accent}
      px={4}
      py={2}
      fontFamily="'Bangers', sans-serif"
      fontSize="0.85rem"
      letterSpacing="0.4px"
      _hover={{ opacity: 0.85, textDecoration: "none" }}
    >
      {name}
    </Button>
  );
}
export default StoreChip