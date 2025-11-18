import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowUp } from "lucide-react";
import { getTokens } from "../theme/tokens";

function ScrollToTopButton({ theme }) {
  const t = getTokens(theme);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 350);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <IconButton
      aria-label="Scroll to top"
      onClick={scrollToTop}
      position="fixed"
      bottom="54px"
      right="54px"
      zIndex="999"
      icon={<ArrowUp size={18} />}
      borderRadius="full"
      bg={t.pink}
      color="white"
      _hover={{ opacity: 0.85 }}
      boxShadow="0 6px 16px rgba(0,0,0,0.25)"
    />
  );
}

export default ScrollToTopButton;
