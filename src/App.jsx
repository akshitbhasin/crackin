// src/App.jsx
import React, { useState, useRef } from "react";

import flavours from "./flavours.json";

const heroFlavour = flavours.find((f) => f.isHero) ?? flavours[0];

  

function App() {
  const [theme, setTheme] = useState("light"); // "light" by default
  
  

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const flavourCarouselRef = useRef(null);

  const scrollFlavours = (direction) => {
    const el = flavourCarouselRef.current;
    if (!el) return;

    const firstCard = el.querySelector(".flavour-card");
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 260;
    const gap = 16; // ~1rem gap

    el.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  const [activeFlavour, setActiveFlavour] = useState(null);

  const openFlavour = (flavour) => {
    setActiveFlavour(flavour);
  };

  const closeFlavour = () => {
    setActiveFlavour(null);
  };

  return (
    <div className="site" data-theme={theme}>
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav-left">
          <span className="logo-pop">crackin'</span>
        </div>

        <nav className="nav-links">
          <a href="#flavours">Flavours</a>
          <a href="#why">Why crackin'</a>
          <a href="#stockists">Where to buy</a>
        </nav>

        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
          <button className="nav-cta">Get a Sample</button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="top">
          <div className="hero-text">
            <p className="hero-kicker">NEW-AGE PAPAD · OLD-SCHOOL CRUNCH</p>

            <h1>Turn every snack break into a comic-book crunch.</h1>

            <p>
              crackin&apos; takes classic urad papad and blasts it with bold
              global flavours. Super crunchy, super snackable, zero boring
              bites.
            </p>

            <div className="hero-actions">
              <button className="btn-primary">Become a Retail Partner</button>
              <button className="btn-ghost">View Ingredient Story</button>
            </div>

            <div className="hero-badges">
              <span className="badge">Made from urad flour</span>
              <span className="badge">Small-batch roasted</span>
              <span className="badge">No kitchen drama</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-stack">
              <img src={heroFlavour.image} alt={heroFlavour.name} />
            </div>
          </div>
        </section>

        {/* FLAVOURS */}
        {/* FLAVOURS – CAROUSEL */}
        <section id="flavours" className="section-flavours">
          <h2
            style={{ fontFamily: "Bangers, sans-serif", marginBottom: "1rem" }}
          >
            Flavour squad
          </h2>
          <p
            style={{
              maxWidth: "440px",
              marginBottom: "1.5rem",
              opacity: 0.85,
            }}
          >
            Same addictive crunch, different personalities. Hover on a pack to
            reveal what&apos;s inside.
          </p>

          <div className="flavour-carousel">
            <button
              type="button"
              className="flavour-carousel-arrow flavour-carousel-arrow--left"
              onClick={() => scrollFlavours("left")}
            >
              ‹
            </button>

            <div className="flavour-carousel-track" ref={flavourCarouselRef}>
              {flavours.map((flavour) => (
                <FlavourCard
                  key={flavour.id}
                  flavour={flavour}
                  onClick={() => openFlavour(flavour)}
                />
              ))}
            </div>

            <button
              type="button"
              className="flavour-carousel-arrow flavour-carousel-arrow--right"
              onClick={() => scrollFlavours("right")}
            >
              ›
            </button>
          </div>
        </section>

        {/* WHY SECTION */}
        <section id="why" className="section-flavours">
          <h2
            style={{
              fontFamily: "Bangers, sans-serif",
              marginBottom: "1rem",
            }}
          >
            Why crackin&apos;?
          </h2>

          <div className="flavour-grid">
            <ReasonCard
              title="Shelf pop"
              text="Bold colours, comic vibes and clean packs that jump off both shelves and screens."
            />
            <ReasonCard
              title="Snack-ready"
              text="Urban flavours, easy prep and resealable pouches built for modern snacking."
            />
            <ReasonCard
              title="Menu friendly"
              text="Perfect with chai, mocktails, cheese boards or fusion chaat — plug it into any menu."
            />
          </div>
        </section>

        {/* STOCKISTS */}
        <section id="stockists" className="section-flavours">
          <h2
            style={{
              fontFamily: "Bangers, sans-serif",
              marginBottom: "1rem",
            }}
          >
            Get crackin&apos; on your shelves
          </h2>
          <p
            style={{
              maxWidth: "460px",
              marginBottom: "1.25rem",
              opacity: 0.85,
            }}
          >
            We&apos;re onboarding modern trade, cafés, QSRs and boutique stores
            across India. Be the first in your neighbourhood to stock the
            crunch.
          </p>

          <ul
            style={{
              listStyle: "disc",
              paddingLeft: "1.2rem",
              marginBottom: "1.5rem",
              fontSize: "0.95rem",
            }}
          >
            <li>Low MOQs for first-time partners</li>
            <li>Eye-catching POS and sampling support</li>
            <li>Strong visual identity for digital shelves</li>
          </ul>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <button className="btn-primary">Download Product Deck</button>
            <button className="btn-ghost">Talk to Sales</button>
          </div>
        </section>
      </main>

      {activeFlavour && (
        <FlavourModal flavour={activeFlavour} onClose={closeFlavour} />
      )}

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} crackin&apos; Foods. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function FlavourCard({ flavour, onClick }) {
  return (
    <article className="flavour-card flavour-card--clickable" onClick={onClick}>
      <div className="flavour-label">{flavour.label}</div>

      <img src={flavour.image} alt={flavour.name} className="flavour-img" />

      <h3>{flavour.name}</h3>

      {flavour.subtitle && (
        <p className="flavour-subtitle">{flavour.subtitle}</p>
      )}

      {flavour.heat && <p className="flavour-heat">Heat: {flavour.heat}</p>}
    </article>
  );
}

function ReasonCard({ title, text }) {
  return (
    <article className="flavour-card">
      <h3 className="reason-title">{title}</h3>
      <p className="reason-text">{text}</p>
    </article>
  );
}

function FlavourModal({ flavour, onClose }) {
  if (!flavour) return null;

  return (
    <div className="flavour-modal-backdrop" onClick={onClose}>
      <div
        className="flavour-modal"
        style={{ borderColor: flavour.accentColor }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="flavour-modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="flavour-modal-image">
          <img src={flavour.image} alt={flavour.name} />
        </div>

        <div className="flavour-modal-body">
          <div className="flavour-modal-tag">{flavour.label}</div>

          <h2 className="flavour-modal-title">{flavour.name}</h2>

          {flavour.subtitle && (
            <p className="flavour-modal-subtitle">{flavour.subtitle}</p>
          )}

          {flavour.heat && (
            <p className="flavour-modal-heat">Heat: {flavour.heat}</p>
          )}

          {flavour.description && (
            <p className="flavour-modal-description">{flavour.description}</p>
          )}

          {flavour.ingredients && flavour.ingredients.length > 0 && (
            <>
              <h3 className="flavour-modal-ingredients-heading">Ingredients</h3>
              <ul className="flavour-modal-ingredients-list">
                {flavour.ingredients.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
