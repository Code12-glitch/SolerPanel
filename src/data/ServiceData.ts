

import service_img_1 from "@/assets/images/resource/service1.png";
import service_img_2 from "@/assets/images/resource/service2.png";
import service_img_3 from "@/assets/images/resource/service3.png";

import service_icon_1 from "@/assets/images/resource/service-icon1.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";
import { StaticImageData } from "next/image";


interface DataType {
  id: number;
  path: string;
  slug: string;
  img: StaticImageData;
  icon: StaticImageData;
  title: string;
  sm_des: string;
}



const service_data: DataType[] = [
  // home 01
  {
    id: 1,
    path: "home_1",
    slug: "residential-solar-pv-system",
    img: service_img_1,
    icon: service_icon_1,
    title: "Residential Solar PV System",
    sm_des: "It is designed to optimally integrate into homes, offering homeowners a pathway...",
  },
  {
    id: 2,
    path: "home_1",
    slug: "commercial-solar-pv-system",
    img: service_img_2,
    icon: service_icon_2,
    title: "Commercial Solar PV System",
    sm_des: "It delivers environmentally conscious, efficient and scalable energy solutions, bolstering..",
  },
  {
    id: 3,
    path: "home_1",
    slug: "hybrid-battery-backup-solar-pv-system",
    img: service_img_3,
    icon: service_icon_3,
    title: "Hybrid Battery Backup Solar PV System",
    sm_des: "It combines advanced battery storage with...",
  },

  // service
   // {
  //   id: 1,
  //   path: "service",
  //   img: service_img_2,
  //   icon: service_icon_2,
  //   title: "Roof Solar Panels",
  //   sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  // },
  // {
  //   id: 2,
  //   path: "service",
  //   img: service_img_3,
  //   icon: service_icon_3,
  //   title: "Commercial Roofing",
  //   sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  // },
  // {
  //   id: 3,
  //   path: "service",
  //   img: service_img_1,
  //   icon: service_icon_1,
  //   title: "Solar Panels Services",
  //   sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  // },


]
export default service_data