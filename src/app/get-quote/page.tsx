import React from "react";
import Wrapper from "@/layouts/Wrapper";
import GetQuote from "@/components/get-quote";

export const metadata = {
  title: "Get Quote",
};

const GetQuotePage = () => {
  return (
    <Wrapper>
      <GetQuote />
    </Wrapper>
  );
};

export default GetQuotePage;