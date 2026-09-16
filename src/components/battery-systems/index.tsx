import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import BatterySystemsArea from "./BatterySystemsArea";
import SubscribeAreaHomeOne from "../homes/home/SubscribeAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

const BatterySystems = () => {
  return (
    <>
      <HeaderOne />

      <main>
        <Breadcrumb
          top_title="Battery Systems"
          title="Battery Systems"
        />

        <BatterySystemsArea />

        <SubscribeAreaHomeOne />
      </main>

      <FooterOne />
    </>
  );
};

export default BatterySystems;