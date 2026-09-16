
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import GridConnectedSystemsArea from "@/components/grid-connected-systems";
import GridConnectedSystemsArea from "./GridConnectedSystemsArea";
import SubscribeAreaHomeOne from '../homes/home/SubscribeAreaHomeOne';
import FooterOne from '@/layouts/footers/FooterOne';


const ProjectGrid = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Grid Connected Systems" title="Grid Connected Systems" />
        <GridConnectedSystemsArea />
        <SubscribeAreaHomeOne />
      </main>
      <FooterOne />
    </>
  );
};

export default GridConnectedSystemsArea;