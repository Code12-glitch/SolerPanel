import GridSystems from "@/components/grid-connected-systems";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title:
    "Grid Connected Systems",
};

const GridSystemsPage = () => {
  return (
    <Wrapper>
      <GridSystems />
    </Wrapper>
  );
};

export default GridSystemsPage;