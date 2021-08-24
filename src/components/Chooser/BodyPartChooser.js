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
            className={
              selectedBodyPart === bodyPart ? `${bodyPart} selected` : bodyPart
            }
          />
        );
      })}
    </div>
  );
};

export default BodyPartChooser;
