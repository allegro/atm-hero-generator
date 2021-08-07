import noneImg from "./none.png";

import backCapeGreen from "./01back/01back_cape_green.png";

import bodyBlueFemale from "./02body/02body_blue_female.png";
import bodyBlueMale from "./02body/02body_blue_male.png";
import bodyGreenFemale from "./02body/02body_green_female.png";
import bodyGreenMale from "./02body/02body_green_male.png";
import bodySkeleton from "./02body/02body_skeleton.png";
import bodyWhiteFemale from "./02body/02body_white_female.png";
import bodyWhiteMale from "./02body/02body_white_male.png";

import topArmorBarbarian from "./03top/03top_armor_barbarian.png";
import topArmorOrc from "./03top/03top_armor_orc.png";
import topSuitSpace from "./03top/03top_suit_space.png";
import topVestRed from "./03top/03top_vest_red.png";

import downArmorBarbarian from "./04down/04down_armor_barbarian.png";
import downOrcLoincloth from "./04down/04down_orc_loincloth.png";
import downSuitSpace from "./04down/04down_suit_space.png";

import shoesBarbarian from "./05shoes/05shoes_barbarian.png";
import shoesBlack from "./05shoes/05shoes_black.png";
import shoesOrcBoots from "./05shoes/05shoes_orc_boots.png";
import shoesSuitSpace from "./05shoes/05shoes_suit_space.png";

import headBlue1 from "./06head/06head_blue1.png";
import headOrc from "./06head/06head_orc.png";
import headSkeleton from "./06head/06head_skeleton.png";
import headWhite1 from "./06head/06head_white1.png";

import eyesAlienBlue from "./07eyes/07eyes_alien_blue.png";
import eyesSkeleton from "./07eyes/07eyes_skeleton.png";
import eyesType1Blue from "./07eyes/07eyes_type1_blue.png";
import eyesType1Orc from "./07eyes/07eyes_type1_orc.png";
import eyesType2Lightblue from "./07eyes/07eyes_type2_lightblue.png";

import eyebrowsType1Black from "./08eyebrows/08eyebrows_type1_black.png";
import eyebrowsType2Black from "./08eyebrows/08eyebrows_type2_black.png";

import mouthSmile1 from "./10mouth/10mouth_smile1.png";

import hairBlonde1 from "./11hair/11hair_blonde1.png";
import hairBrown1 from "./11hair/11hair_brown1.png";
import hairPonytail from "./11hair/11hair_ponytail.png";

import facialhairType1Brown from "./12facial hair/12facialhair_type1_brown.png";

import headgearArmorBarbarian from "./13headgear/13headgear_armor_barbarian.png";
import headgearHelmetAlien from "./13headgear/13headgear_helmet_alien.png";
import hedgearBandanaRed from "./13headgear/13hedgear_bandana_red.png";

import accessoryLeftAxeOrc from "./14accessory left/14accessory_left_axe_orc.png";
import accessoryLeftMagicAlien from "./14accessory left/14accessory_left_magic_alien.png";
import accessoryLeftSabreSkeleton from "./14accessory left/14accessory_left_sabre_skeleton.png";
import accessoryLeftSpaceStaff from "./14accessory left/14accessory_left_space_staff.png";
import accessoryLeftSwordBarbarian from "./14accessory left/14accessory_left_sword_barbarian.png";

import accessoryRightShieldBarbarian from "./15accessory right/15accessory_right_shield_barbarian.png";

const createImage = (src) => {
  const img = new Image();
  img.src = src;

  return img;
};

const none = createImage(noneImg);

const bodyParts = {
  back: {
    capeGreen: createImage(backCapeGreen),
    none: none,
  },
  body: {
    blueFemale: createImage(bodyBlueFemale),
    blueMale: createImage(bodyBlueMale),
    greenFemale: createImage(bodyGreenFemale),
    greenMale: createImage(bodyGreenMale),
    skeleton: createImage(bodySkeleton),
    whiteFemale: createImage(bodyWhiteFemale),
    whiteMale: createImage(bodyWhiteMale),
  },
  top: {
    armorBarbarian: createImage(topArmorBarbarian),
    armorOrc: createImage(topArmorOrc),
    suitSpace: createImage(topSuitSpace),
    vestRed: createImage(topVestRed),
    none: none,
  },
  down: {
    armorBarbarian: createImage(downArmorBarbarian),
    orcLoincloth: createImage(downOrcLoincloth),
    suitSpace: createImage(downSuitSpace),
    none: none,
  },
  shoes: {
    barbarian: createImage(shoesBarbarian),
    black: createImage(shoesBlack),
    orcBoots: createImage(shoesOrcBoots),
    suitSpace: createImage(shoesSuitSpace),
    none: none,
  },
  head: {
    blue1: createImage(headBlue1),
    orc: createImage(headOrc),
    skeleton: createImage(headSkeleton),
    white1: createImage(headWhite1),
  },
  eyes: {
    alienBlue: createImage(eyesAlienBlue),
    skeleton: createImage(eyesSkeleton),
    type1Blue: createImage(eyesType1Blue),
    type1Orc: createImage(eyesType1Orc),
    type2Lightblue: createImage(eyesType2Lightblue),
    none: none,
  },
  eyebrows: {
    type1Black: createImage(eyebrowsType1Black),
    type2Black: createImage(eyebrowsType2Black),
    none: none,
  },
  eyegear: {},
  mouth: {
    mouthSmile1: createImage(mouthSmile1),
    none: none,
  },
  hair: {
    blonde1: createImage(hairBlonde1),
    brown1: createImage(hairBrown1),
    ponytail: createImage(hairPonytail),
    none: none,
  },
  facialHair: {
    type1Brown: createImage(facialhairType1Brown),
    none: none,
  },
  headGear: {
    armorBarbarian: createImage(headgearArmorBarbarian),
    helmetAlien: createImage(headgearHelmetAlien),
    bandanaRed: createImage(hedgearBandanaRed),
    none: none,
  },
  accessoryLeft: {
    axeOrc: createImage(accessoryLeftAxeOrc),
    magicAlien: createImage(accessoryLeftMagicAlien),
    sabreSkeleton: createImage(accessoryLeftSabreSkeleton),
    spaceStaff: createImage(accessoryLeftSpaceStaff),
    swordBarbarian: createImage(accessoryLeftSwordBarbarian),
    none: none,
  },
  accessoryRight: {
    shieldBarbarian: createImage(accessoryRightShieldBarbarian),
    none: none,
  },
};

export default bodyParts;
