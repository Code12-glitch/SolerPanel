

import service_img_1 from "@/assets/images/resource/service1.png";
import service_img_2 from "@/assets/images/resource/service2.png";
import service_img_3 from "@/assets/images/resource/service3.png";

import service_icon_1 from "@/assets/images/resource/service-icon1.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";
import { StaticImageData } from "next/image";


interface DetailContent {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  title_2: string;
  categories: string[];
  help_title: string;
  help_info: string;
  phone: string;
  email: string;
}

interface DataType {
  id: number;
  path: string;
  slug: string;
  img: StaticImageData;
  icon: StaticImageData;
  title: string;
  sm_des: string;
  details: DetailContent;
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
    details: {
      title: "Residential Solar PV System Overview",
      sm_des_1: "Residential solar systems are designed to reduce monthly electricity bills, improve energy independence, and lower household carbon emissions. We tailor every installation to the specific roof layout, load profile, and lifestyle needs of the property.",
      sm_des_2: "Our residential solutions are built for long-term performance and comfort, giving homeowners reliable access to clean energy while protecting them from rising utility costs.",
      title_2: "Why homeowners choose this solution",
      categories: ["Grid-tied solar", "Battery-ready systems", "Roof design support", "Energy savings planning"],
      help_title: "Need help choosing your system?",
      help_info: "Our solar consultants can assess your power usage and recommend a setup that fits your home, budget, and future energy goals.",
      phone: "(02) 5555 2020",
      email: "support@solpoweraustralia.com.au",
    },
  },
  {
    id: 2,
    path: "home_1",
    slug: "commercial-solar-pv-system",
    img: service_img_2,
    icon: service_icon_2,
    title: "Commercial Solar PV System",
    sm_des: "It delivers environmentally conscious, efficient and scalable energy solutions, bolstering..",
    details: {
      title: "Commercial Solar PV System Overview",
      sm_des_1: "Commercial solar systems help businesses control operating costs, reduce exposure to rising power prices, and improve sustainability performance. We design each system to match the building's energy profile and usage patterns.",
      sm_des_2: "From smaller commercial facilities to larger operations, our systems are created to deliver dependable generation and long-term value across the business lifecycle.",
      title_2: "Built for business efficiency",
      categories: ["Commercial rooftops", "Energy reduction", "System scalability", "Operational resilience"],
      help_title: "Need a commercial solar strategy?",
      help_info: "Our team can assess your site, energy use, and expansion plans to design a solution that supports your commercial goals.",
      phone: "(02) 5555 2021",
      email: "business@solpoweraustralia.com.au",
    },
  },
  {
    id: 3,
    path: "home_1",
    slug: "hybrid-battery-backup-solar-pv-system",
    img: service_img_3,
    icon: service_icon_3,
    title: "Hybrid Battery Backup Solar PV System",
    sm_des: "It combines advanced battery storage with...",
    details: {
      title: "Hybrid Battery Backup Solar PV System Overview",
      sm_des_1: "Hybrid solar systems combine solar generation and battery storage so your property can capture energy during the day and use it when it is most valuable. This improves self-sufficiency and keeps critical loads protected during outages.",
      sm_des_2: "With intelligent energy management, these systems allow homeowners and businesses to reduce peak demand, store excess production, and maintain power resilience when the grid is unstable.",
      title_2: "Why hybrid backup matters",
      categories: ["Battery storage", "Backup power", "Load shifting", "Energy resilience"],
      help_title: "Need a backup-ready system?",
      help_info: "We can design a hybrid solution that balances cost, reliability, and future energy needs for your property.",
      phone: "(02) 5555 2022",
      email: "backup@solpoweraustralia.com.au",
    },
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