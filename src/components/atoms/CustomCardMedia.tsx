import { Link } from "react-router-dom";

interface CustomCardMediaProps {
  url: string;
  imageUrl: string;
  hoverImageUrl: string;
  title: string;
  rounded?: string;
}

export default function CustomCardMedia({
  url,
  imageUrl,
  hoverImageUrl,
  title,
  rounded = "rounded-xl",
}: CustomCardMediaProps) {
  return (
    <Link
      to={url}
      className={`${rounded} relative block group w-full overflow-hidden`}
    >
      <div className={`${rounded} relative w-full h-0 pb-[56.25%]`}>
        <img
          src={imageUrl}
          alt={title}
          className={`${rounded} absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75`}
        />
        <img
          src={hoverImageUrl}
          alt={title}
          className={`${rounded} absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:brightness-75`}
        />
        <div className={`${rounded} absolute top-0 left-0 w-full h-full flex items-center justify-center`}>
          <span
            style={{ color: "white", fontSize: "30px" }}
            className="text-white font-bold opacity-0 group-hover:opacity-100 transition duration-500"
          >
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
}
