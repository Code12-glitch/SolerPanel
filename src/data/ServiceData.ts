

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

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface DetailContent {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  title_2: string;
  sm_des_3?: string;
  feature_list?: string[];
  sm_des_before_title_3?: string;
  title_3?: string;
  sm_des_4?: string;
  feature_list_2?: string[];
  sm_des_5?: string;
  sm_des_before_title_4?: string;
  title_4?: string;
  sm_des_6?: string;
  feature_list_3?: string[];
  sm_des_7?: string;
  title_5?: string;
  feature_list_4?: string[];
  title_6?: string;
  faq?: FaqItem[];
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
      title_5: "FAQ's",
      faq: [
        {
          id: "One",
          question: "What is Residential Solar PV System?",
          answer: "A residential solar PV system uses rooftop panels to capture sunlight and convert it into electricity for your home. It reduces power bills and can feed excess energy back into the grid.",
        },
        {
          id: "Two",
          question: "How much can I save with home solar?",
          answer: "Savings depend on system size, energy usage and roof orientation. Most households see meaningful reductions in power bills, especially with daytime generation and smart energy use patterns.",
        },
        {
          id: "Three",
          question: "Do you assess my home before quoting?",
          answer: "Yes. We conduct a site assessment to understand roof direction, shading and household energy needs. That ensures your quote and system design are just right for your home.",
        },
        {
          id: "Four",
          question: "Are residential solar systems eligible for rebates?",
          answer: "Generally, yes — most homeowners qualify for small-scale technology certificates or government rebates. We handle the documentation and help you access eligible incentives to lower your upfront cost.",
        },
      ],
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
      title: "Sun-Powered Success for Your Business with SOLPOWER AUSTRALIA",
      sm_des_1: "Due to the rocketing power prices, many companies struggle to keep their profit margin high, because it is one of the biggest expenditures for businesses. The best solution for this is to get a commercial solar system, as the government is incentivising it and also prices are dropping.",
      sm_des_2: "Commercial solar power offers a solid ROI to any business, due to different factors, such as a lower carbon footprint, peak solar power generation and usage usually occurs in peak and shoulder electricity periods, future-proofing against energy prices rise, a significant reduction in energy cost, its very long lifespan of more than 25 years, etc. It also provides business tax benefits and possible depreciation for your business, particularly through the present instant $20k government tax write-off.",
      title_2: "The following businesses can get the Solar PV System",
      feature_list: [
        "Child cares",
        "Warehouses",
        "Fuel stations",
        "Schools",
        "Medical Centres",
        "Shopping complexes",
        "Offices",
        "Poultry or Fish Farms",
        "Clubs",
        "Small Businesses",
        "Working Sheds",
        "Gyms",
        "Factories",
      ],
      title_3: "Who would benefit from a commercial solar system?",
      sm_des_4: "Various types of businesses can greatly benefit from commercial solar power installation. Some instances are:",
      feature_list_2: [
        "Manufacturing Facilities: Manufacturing businesses can offset a huge portion of their electricity consumption, leading to considerable cost saving with commercial solar panels installation.",
        "Distribution Centres and Warehouses: Solar power can help offset electricity needs for warehouse and distribution centres, thus reducing operational costs.",
        "Shopping Centres and Retail Stores: Retail businesses, including shopping centres, supermarkets and small shops can utilise the generated solar power to offset their electricity demand as they have consistent energy consumption throughout the day.",
        "Resorts and Hotels: With a commercial solar system, these businesses can promote their commitment to sustainable practices and reduce their energy costs, attracting eco-conscious guests.",
        "Office Buildings: Office buildings, including business parks, office complexes, and corporate headquarters, can benefit from commercial solar installation.",
        "Educational Institutions: Solar systems can help educational institutions allocate more resources to educational programs and reduce electricity costs.",
        "Agricultural Operations: Solar panels can help power irrigation systems, lighting for agricultural equipment and greenhouses, lowering operational costs and reducing reliance on the grid.",
      ],
      title_4: "How to select the right commercial solar system?",
      sm_des_6: "It is crucial to choose the right installer because this decision will impact environmental benefits and long-term saving along with affecting your system’s performance.",
      feature_list_3: [
        "Experience: You should check if the commercial solar panels company is able to handle any challenges that may arise along the way and knows everything about solar technology.",
        "Accreditation: Make sure the commercial solar system installer you select is accredited by known organisations to ensure they meet industry standards for quality and safety.",
        "Quality: Ensure the company uses top-quality products. Everything from batteries, solar panels, inverters to other products, should be of top quality.",
        "Ongoing Support: Select the best commercial solar power companies who provide prompt and comprehensive after-sale support.",
        "Pricing: Look for a commercial solar panel installer who offers top quality products at a fair price.",
        "Online Reviews: Ask for honest feedback and references from previous clients to gauge the quality of service being offered.",
      ],
      
      title_5: "Why Choose Us as Your Commercial Solar System Provider?",
      sm_des_7: "Choosing the right partner for your solar investment is crucial. Here’s why SOLPOWER AUSTRALIA stand out:",
      feature_list_4: [
        "Quality Products: We use only top-tier solar panels and equipment to ensure long-term performance and reliability.",
        "Cost Savings: Our systems are designed to maximise energy savings, reduce utility bills, and offer a strong return on investment.",
        "Full-Service Support: From consultation and design to installation and maintenance, as one of the leading commercial solar companies we handle everything so you can focus on your business.",
        "Sustainability Commitment: Partnering with us means aligning with a company dedicated to environmental responsibility and a cleaner future.",
        "Start Saving with Solar – Contact Us Now!",
      ],
      title_6: "FAQ's",
      faq: [
        {
          id: "One",
          question: "What is commercial solar PV System?",
          answer: "Commercial solar PV systems are larger-scale solar installations for businesses, warehouses, farms or offices. They generate clean energy on site to cut electricity costs and lower your business’s carbon footprint.",
        },
        {
          id: "Two",
          question: "How do commercial solar savings work?",
          answer: "You save by generating your own electricity rather than buying it. Reduced grid reliance can mean significant cost savings, especially with high daytime power use and peak demand charges.",
        },
        {
          id: "Three",
          question: "Will SolPower help with system design and approvals?",
          answer: "Yes. We tailor designs for your business site and handle necessary council or energy provider approvals. Our team ensures the system meets safety, performance and compliance requirements.",
        },
        {
          id: "Four",
          question: "What size system suits my business?",
          answer: "System size depends on your energy consumption, roof space and goals. We analyse usage patterns and roof capacity to recommend a fit-for-purpose system that maximises return on investment.",
        },
      ],
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
      title: "Power Smarter with Our Hybrid Solar PV Solutions",
      sm_des_1: "A Hybrid Solar PV System is a setup of a storage-ready and grid-connected apparatus. It is an excellent way to be in control of your energy supply. This type of system stays connected to the main grid like a traditional grid-tied solar PV system but features a specialised hybrid solar inverter with battery backup, allowing it to store excess energy and deliver an uninterrupted power supply during the day, at night, during blackouts, and in the event of grid failure.",
      sm_des_2: "At SOLPOWER AUSTRALIA, our experienced solar experts can work closely with you to understand your needs for the hybrid/battery-ready solar system and accordingly suggest the right size system. We offer only the highest quality products and the best service at a competitive price.",
      title_2: "What are the advantages of hybrid solar inverters with battery backup?",
      sm_des_3: "Some advantages of hybrid solar inverter with battery backup are:",
      feature_list: [
        "Energy Storage: Hybrid solar inverters store excess solar energy in a battery for use on cloudy days or at night instead of relying on costly electricity from the grid.",
        "Backup Power: With a backup box and battery installed, hybrid inverters can keep vital appliances running during power outages.",
        "Lower Energy Bills: Using less power from the grid and more solar power significantly cuts down electricity costs.",
        "Flexibility: They are battery-ready, making it easy to down the track or add battery storage at installation.",
        "Better Energy Management: Hybrid inverter solar can prioritise where energy goes to maximise a system’s efficiency—exporting to the grid, charging the battery, or powering the home first.",
        "Reduced Carbon Footprint: Relying less on grid power and more on renewable solar energy makes a home more environmentally friendly.",
        "Easier Maintenance and Installation: The single unit is less complex and quick to install and simpler to maintain because it has fewer parts.",
      ],
      sm_des_before_title_3: "Hybrid solar inverter with battery backup ensures uninterrupted power and maximum energy efficiency. SOLPOWER AUSTRALIA is your trusted provider for reliable and efficient Hybrid Solar PV Systems.",
      title_3: "How to Select the Right Hybrid Solar Inverter with battery backup?",
      sm_des_4: "Some factors to consider while selecting a hybrid solar inverter with battery backup are:",
      feature_list_2: [
        "The capacity to handle the home’s energy usage, considering cooling, heating, appliances, and future energy demands like battery storage and electric vehicles.",
        "The ability to match the size of the solar system and high energy efficiency for maximum savings.",
        "Battery designed for easy upgrades.",
        "For your sense of peace a long warranty i.e. 10 years or more.",
        "A proven track record of reliability and quality",
        "Reliable local customer support offering expert guidance.",
      ],
      sm_des_before_title_4: "A hybrid solar inverter with battery backup provides seamless power during outages.",     
      title_4: "Why Choose Us?",
      sm_des_6: "Choosing the right partner for your Hybrid Solar PV System is critical to maximising performance, savings, and peace of mind.",
      feature_list_3: [
        "SOLPOWER AUSTRALIA stands out with our deep expertise, high-quality components, and customer-first approach.",
        "Our hybrid solar solutions are tailored to meet your unique energy needs, blending solar and battery technology for optimal efficiency and reliability.",
        "We prioritise durability and flexibility, offering battery solutions designed for easy upgrades as your energy demands grow.",
        "Our team of certified professionals ensures seamless installation and system integration with minimal disruption.",
        "What truly sets us apart is our strong local customer support—ready to provide expert advice and fast assistance whenever you need it.",
        "By choosing us, you’re not just investing in solar power; you’re partnering with a trusted energy expert committed to sustainability, innovation, and long-term value.",
      ],
      sm_des_7: "Let us help you take control of your energy future with confidence and clarity.", 
      faq: [
        {
          id: "One",
          question: "What is a hybrid battery backup solar system?",
          answer: "Hybrid systems combine solar panels with battery storage. They store excess solar energy for later use, giving you power when the sun isn’t shining and backup during grid outages.",
        },
        {
          id: "Two",
          question: "What are the benefits of adding a battery?",
          answer: "A battery boosts self-consumption of your solar energy, cuts reliance on the grid, offers backup during blackouts and enhances savings by shifting usage to stored power at peak tariff times.",
        },
        {
          id: "Three",
          question: "How long do batteries typically last?",
          answer: "Battery life varies by brand, size and usage. Most are designed for many years of daily cycling, with performance warranties and capacity expectations that we explain clearly before installation.",
        },
        {
          id: "Four",
          question: "Do I still get power at night with a hybrid system?",
          answer: "Yes — if your battery is charged. The system uses stored solar energy at night or during low-sun periods, reducing grid use and keeping essential appliances running when needed.",
        },
      ],
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