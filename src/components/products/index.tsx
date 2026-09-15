import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import product_data from '@/data/ProductData';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';

const Products = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="Products" title="Products" />
        <section className="project-grid-section products-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb-50">
                  <div className="section-sub-title">
                    <h4>Our Products</h4>
                  </div>
                  <div className="section-main-title">
                    <h2>Solar Products for a Smarter Energy Future</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {product_data.map((product) => (
                <div className="col-lg-4 col-md-6 mb-30" key={product.title}>
                  <article className="project-grid-box h-100">
                    <div className="project-thumb">
                      <Image src={product.image} style={{ height: 'auto' }} alt={product.title} />
                    </div>
                    <div className="project-content">
                      <h4>{product.title}</h4>
                      <Link href={product.link}>Read More <i className="bi bi-arrow-up-right"></i></Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterOne />
    </>
  );
};

export default Products;
