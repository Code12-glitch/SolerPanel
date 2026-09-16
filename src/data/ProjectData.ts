import project_img_1 from "@/assets/images/blackbuttsouth/1.jpg";
import project_img_2 from "@/assets/images/blackbuttsouth/2.jpg";
import project_img_3 from "@/assets/images/blackbuttsouth/3.jpg";
import project_img_4 from "@/assets/images/boondall/1.webp";
import project_img_5 from "@/assets/images/boondall/2.webp";
import project_img_6 from "@/assets/images/boondall/3.webp";
import project_img_7 from "@/assets/images/carina/1.webp";
import project_img_8 from "@/assets/images/carina/2.webp";
import project_img_9 from "@/assets/images/carina/3.webp";
import project_img_10 from "@/assets/images/daisyhill/1.webp";
import project_img_11 from "@/assets/images/daisyhill/2.webp";
import project_img_12 from "@/assets/images/daisyhill/3.webp";
import project_img_13 from "@/assets/images/deceptionbay/1.webp";
import project_img_14 from "@/assets/images/deceptionbay/2.webp";
import project_img_15 from "@/assets/images/deceptionbay/3.webp";
import project_img_16 from "@/assets/images/deceptionbay/4.webp";
import project_img_17 from "@/assets/images/deceptionbay/5.webp";
import project_img_18 from "@/assets/images/deceptionbay/6.webp";
import project_img_19 from "@/assets/images/flagstone/1.webp";
import project_img_20 from "@/assets/images/flagstone/2.webp";
import project_img_21 from "@/assets/images/flagstone1/1.webp";
import project_img_22 from "@/assets/images/flagstone1/2.webp";

import { StaticImageData } from "next/image";

interface DataType {
  id: number;
  images: StaticImageData[];
  name: string;
  title: string;
}

const project_data: DataType[] = [
  {
    id: 1,
    images: [
      project_img_2,
      project_img_1,
      project_img_3,
    ],
    name: "6.6kW System Installed in Blackbutt South",
    title: "6.6kW System Installed in Blackbutt South",
  },
  {
    id: 2,
    images: [
      project_img_4,
      project_img_5,
      project_img_6,
    ],
    name: "6.6kW System Installed in Boondall",
    title: "6.6kW System Installed in Boondall",
  },
  {
    id: 3,
    images: [
      project_img_7,
      project_img_8,
      project_img_9,
    ],
    name: "6.6kW System Installed in Carina",
    title: "6.6kW System Installed in Carina",
  },
  {
    id: 4,
    images: [
      project_img_10,
      project_img_11,
      project_img_12,
    ],
    name: "6.6kW System Installed in Daisy Hill",
    title: "6.6kW System Installed in Daisy Hill",
  },
  {
    id: 5,
    images: [
      project_img_13,
      project_img_14,
      project_img_15,
      project_img_16,
      project_img_17,
      project_img_18,
    ],
    name: "13.2kW System Installed in Deception Bay",
    title: "13.2kW System Installed in Deception Bay",
  },
  
  {
    id: 6,
    images: [
      project_img_19,
      project_img_20,
    ],
    name: "13.2kW System Installed in Flagstone",
    title: "13.2kW System Installed in Flagstone",
  },
  
  {
    id: 7,
    images: [
      project_img_21,
      project_img_22,
    ],
    name: "13.2kW System in Flagstone with Sungrow Hybrid Inverter",
    title: "13.2kW System in Flagstone with Sungrow Hybrid Inverter",
  },
  
];

export default project_data;