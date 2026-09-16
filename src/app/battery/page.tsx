import Battery from "@/components/battery";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title:
    "Battery",
};

const BatteryPage = () => {
  return (
    <Wrapper>
      <Battery />
    </Wrapper>
  );
};

export default BatteryPage;