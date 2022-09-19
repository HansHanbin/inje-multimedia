import "./FeaturesItem.scss";
import { Link } from "react-router-dom";

function FeaturesItem(props) {
  return (
    <>
      <li className="features-item">
        <Link
          to={props.path}
          state={{
            header: props.header,
            featureName: props.featureName,
            featureDescription: props.featureDescription,
            profileImage: props.profileImage,
            profileName: props.profileName,
            profileEng: props.profileEng,
            profileMail: props.profileMail,
            work0: props.work0,
            work1: props.work1,
            work2: props.work2,
            work3: props.work3,
            work4: props.work4,
            work5: props.work5,
            work6: props.work6,
            work7: props.work7,
            work8: props.work8,
            work9: props.work9,
            work10: props.work10,
            work11: props.work11,
            work12: props.work12,
            work13: props.work13,
            work14: props.work14,
            work15: props.work15,
            work16: props.work16,
            work17: props.work17,
            work18: props.work18,
            work19: props.work19,
            work20: props.work20,
            work21: props.work21,
            work22: props.work22,
            work23: props.work23,
            work24: props.work24,
            work25: props.work25,
            work26: props.work26,
            work27: props.work27,
            work28: props.work28,
            work29: props.work29,
            work30: props.work30,
            lightMode: props.lightMode,
            darkMode: props.darkMode,
            link: props.link,
            workVideo: props.workVideo,
          }}
        >
          <div className="features-image-hover">
            <div className="hover-info">
              <div className="hover-info-text">{props.description}</div>
              <div className="hover-info-name">{props.name}</div>
            </div>
          </div>
          <div className="features-image-wrapper">
            <img className="features-image" src={props.src} alt="features" />
          </div>
        </Link>
      </li>
    </>
  );
}

export default FeaturesItem;
