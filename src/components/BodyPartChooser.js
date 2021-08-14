import "./BodyPartChooser.css";

const BodyPartChooser = (props) => {
  const { selectedBodyPart, selectBodyPart, bodyPartList } = props;

  return (
    <div className="Chooser-container">
      {bodyPartList.map((bodyPart) => {
        return (
          <button
            key={bodyPart}
            onClick={() => selectBodyPart(bodyPart)}
            className={selectedBodyPart === bodyPart ? "selected" : ""}
          >
            {bodyPart}
          </button>
        );
      })}
    </div>
  );
};

export default BodyPartChooser;
