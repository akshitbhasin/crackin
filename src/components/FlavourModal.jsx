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

export default FlavourModal;
