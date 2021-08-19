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
          <img
            style={{
              objectFit: "cover",
              maxWidth: "52px",
              maxHeight: "52px",
            }}
            src={image.src}
          />
        </button>
      ))}
    </div>
  );
};

export default BodyPartVariantChooser;
