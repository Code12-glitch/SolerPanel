
import BatterySystems from "@/components/battery-systems";
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Battery Systems',
  // description: 'The Solar Panel React Next js template is a modern and responsive design specifically created for websites related to solar energy and renewable energy solutions',
}



const BatterySystemsPage = () => {
  return (
    <Wrapper>
      <BatterySystems />
    </Wrapper>
  );
};

export default BatterySystemsPage;