import Image from 'next/image';
import Link from 'next/link';

import product_panel from '@/assets/images/resource/service1.png';

export default function PanelsPage() {
  return (
    <main>
      <section className="product-details-area">
        <div className="container">
          <div className="row align-items-center">

            {/* Product Image */}
            <div className="col-lg-6">
              <div className="product-details-image">
                <Image
                  src={product_panel}
                  alt="Solar Panels"
                  width={800}
                  height={600}
                  priority
                  className="img-fluid"
                />
              </div>
            </div>

            {/* Product Content */}
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

                <h3>Why Choose Our Solar Panels?</h3>

                <ul>
                  <li>High-quality solar panel technology</li>
                  <li>Excellent energy efficiency</li>
                  <li>Reliable long-term performance</li>
                  <li>Suitable for Australian homes and businesses</li>
                  <li>Designed to help reduce electricity costs</li>
                </ul>

                <Link href="/contact" className="btn">
                  Get a Quote
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}