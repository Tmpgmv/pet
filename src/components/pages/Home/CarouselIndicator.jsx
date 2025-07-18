import React from "react";

function CarouselIndicator({
  slideTo,
  label,
  active = false,
  current = false,
}) {
  return (
    <button
      type="button"
      data-bs-target="#carousel"
      data-bs-slide-to={slideTo}
      className={active ? "active" : undefined}
      aria-current={current ? "true" : undefined}
      aria-label={label}
    />
  );
}

export default CarouselIndicator;
