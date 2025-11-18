import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FlavourCarousel from "./components/FlavourCarousel";
import WhySection from "./components/WhySection";
import StockistsSection from "./components/StockistsSection";
import FlavourModal from "./components/FlavourModal";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  const [theme, setTheme] = useState("light"); // "light" by default
  const [activeFlavour, setActiveFlavour] = useState(null);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const openFlavour = (flavour) => {
    setActiveFlavour(flavour);
  };

  const closeFlavour = () => {
    setActiveFlavour(null);
  };

  return (
    <div className="site" data-theme={theme}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero theme={theme} />

        <FlavourCarousel onFlavourClick={openFlavour} theme={theme} />

        <WhySection theme={theme} />

        <StockistsSection theme={theme} />

        <ContactSection theme={theme} />
      </main>

      {activeFlavour && (
        <FlavourModal
          flavour={activeFlavour}
          onClose={closeFlavour}
          theme={theme}
        />
      )}

      <ScrollToTopButton theme={theme} />

      <Footer theme={theme} />
    </div>
  );
}

export default App;
