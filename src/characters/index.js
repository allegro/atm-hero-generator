import noneImg from "./none.png";

import backBatWings from "./01back/01back_bat_wings.png";
import backCapeGreen from "./01back/01back_cape_green.png";

import bodyBlueFemale from "./02body/02body_blue_female.png";
import bodyBlueMale from "./02body/02body_blue_male.png";
import bodyGreenFemale from "./02body/02body_green_female.png";
import bodyGreenMale from "./02body/02body_green_male.png";
import bodyPaleFemale from "./02body/02body_pale_female.png";
import bodyPaleMale from "./02body/02body_pale_male.png";
import bodySkeleton from "./02body/02body_skeleton.png";
import bodyWhiteFemale from "./02body/02body_white_female.png";
import bodyWhiteMale from "./02body/02body_white_male.png";

import topArmorBarbarian from "./03top/03top_armor_barbarian.png";
import topArmorHunter from "./03top/03top_armor_hunter.png";
import topArmorOrc from "./03top/03top_armor_orc.png";
import topBlackSuit from "./03top/03top_black_suit.png";
import topKnight from "./03top/03top_knight.png";
import topSpaceSuit from "./03top/03top_space_suit.png";
import topSuitSpace from "./03top/03top_suit_space.png";
import topVestRed from "./03top/03top_vest_red.png";

import downArmorBarbarian from "./04down/04down_armor_barbarian.png";
import downKnight from "./04down/04down_knight.png";
import downOrcLoincloth from "./04down/04down_orc_loincloth.png";
import downPantsBlack from "./04down/04down_pants_black.png";
import downPantsBlue from "./04down/04down_pants_blue.png";
import downPantsSpace from "./04down/04down_pants_space.png";
import downSuitSpace from "./04down/04down_suit_space.png";

import shoesBarbarian from "./05shoes/05shoes_barbarian.png";
import shoesBlack from "./05shoes/05shoes_black.png";
import shoesHunterBoots from "./05shoes/05shoes_hunter_boots.png";
import shoesKnight from "./05shoes/05shoes_knight.png";
import shoesOrcBoots from "./05shoes/05shoes_orc_boots.png";
import shoesRed from "./05shoes/05shoes_red.png";
import shoesSilver from "./05shoes/05shoes_silver.png";
import shoesSuitSpace from "./05shoes/05shoes_suit_space.png";

import headBlue1 from "./06head/06head_blue1.png";
import headOrc from "./06head/06head_orc.png";
import headPale from "./06head/06head_pale1.png";
import headSkeleton from "./06head/06head_skeleton.png";
import headWhite1 from "./06head/06head_white1.png";

import eyesAlienBlue from "./07eyes/07eyes_alien_blue.png";
import eyesSkeleton from "./07eyes/07eyes_skeleton.png";
import eyesType1Blue from "./07eyes/07eyes_type1_blue.png";
import eyesType1Orc from "./07eyes/07eyes_type1_orc.png";
import eyesType1Vampire from "./07eyes/07eyes_type1_vampire.png";
import eyesType2Lightblue from "./07eyes/07eyes_type2_lightblue.png";

import eyebrowsType1Black from "./08eyebrows/08eyebrows_type1_black.png";
import eyebrowsType2Black from "./08eyebrows/08eyebrows_type2_black.png";

import mouthSmile1 from "./10mouth/10mouth_smile1.png";

import hairBlonde1 from "./11hair/11hair_blonde1.png";
import hairBrown1 from "./11hair/11hair_brown1.png";
import hairGreyHunter from "./11hair/11hair_grey_hunter.png";
import hairPonytail from "./11hair/11hair_ponytail.png";
import hairVampireBlack from "./11hair/11hair_vampire_black.png";

import facialHairGreyBeard from "./12facial hair/12facialhair_grey_beard.png";
import facialhairType1Brown from "./12facial hair/12facialhair_type1_brown.png";

import headKnightHelmet from "./13headgear/06head_knight_helmet.png";
import headgearArmorBarbarian from "./13headgear/13headgear_armor_barbarian.png";
import headgearHelmetAlien from "./13headgear/13headgear_helmet_alien.png";
import hedgearBandanaRed from "./13headgear/13hedgear_bandana_red.png";

import accessoryLeftAxeOrc from "./14accessory left/14accessory_left_axe_orc.png";
import accessoryLeftMagicAlien from "./14accessory left/14accessory_left_magic_alien.png";
import accessoryLeftSabreSkeleton from "./14accessory left/14accessory_left_sabre_skeleton.png";
import accessoryLeftScythe from "./14accessory left/14accessory_left_scythe.png";
import accessoryLeftSpaceStaff from "./14accessory left/14accessory_left_space_staff.png";
import accessoryLeftSwordBarbarian from "./14accessory left/14accessory_left_sword_barbarian.png";
import accessoryLeftSwordHunter from "./14accessory left/14accessory_left_sword_hunter.png";
import accessoryLeftMaceKnight from "./14accessory left/14accessory_mace_knight.png";

import accessoryRightShieldBarbarian from "./15accessory right/15accessory_right_shield_barbarian.png";
import accessoryRightShield from "./15accessory right/15accessory_right_shield.png";

const createImage = (src) => {
  const img = new Image();
  img.src = src;

  return img;
};

const none = createImage(noneImg);
const EmptyBodyPart = none;

const BodyParts = {
  back: {
    capeGreen: createImage(backCapeGreen),
    batWings: createImage(backBatWings),
    none: none,
  },
  body: {
    blueFemale: createImage(bodyBlueFemale),
    blueMale: createImage(bodyBlueMale),
    greenFemale: createImage(bodyGreenFemale),
    greenMale: createImage(bodyGreenMale),
    paleFemale: createImage(bodyPaleFemale),
    paleMale: createImage(bodyPaleMale),
    skeleton: createImage(bodySkeleton),
    whiteFemale: createImage(bodyWhiteFemale),
    whiteMale: createImage(bodyWhiteMale),
  },
  top: {
    armorBarbarian: createImage(topArmorBarbarian),
    armorHunter: createImage(topArmorHunter),
    armorOrc: createImage(topArmorOrc),
    blackSuit: createImage(topBlackSuit),
    knight: createImage(topKnight),
    spaceSuit: createImage(topSpaceSuit),
    suitSpace: createImage(topSuitSpace),
    vestRed: createImage(topVestRed),
    none: none,
  },
  down: {
    armorBarbarian: createImage(downArmorBarbarian),
    knight: createImage(downKnight),
    orcLoincloth: createImage(downOrcLoincloth),
    pantsBlack: createImage(downPantsBlack),
    pantsBlue: createImage(downPantsBlue),
    pantsSpace: createImage(downPantsSpace),
    suitSpace: createImage(downSuitSpace),
    none: none,
  },
  shoes: {
    barbarian: createImage(shoesBarbarian),
    black: createImage(shoesBlack),
    hunterBoots: createImage(shoesHunterBoots),
    knight: createImage(shoesKnight),
    orcBoots: createImage(shoesOrcBoots),
    red: createImage(shoesRed),
    silver: createImage(shoesSilver),
    suitSpace: createImage(shoesSuitSpace),
    none: none,
  },
  head: {
    blue1: createImage(headBlue1),
    orc: createImage(headOrc),
    pale: createImage(headPale),
    skeleton: createImage(headSkeleton),
    white1: createImage(headWhite1),
  },
  eyes: {
    alienBlue: createImage(eyesAlienBlue),
    skeleton: createImage(eyesSkeleton),
    type1Blue: createImage(eyesType1Blue),
    type1Orc: createImage(eyesType1Orc),
    type1Vampire: createImage(eyesType1Vampire),
    type2Lightblue: createImage(eyesType2Lightblue),
    none: none,
  },
  eyebrows: {
    type1Black: createImage(eyebrowsType1Black),
    type2Black: createImage(eyebrowsType2Black),
    none: none,
  },
  eyegear: { none },
  mouth: {
    mouthSmile1: createImage(mouthSmile1),
    none: none,
  },
  hair: {
    blonde1: createImage(hairBlonde1),
    brown1: createImage(hairBrown1),
    greyHunter: createImage(hairGreyHunter),
    ponytail: createImage(hairPonytail),
    vampireBlack: createImage(hairVampireBlack),
    none: none,
  },
  facialHair: {
    greyBeard: createImage(facialHairGreyBeard),
    type1Brown: createImage(facialhairType1Brown),
    none: none,
  },
  headGear: {
    knightHelmet: createImage(headKnightHelmet),
    armorBarbarian: createImage(headgearArmorBarbarian),
    helmetAlien: createImage(headgearHelmetAlien),
    bandanaRed: createImage(hedgearBandanaRed),
    none: none,
  },
  accessoryLeft: {
    axeOrc: createImage(accessoryLeftAxeOrc),
    magicAlien: createImage(accessoryLeftMagicAlien),
    sabreSkeleton: createImage(accessoryLeftSabreSkeleton),
    scythe: createImage(accessoryLeftScythe),
    spaceStaff: createImage(accessoryLeftSpaceStaff),
    swordBarbarian: createImage(accessoryLeftSwordBarbarian),
    swordHunter: createImage(accessoryLeftSwordHunter),
    maceKnight: createImage(accessoryLeftMaceKnight),
    none: none,
  },
  accessoryRight: {
    shieldBarbarian: createImage(accessoryRightShieldBarbarian),
    shield: createImage(accessoryRightShield),
    none: none,
  },
};

const DefaultBodyParts = {
  back: "none",
  body: "skeleton",
  top: "vestRed",
  down: "none",
  shoes: "suitSpace",
  head: "skeleton",
  eyes: "skeleton",
  eyebrows: "none",
  mouth: "none",
  hair: "none",
  facialHair: "none",
  headGear: "bandanaRed",
  accessoryLeft: "sabreSkeleton",
  accessoryRight: "shieldBarbarian",
};

export { BodyParts, EmptyBodyPart, DefaultBodyParts };
