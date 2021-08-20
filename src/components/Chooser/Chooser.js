import BodyPartChooser from "./BodyPartChooser";
import BodyPartVariantChooser from "./BodyPartVariantChooser";
import "./Chooser.css";

const Chooser = (props) => {
  const {
    bodyPartList,
    selectedBodyPart,
    selectBodyPart,
    selectVariant,
    setRandomCharacter,
  } = props;

  return (
    <div className="ChooserScreen">
      <div className="ChooserScreen-variants">
        <BodyPartVariantChooser
          selectedBodyPart={selectedBodyPart}
          selectVariant={selectVariant}
        />
      </div>
      <div style={{ float: "right" }}>
        <BodyPartChooser
          selectedBodyPart={selectedBodyPart}
          selectBodyPart={selectBodyPart}
          bodyPartList={bodyPartList}
        />
      </div>
      <div className="ChooserScreen-random">
        <button onClick={setRandomCharacter} />
      </div>
    </div>
  );
};

export default Chooser;
