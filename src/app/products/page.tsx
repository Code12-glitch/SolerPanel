import Products from '@/components/products';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: 'Products - SolPower Australia',
  description: 'Explore solar panels, inverters and battery storage products from Solpower Australia.',
};

const ProductsPage = () => {
  return (
    <Wrapper>
      <Products />
    </Wrapper>
  );
};

export default ProductsPage;
