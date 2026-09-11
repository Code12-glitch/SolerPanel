
import HomeOne from '@/components/homes/home';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Solar Energy Company | Solar Energy System for Home',
  description: 'Solpower Australia Is Your Trusted Local Solar Energy Company, Offering Efficient Solar Energy Systems For Homes. Switch To Smart, Sustainable Solar Solutions Today!',
}


const MainHome = () => {
  return (
    <Wrapper>
      <HomeOne />
    </Wrapper>
  );
};

export default MainHome;