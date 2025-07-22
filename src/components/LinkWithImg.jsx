import { Link } from "react-router-dom";

function LinkWithImg({ to, imgSrc, alt, className }) {
  return (
    <Link
      className={className}
      to={to}
    >
      <img src={imgSrc} height={20} alt={alt} />
    </Link>
  );
}

export default LinkWithImg;
