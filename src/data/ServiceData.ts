

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
    img: service_img_1,
    icon: service_icon_1,
    title: "Residential Solar PV System",
    sm_des: "Our Residential Solar PV System is designed to optimally integrate into homes, offering homeowners a pathway to significant cost savings and energy independence while reducing their carbon footprint.",
  },
  {
    id: 2,
    path: "home_1",
    img: service_img_2,
    icon: service_icon_2,
    title: "Commercial Solar PV System",
    sm_des: "Our Commercial Solar PV System delivers environmentally conscious, efficient and scalable energy solutions, bolstering financial sustainability and operational resilience.",
  },
  {
    id: 3,
    path: "home_1",
    img: service_img_3,
    icon: service_icon_3,
    title: "Hybrid Battery Backup Solar PV System",
    sm_des: "Our Hybrid Battery Backup Solar PV System combines advanced battery storage with cutting-edge solar technology, optimising energy usage for both commercial and residential settings along with ensuring uninterrupted power supply during outages.",
  },

  // service
  {
    id: 1,
    path: "service",
    img: service_img_2,
    icon: service_icon_2,
    title: "Roof Solar Panels",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  {
    id: 2,
    path: "service",
    img: service_img_3,
    icon: service_icon_3,
    title: "Commercial Roofing",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },
  {
    id: 3,
    path: "service",
    img: service_img_1,
    icon: service_icon_1,
    title: "Solar Panels Services",
    sm_des: "Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat",
  },


]
export default service_data