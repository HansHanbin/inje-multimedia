import "./FeaturesItem.scss";
import { Link } from "react-router-dom";

function FeaturesItem(props) {
  return (
    <>
      <li className="features-item">
        <Link to={props.path}>
          <div className="features-image-hover">
            <div className="hover-info">
              <div className="hover-info-text">{props.description}</div>
              <div className="hover-info-name">{props.name}</div>
            </div>
          </div>
          <div className="features-image-wrapper">
            <img className="features-image" src={props.src} />
          </div>
        </Link>
      </li>
    </>
  );
}

export default FeaturesItem;
