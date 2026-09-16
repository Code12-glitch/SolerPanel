import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import GridSystemsArea from "./GridSystemsArea";
import SubscribeAreaHomeOne from "../homes/home/SubscribeAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

const GridSystems = () => {
  return (
    <>
      <HeaderOne />

      <main>
        <Breadcrumb
          top_title="Grid Connected Systems"
          title="Grid Connected Systems"
        />

        <GridSystemsArea />

        <SubscribeAreaHomeOne />
      </main>

      <FooterOne />
    </>
  );
};

export default GridSystems;