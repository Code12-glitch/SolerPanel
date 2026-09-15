

import service_img_1 from "@/assets/images/resource/service1.png";
import service_img_2 from "@/assets/images/resource/service2.png";
import service_img_3 from "@/assets/images/resource/service3.png";

import service_icon_1 from "@/assets/images/resource/service-icon1.png";
import service_icon_2 from "@/assets/images/resource/service-icon2.png";
import service_icon_3 from "@/assets/images/resource/service-icon3.png";
import { StaticImageData } from "next/image";


interface CategoryLink {
  title: string;
  slug: string;
}

interface DetailContent {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  title_2: string;
  sm_des_3?: string;
  feature_list?: string[];
  title_3?: string;
  sm_des_4?: string;
  feature_list_2?: string[];
  sm_des_5?: string;
  title_4?: string;
  sm_des_6?: string;
  feature_list_3?: string[];
  sm_des_7?: string;
  categories: CategoryLink[];
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
      title: "Transform Your Home with Clean, Affordable Solar Power",
      sm_des_1: "One of the biggest expenses in households are usually power bills. Fortunately one can opt for Residential solar PV system, as clients can get government rebates on it. Designed to help you cut power bills—instead of wasting money, generate your own energy efficiently. At SOLPOWER AUSTRALIA, our qualified solar experts work closely with our clients to understand their needs for the residential solar system and thus suggest the right solar power system for home.",
      sm_des_2: "We provide the best service and top quality products at a competitive price. Most inverts come with 10 years of product warranty and residential solar modules come with 25-30 years of performance and product warranty. In addition, we offer a 10-year workmanship warranty on all system installations.",
      title_2: "Benefits of solar power system for home",
      sm_des_3: "Residential solar panels are guaranteed to last, require minimal maintenance, and are easy to fit. Some advantages are mentioned below:",
      feature_list: [
        "Reduce Carbon Footprint: Solar power systems for home don’t release any CO2 (carbon dioxide) or other pollutants and the majorly Solar PV panels are made using silicon which comes from sand, one of the most earths’ abundant resources.",
        "Inflation Linked Tax Free Income for 20 Years: Investing in solar PV ensures a guaranteed, inflation-linked, tax-free income for the next 20 years with the help of government-backed feed-in tariff.",
        "Lessen Your Energy Bills: You can use all the electricity your home solar energy system generates — completely free of charge.",
        "Minimum maintenance and Long System Life: With a proven track record, residential solar panel systems require little maintenance and are very reliable as they have no moving parts.",
      ],
      title_3: "What factors should I look for in a solar solutions provider?",
      sm_des_4: "It is essential that you know exactly who you are buying from and what are you paying for, as solar installation are a major investment.",
      feature_list_2: [
        "Customer Service: Does the agency have a local office, have a support contact number, are easy to talk to?",
        "Your Needs: Someone from their solar team should visit your home to know about your home needs, based on the roof condition, the location, household electricity usage habits, and aspects, whether an upgrade will be needed for your electrical meter, and so on.",
        "Warranties: Be sure to clearly understand the warranty terms. Individual components may also include additional manufacturer-backed product warranties.",
      ],
      sm_des_5: "Power your home with confidence—choose a trusted provider for your solar power system for home. Cut your energy bills with SOLPOWER AUSTRALIA.",
      title_4: "Why Choose Us for Your Solar Power System for Home?",
      sm_des_6: "Choosing the right solar provider is key to maximising your investment. Here’s why homeowners trust us:",
      feature_list_3: [
        "Expert Installation: Our SAA certified installers ensure every system is fitted to the highest standards for safety, efficiency, and performance.",
        "10-Year Workmanship Warranty: We back every installation with a decade-long workmanship warranty for added peace of mind.",
        "Tailored Solar Solutions: We design systems to match your energy needs, roof space, and budget—no one-size-fits-all approach.",
        "Government Rebate Support: We handle all paperwork to secure eligible rebates and incentives for the SOlar PV System and Battery on your behalf.",
        "Free Energy from Day One: Start using clean, free electricity as soon as your system is live.",
      ],
      sm_des_7: "Trust us to power your home with reliable, sustainable energy.",
      
      categories: [
        { title: "Residential Solar PV System", slug: "residential-solar-pv-system" },
        { title: "Commercial Solar PV System", slug: "commercial-solar-pv-system" },
        { title: "Hybrid Battery Backup Solar PV System", slug: "hybrid-battery-backup-solar-pv-system" },
      ],
      help_title: "Need help choosing your system?",
      help_info: "Our solar consultants can assess your power usage and recommend a setup that fits your home, budget, and future energy goals.",
      phone: "1800 979 707",
      email: "info@solpoweraustralia.com.au",
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
      categories: [
        { title: "Residential Solar PV System", slug: "residential-solar-pv-system" },
        { title: "Commercial Solar PV System", slug: "commercial-solar-pv-system" },
        { title: "Hybrid Battery Backup Solar PV System", slug: "hybrid-battery-backup-solar-pv-system" },
      ],
      help_title: "Need a commercial solar strategy?",
      help_info: "Our team can assess your site, energy use, and expansion plans to design a solution that supports your commercial goals.",
      phone: "1800 979 707",
      email: "info@solpoweraustralia.com.au",
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
      categories: [
        { title: "Residential Solar PV System", slug: "residential-solar-pv-system" },
        { title: "Commercial Solar PV System", slug: "commercial-solar-pv-system" },
        { title: "Hybrid Battery Backup Solar PV System", slug: "hybrid-battery-backup-solar-pv-system" },
      ],
      help_title: "Need a backup-ready system?",
      help_info: "We can design a hybrid solution that balances cost, reliability, and future energy needs for your property.",
      phone: "1800 979 707",
      email: "info@solpoweraustralia.com.au",
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