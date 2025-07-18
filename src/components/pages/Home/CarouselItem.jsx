
function CarouselItem({ src, h5, p, alt, activeClass = "" }) {
  return (
    <div className={`carousel-item mt-4 ${activeClass} `}>
      <img src={src} className="d-block w-100 rounded-3" alt={alt} />
      <div className="carousel-caption d-none d-md-block bs-primary-bg-subtle text-primary rounded-3">
        <h5>{h5}</h5>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default CarouselItem;
