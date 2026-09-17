import React from "react";

import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import QuoteArea from "./QuoteArea";

const GetQuote = () => {
  return (
    <>
      <HeaderOne />

      <main>
        <Breadcrumb
          top_title="Get Quote"
          title="Get Quote"
        />

        <QuoteArea />
      </main>

      <FooterOne />
    </>
  );
};

export default GetQuote;