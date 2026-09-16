import React from "react";

import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import SubscribeAreaHomeOne from "../homes/home/SubscribeAreaHomeOne";

import PanelsArea from "./PanelsArea";

const Panels = () => {
  return (
    <>
      <HeaderOne />

      <main>
        <Breadcrumb
          top_title="Solar Panels"
          title="Solar Panels"
        />

        <PanelsArea />

        <SubscribeAreaHomeOne />
      </main>

      <FooterOne />
    </>
  );
};

export default Panels;