
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ServiceDetailsArea from './ProductDetailsArea';
import ServiceAreaHomeOne from '../homes/home/ServiceAreaHomeOne';
import SubscribeAreaHomeOne from '../homes/home/SubscribeAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const ServiceDetails = ({ service }: { service?: any }) => {
  const pageTitle = service ? service.title : 'Service Details';

  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title={pageTitle} title={pageTitle} />
        <ServiceDetailsArea service={service} />
        <ServiceAreaHomeOne style_2={true} />
        <SubscribeAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default ServiceDetails;