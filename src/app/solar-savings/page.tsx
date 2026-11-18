import type { Metadata } from "next";
import SolarSavings from "@/components/solar-savings";
import Wrapper from "@/layouts/Wrapper";

export const metadata: Metadata = {
  title: "Solar Savings | SolPower Australia",
  description:
    "Explore solar rebates, battery rebates and tools to build your ideal solar system.",
};

export default function SolarSavingsPage() {
  return (
    <Wrapper>
      <SolarSavings />
    </Wrapper>
  );
}
