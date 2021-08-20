import BodyPartChooser from "./BodyPartChooser";
import BodyPartVariantChooser from "./BodyPartVariantChooser";
import "./Chooser.css";

const Chooser = (props) => {
  const { bodyPartList, selectedBodyPart, selectBodyPart, selectVariant } =
    props;

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
    </div>
  );
};

export default Chooser;
