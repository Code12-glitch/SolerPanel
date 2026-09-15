import Image from 'next/image';
import product_inverter from '@/assets/images/resource/service2.png';

export default function InvertersPage() {
  return (
    <main>
      <section className="product-details-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image
                src={product_inverter}
                alt="Solar Inverters"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-6">
              <div className="product-details-content">
                <span>Solar Products</span>

                <h1>Solar Inverters</h1>

                <p>
                  Reliable and efficient solar inverters designed to convert
                  solar energy into usable electricity for your home or
                  business.
                </p>

                <p>
                  Our inverter solutions provide efficient energy conversion,
                  reliable performance and smart energy management.
                </p>

                <a href="/contact" className="btn">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}