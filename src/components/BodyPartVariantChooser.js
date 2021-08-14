import "./BodyPartVariantChooser.css";

const BodyPartVariantChooser = (props) => {
  const { bodyPartVariants, selectVariant } = props;

  return (
    <div className="VariantChooser-container">
      {Object.entries(bodyPartVariants).map(([name, image]) => (
        <button
          className="VariantChooser-button"
          key={name}
          style={{ backgroundImage: `url(${image.src})` }}
          onClick={() => selectVariant(name)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default BodyPartVariantChooser;
