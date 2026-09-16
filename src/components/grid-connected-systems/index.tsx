import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import GridArea from "./GridArea";
import SubscribeAreaHomeOne from "../homes/home/SubscribeAreaHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";

const ProjectGrid = () => {
  return (
    <>
      <HeaderOne />

      <main>
        <Breadcrumb
          top_title="Grid Connected Systems"
          title="Grid Connected Systems"
        />

        <ProjectGridArea />

        <SubscribeAreaHomeOne />
      </main>

      <FooterOne />
    </>
  );
};

export default ProjectGrid;