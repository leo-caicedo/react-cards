import PropType from "prop-types";
import "./cards.css";

export default function Card({ title, img, desc, url }) {
  return (
    <div className="card text-center bg-dark animate_animated animate_fadeInUp">
      <div className="overflow">
        <img className="card-img-top" src={img} alt="" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {desc ? desc : "This is a proyect"}
        </p>
        <a
          className="btn btn-outline-secondary rounded-0"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          Go to proyect
        </a>
      </div>
    </div>
  );
}

Card.propType = {
  title: PropType.string.isRequired,
  desc: PropType.string.isRequired,
  img: PropType.string.isRequired,
  url: PropType.string,
};
