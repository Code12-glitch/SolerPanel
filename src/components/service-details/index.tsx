
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import ServiceDetailsArea from './ServiceDetailsArea';
import ServiceAreaHomeOne from '../homes/home/ServiceAreaHomeOne';
import SubscribeAreaHomeOne from '../homes/home/SubscribeAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';

const ServiceDetails = ({ service }: { service?: any }) => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title='Service Details' title={service ? service.title : 'Service Details'} />
        <ServiceDetailsArea service={service} />
        <ServiceAreaHomeOne style_2={true} />
        <SubscribeAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default ServiceDetails;