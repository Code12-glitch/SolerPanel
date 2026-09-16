import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import BatteryArea from "./BatteryArea";
import SubscribeAreaHomeOne from "../homes/home/SubscribeAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

const Battery = () => {
  return (
    <>
      <HeaderOne />

      <main>
        <Breadcrumb
          top_title="Battery"
          title="Battery"
        />

        <BatteryArea />

        <SubscribeAreaHomeOne />
      </main>

      <FooterOne />
    </>
  );
};

export default Battery;