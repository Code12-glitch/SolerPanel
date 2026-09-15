import Image from 'next/image';
import product_panel from '@/assets/images/resource/service1.png';

export default function PanelsPage() {
  return (
    <main>
      <section className="product-details-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image
                src={product_panel}
                alt="Solar Panels"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-6">
              <div className="product-details-content">
                <span>Solar Products</span>

                <h1>Solar Panels</h1>

                <p>
                  High-quality solar panels designed to help Australian homes
                  and businesses generate clean, reliable and efficient solar
                  energy.
                </p>

                <p>
                  Our solar panel solutions are designed for excellent
                  performance, durability and long-term energy savings.
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