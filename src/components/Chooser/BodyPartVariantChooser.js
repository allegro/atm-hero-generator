import "./BodyPartVariantChooser.css";
import Thumbnails from "./thumbnails";

const BodyPartVariantChooser = (props) => {
  const { selectedBodyPart, selectVariant } = props;
  const bodyPartThumbs = Thumbnails[selectedBodyPart];

  return (
    <div className="VariantChooser-container">
      {Object.entries(bodyPartThumbs).map(([name, image]) => (
        <button
          className="VariantChooser-button"
          key={name}
          onClick={() => selectVariant(name)}
        >
          {!!image && <img src={image.src} alt={name} />}
        </button>
      ))}
    </div>
  );
};

export default BodyPartVariantChooser;
