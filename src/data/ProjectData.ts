import project_img_1 from "@/assets/images/project/project1.png";
import project_img_2 from "@/assets/images/project/project2.png";
import project_img_3 from "@/assets/images/project/project3.png";
import project_img_4 from "@/assets/images/project/project4.png";
import project_img_5 from "@/assets/images/project/project5.png";
import project_img_6 from "@/assets/images/project/project6.png";

import { StaticImageData } from "next/image";

interface DataType {
  id: number;
  images: StaticImageData[];
  name: string;
  title: string;
  category: string;
}

const project_data: DataType[] = [
  {
    id: 1,
    images: [project_img_1, project_img_2, project_img_3],
    name: "Chain Finance Program",
    title: "ECO, Supply Chain",
    category: "Grid-Connected Systems",
  },

  {
    id: 2,
    images: [project_img_4, project_img_5],
    name: "New Public Attitude Tracker",
    title: "Digital Product",
    category: "Energy",
  },

  {
    id: 3,
    images: [project_img_6],
    name: "Smarter Ways to Manage",
    title: "ECO, Supply Chain",
    category: "Finance",
  },

  {
    id: 4,
    images: [project_img_1, project_img_6, project_img_4],
    name: "Task Management",
    title: "Creative Work",
    category: "Supply Chain",
  },

  {
    id: 5,
    images: [project_img_2],
    name: "Addressing Wind Energy",
    title: "ECO, Supply Chain",
    category: "Business",
  },

  {
    id: 6,
    images: [project_img_1, project_img_2, project_img_3],
    name: "Historical Book Design",
    title: "Finance, Supply",
    category: "Energy",
  },

  {
    id: 7,
    images: [project_img_1, project_img_2, project_img_3],
    name: "Chain Finance Program",
    title: "ECO, Supply Chain",
    category: "Business",
  },

  {
    id: 8,
    images: [project_img_5],
    name: "New Public Attitude Tracker",
    title: "Digital Product",
    category: "Supply Chain",
  },

  {
    id: 9,
    images: [project_img_6],
    name: "Smarter Ways to Manage",
    title: "ECO, Supply Chain",
    category: "Finance",
  },

  {
    id: 10,
    images: [project_img_1],
    name: "Task Management",
    title: "Creative Work",
    category: "Supply Chain",
  },

  {
    id: 11,
    images: [project_img_2],
    name: "Addressing Wind Energy",
    title: "ECO, Supply Chain",
    category: "Business",
  },

  {
    id: 12,
    images: [project_img_3],
    name: "Historical Book Design",
    title: "Finance, Supply",
    category: "Energy",
  },

  {
    id: 13,
    images: [project_img_6],
    name: "Smarter Ways to Manage",
    title: "ECO, Supply Chain",
    category: "Supply Chain",
  },

  {
    id: 14,
    images: [project_img_1],
    name: "Task Management",
    title: "Creative Work",
    category: "Energy",
  },

  {
    id: 15,
    images: [project_img_2],
    name: "Addressing Wind Energy",
    title: "ECO, Supply Chain",
    category: "Energy",
  },

  {
    id: 16,
    images: [project_img_3],
    name: "Historical Book Design",
    title: "Finance, Supply",
    category: "Business",
  },

  {
    id: 17,
    images: [project_img_2],
    name: "New Public Attitude Tracker",
    title: "Digital Product",
    category: "Finance",
  },

  {
    id: 18,
    images: [project_img_3],
    name: "Smarter Ways to Manage",
    title: "ECO, Supply Chain",
    category: "Supply Chain",
  },
];

export default project_data;