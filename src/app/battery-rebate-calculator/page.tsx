
import type { Metadata } from "next";
import BatteryRebateCalculator from
  "@/components/calculators/BatteryRebateCalculator";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Battery Rebate Calculator | Solpower Australia",
  description:
    "Estimate your Australian home battery rebate with the Solpower Australia Battery Rebate Calculator.",
};

export default function BatteryRebateCalculatorPage() {
  return (
    <Wrapper>
      <HeaderOne />
      <BatteryRebateCalculator />
      <FooterOne />
    </Wrapper>
  );
}
