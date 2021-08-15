import "./BodyPartVariantChooser.css";

const BodyPartVariantChooser = (props) => {
  const { bodyPartVariants, selectVariant } = props;

  return (
    <div className="VariantChooser-container">
      {Object.entries(bodyPartVariants).map(([name, image]) => (
        <button
          className="VariantChooser-button"
          key={name}
          onClick={() => selectVariant(name)}
        >
          <div
            className="VariantChooser-button-img"
            style={{ backgroundImage: `url(${image.src})` }}
          ></div>
        </button>
      ))}
    </div>
  );
};

export default BodyPartVariantChooser;
