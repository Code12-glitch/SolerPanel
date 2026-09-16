import React from "react";

import Wrapper from "@/layouts/Wrapper";
import Panels from "@/components/panels";

export const metadata = {
  title: "Solar Panels - SolerPanel",
};

const PanelsPage = () => {
  return (
    <Wrapper>
      <Panels />
    </Wrapper>
  );
};

export default PanelsPage;