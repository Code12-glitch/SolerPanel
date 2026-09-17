import React from "react";

import Wrapper from "@/layouts/Wrapper";
import Inverters from "@/components/inverters";

export const metadata = {
  title: "Inverters",
};

const InvertersPage = () => {
  return (
    <Wrapper>
      <Inverters />
    </Wrapper>
  );
};

export default InvertersPage;