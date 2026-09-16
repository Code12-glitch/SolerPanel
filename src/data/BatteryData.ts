import project_img_1 from "@/assets/images/michelton/1.webp";
import project_img_2 from "@/assets/images/michelton/2.webp";
import project_img_3 from "@/assets/images/michelton/3.webp";
import project_img_4 from "@/assets/images/michelton/4.webp";
import project_img_5 from "@/assets/images/michelton/5.webp";
import project_img_6 from "@/assets/images/michelton/6.webp";
import project_img_7 from "@/assets/images/michelton/7.webp";
import project_img_8 from "@/assets/images/springbrook/1.webp";
import project_img_9 from "@/assets/images/springbrook/2.webp";
import project_img_10 from "@/assets/images/springbrook/3.webp";
import project_img_11 from "@/assets/images/springbrook/4.webp";
import project_img_12 from "@/assets/images/springbrook/5.webp";
import project_img_13 from "@/assets/images/glenvale/1.webp";
import project_img_14 from "@/assets/images/glenvale/2.webp";
import project_img_15 from "@/assets/images/glenvale/3.webp";
import project_img_16 from "@/assets/images/glenvale/4.webp";
import project_img_17 from "@/assets/images/warner/1.webp";
import project_img_18 from "@/assets/images/warner/2.webp";
import project_img_19 from "@/assets/images/warner/3.webp";
import project_img_20 from "@/assets/images/warner/4.webp";
import project_img_21 from "@/assets/images/greenbank1/1.webp";
import project_img_22 from "@/assets/images/greenbank1/2.webp";
import project_img_23 from "@/assets/images/greenbank1/3.webp";
import project_img_24 from "@/assets/images/greenbank1/4.webp";
import project_img_25 from "@/assets/images/carina1/1.webp";
import project_img_26 from "@/assets/images/carina1/2.webp";
import project_img_27 from "@/assets/images/carina1/3.webp";
import project_img_28 from "@/assets/images/carina1/4.webp";
import project_img_29 from "@/assets/images/alberton/1.webp";
import project_img_30 from "@/assets/images/alberton/2.webp";
import project_img_31 from "@/assets/images/pimpama/1.webp";
import project_img_32 from "@/assets/images/pimpama/2.webp";
import project_img_33 from "@/assets/images/hollandpark/1.webp";
import project_img_34 from "@/assets/images/hollandpark/2.webp";
import project_img_35 from "@/assets/images/flagstone2/1.webp";
import project_img_36 from "@/assets/images/flagstone2/2.webp";
import project_img_37 from "@/assets/images/karalee1/1.webp";
import project_img_38 from "@/assets/images/karalee1/2.webp";
import project_img_39 from "@/assets/images/alexandrahills/1.webp";
import project_img_40 from "@/assets/images/laidleyheights/1.webp";
import project_img_41 from "@/assets/images/laidleyheights/2.webp";


import { StaticImageData } from "next/image";

interface DataType {
  id: number;
  images: StaticImageData[];
  name: string;
  title: string;
}

const battery_data: DataType[] = [
  {
    id: 1,
    images: [
      project_img_1,
      project_img_2,
      project_img_3,
      project_img_4,
      project_img_5,
      project_img_6,
      project_img_7,
    ],
    name: "11.4kW System with GoodWe ESA 48kWh Battery Pack in Michelton",
    title: "11.4kW System with GoodWe ESA 48kWh Battery Pack in Michelton",
  },
  {
    id: 2,
    images: [
      project_img_8,
      project_img_9,
      project_img_10,
      project_img_11,
      project_img_12,
    ],
    name: "12.32kW System with Sigenergy 48.36kWh Battery Pack Installed in Springbrook",
    title: "12.32kW System with Sigenergy 48.36kWh Battery Pack Installed in Springbrook",
  },
  {
    id: 3,
    images: [
      project_img_13,
      project_img_14,
      project_img_15,
      project_img_16,
    ],
    name: "13.2kW Solar PV System in Glenvale",
    title: "13.2kW Solar PV System in Glenvale",
  },
  {
    id: 4,
    images: [
      project_img_17,
      project_img_18,
      project_img_19,
      project_img_20,
    ],
    name: "13.2kW System with a Sungrow SBH 40kWh Battery Pack in Warner",
    title: "13.2kW System with a Sungrow SBH 40kWh Battery Pack in Warner",
  },
  {
    id: 5,
    images: [
      project_img_21,
      project_img_22,
      project_img_23,
      project_img_24,
    ],
    name: "13.2kW System with FOX ESS 41.93kWh Battery Pack Installed in Greenbank",
    title: "13.2kW System with FOX ESS 41.93kWh Battery Pack Installed in Greenbank",
  },

  {
    id: 6,
    images: [
      project_img_25,
      project_img_26,
      project_img_27,
      project_img_28,
    ],
    name: "13.2kW System with FOX ESS 41.93kWh Battery Pack in Carina",
    title: "13.2kW System with FOX ESS 41.93kWh Battery Pack in Carina",
  },

  {
    id: 7,
    images: [
      project_img_29,
      project_img_30,
    ],
    name: "Sungrow SBR 16kWh Battery Pack Installed in Alberton",
    title: "Sungrow SBR 16kWh Battery Pack Installed in Alberton",
  },


  {
    id: 8,
    images: [
      project_img_31,
      project_img_32,
    ],
    name: "27.96kWH FOXESS Battery Pack Installed in Pimpama",
    title: "27.96kWH FOXESS Battery Pack Installed in Pimpama",
  },
  {
    id: 9,
    images: [
      project_img_33,
      project_img_34,
    ],
    name: "DC-Coupled GoodWe ESA 41.6kWh Battery Pack Installed in Holland Park West",
    title: "DC-Coupled GoodWe ESA 41.6kWh Battery Pack Installed in Holland Park West",
  },
  {
    id: 10,
    images: [
      project_img_35,
      project_img_36,
    ],
    name: "AC-Coupled FOX ESS 41.93kWh Battery Pack Installed in Flagstone",
    title: "AC-Coupled FOX ESS 41.93kWh Battery Pack Installed in Flagstone",
  },
  {
    id: 11,
    images: [
      project_img_37,
      project_img_38,
    ],
    name: "DC-Coupled Sungrow SBH 40kWh Battery Pack Installed in Karalee",
    title: "DC-Coupled Sungrow SBH 40kWh Battery Pack Installed in Karalee",
  },

  {
    id: 12,
    images: [
      project_img_39,
    ],
    name: "NeoVolt 20.2kWh Battery Pack Installation in Alexandra Hills",
    title: "NeoVolt 20.2kWh Battery Pack Installation in Alexandra Hills",
  },

  {
    id: 13,
    images: [
      project_img_40,
      project_img_41,
    ],
    name: "AC-Coupled FOX ESS 41.93kWh Battery Pack Installed in Laidley Heights",
    title: "AC-Coupled FOX ESS 41.93kWh Battery Pack Installed in Laidley Heights",
  },



  {
    id: 14,
    images: [
      project_img_42,
      project_img_43,
      project_img_44,
      project_img_45,
      project_img_46,
    ],
    name: "6.6kW System Installed in Morayfield",
    title: "6.6kW System Installed in Morayfield",
  },

  {
    id: 15,
    images: [
      project_img_47,
      project_img_48,
      project_img_49,
    ],
    name: "13.2kW System Installed in Munruben",
    title: "13.2kW System Installed in Munruben",
  },



  {
    id: 16,
    images: [
      project_img_50,
      project_img_51,
      project_img_52,
    ],
    name: "6.6kW System Installed in Narangba",
    title: "6.6kW System Installed in Narangba",
  },
  {
    id: 17,
    images: [
      project_img_53,
      project_img_54,
      project_img_55,
      project_img_56,
    ],
    name: "13.2kW System Installed in Redbank Plains",
    title: "13.2kW System Installed in Redbank Plains",
  },
  {
    id: 18,
    images: [
      project_img_57,
      project_img_58,
    ],
    name: "6.6kW System Installed in Rochedale South",
    title: "6.6kW System Installed in Rochedale South",
  },
  {
    id: 19,
    images: [
      project_img_59,
      project_img_60,
    ],
    name: "5kW System Installed in Shailer Park",
    title: "5kW System Installed in Shailer Park",
  },
  {
    id: 20,
    images: [
      project_img_61,
      project_img_62,
      project_img_63,
    ],
    name: "6.6kW System installed in Sunnybank",
    title: "6.6kW System installed in Sunnybank",
  },


  {
    id: 21,
    images: [
      project_img_64,
      project_img_65,
      project_img_66,
      project_img_67,
    ],
    name: "6.6kW System installed in Thornlands",
    title: "6.6kW System installed in Thornlands",
  },


  {
    id: 22,
    images: [
      project_img_68,
      project_img_69,
      project_img_70,
    ],
    name: "13.2kW System Installed In Toowong",
    title: "13.2kW System Installed In Toowong",
  },

  {
    id: 23,
    images: [
      project_img_71,
      project_img_72,
      project_img_73,
      project_img_74,
    ],
    name: "6.6kW System Installed in Toowoomba",
    title: "6.6kW System Installed in Toowoomba",
  },

  {
    id: 24,
    images: [
      project_img_75,
      project_img_76,
    ],
    name: "6.6kW System Installed in Victoria Point",
    title: "6.6kW System Installed in Victoria Point",
  },
  {
    id: 25,
    images: [
      project_img_77,
      project_img_78,
    ],
    name: "13.2kW System Installed in Victoria Point",
    title: "13.2kW System Installed in Victoria Point",
  },
  {
    id: 26,
    images: [
      project_img_79,
      project_img_80,
      project_img_81,
    ],
    name: "13.2kW System Installed in Victoria Point (GoodWe)",
    title: "13.2kW System Installed in Victoria Point (GoodWe)",
  },
  {
    id: 27,
    images: [
      project_img_82,
      project_img_83,
      project_img_84,
      project_img_85,
      project_img_86,
    ],
    name: "6.6kW System Installed in Waterford West",
    title: "6.6kW System Installed in Waterford West",
  },
  {
    id: 28,
    images: [
      project_img_87,
      project_img_88,
    ],
    name: "5kW System Installed in West Ipswich",
    title: "5kW System Installed in West Ipswich",
  },

  {
    id: 29,
    images: [
      project_img_89,
      project_img_90,
    ],
    name: "6.6kW System Installed in Yarrabilba",
    title: "6.6kW System Installed in Yarrabilba",
  },


];
export default battery_data;