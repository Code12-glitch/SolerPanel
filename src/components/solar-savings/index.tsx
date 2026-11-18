
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import SolarSavingsHomeOne from '@/components/homes/home/SolarSavingsHomeOne';


const SolarSavings = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Solar Savings" title="Solar Savings" />
        <SolarSavingsHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default SolarSavings;