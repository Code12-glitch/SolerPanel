import React from "react";

import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import SubscribeAreaHomeOne from "../homes/home/SubscribeAreaHomeOne";

import InvertersArea from "./InvertersArea";

const Inverters = () => {
  return (
    <>
      <HeaderOne />

      <main>
        <Breadcrumb
          top_title="Inverters"
          title="Inverters"
        />

        <InvertersArea />

        <SubscribeAreaHomeOne />
      </main>

      <FooterOne />
    </>
  );
};

export default Inverters;