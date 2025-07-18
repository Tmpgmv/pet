function Img({ src, alt, aClassName = "", height = null }) {
  return (
    <img
      src={src}
      height={height ?? undefined}
      alt={alt}
      className={aClassName ?? undefined}
    />
  );
}

export default Img;
