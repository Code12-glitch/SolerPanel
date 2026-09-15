import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import GridConnectedSystemsArea from './GridConnectedSystemsArea';
import FooterOne from '@/layouts/footers/FooterOne';

const GridConnectedSystemsArea = () => {
  return (
    <>
      <HeaderOne />

      <main>
        <Breadcrumb
          top_title="Grid-Connected Systems"
          title="Grid-Connected Systems"
        />

        <GridConnectedSystemsArea />
      </main>

      <FooterOne />
    </>
  );
};

export default GridConnectedSystemsArea;