
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import HeroAreaHomeOne from './HeroAreaHomeOne';
import AboutAreaHomeOne from './AboutAreaHomeOne';
import ServiceAreaHomeOne from './ServiceAreaHomeOne';
import CtaAreaHomeOne from './CtaAreaHomeOne';
import PricingAreaHomeOne from './PricingAreaHomeOne';
import VedioAreaHomeOne from './VedioAreaHomeOne';
import ContactAreaHomeOne from './ContactAreaHomeOne';
import ProtfolioAreaHomeOne from './ProtfolioAreaHomeOne';
import OfferAreaHomeOne from './OfferAreaHomeOne';
import SolarEnergyHomeOne from './SolarEnergyHomeOne';
import AppointmentAreaHomeOne from './AppointmentAreaHomeOne';
import BlogAreaHomeOne from './BlogAreaHomeOne';
import SubscribeAreaHomeOne from './SubscribeAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne'; 
import SolarProcessHomeOne from './SolarProcessHomeOne';
import FinanceQuoteHomeOne from "@/components/homes/home/FinanceQuoteHomeOne";
import SolarPackagesArea from "./SolarPackagesArea";
import SolarBrandsArea from "./SolarBrandsArea";
import GoogleReviewsArea from "./GoogleReviewsArea";
import FAQArea from "./FAQArea";

const HomeOne = () => {
  
  return (
    <>
      <HeaderOne />
      <main>
        <HeroAreaHomeOne />
        <AboutAreaHomeOne />
        <ServiceAreaHomeOne />
        <SolarEnergyHomeOne />
        <SolarProcessHomeOne />
        <FinanceQuoteHomeOne />
        <ContactAreaHomeOne />
        <SolarPackagesArea />
        <SolarBrandsArea />
        <VedioAreaHomeOne />
        <ProtfolioAreaHomeOne />
        <OfferAreaHomeOne />
        <GoogleReviewsArea />
        <FAQArea />
        <CtaAreaHomeOne />
        <BlogAreaHomeOne />
        <SubscribeAreaHomeOne />
      </main>
      <FooterOne /> 
    </>
  );
};

export default HomeOne;