import React from "react";

function CarouselButton({ previous = false, hidden = false }) {
  return (
    <button
      className={previous ? "carousel-control-prev" : "carousel-control-next"}
      type="button"
      data-bs-target="#carousel"
      data-bs-slide={previous ? "prev" : "next"}
    >
      <span
        className={
          previous ? "carousel-control-prev-icon" : "carousel-control-next-icon"
        }
        aria-hidden={hidden ? "true" : undefined}
      />
      <span className="visually-hidden">Previous</span>
    </button>
  );
}

export default CarouselButton;
