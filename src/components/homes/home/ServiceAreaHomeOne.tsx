
import service_data from '@/data/ServiceData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const services = service_data.filter(item => item.path === "home_1");

const ServiceAreaHomeOne = ({style, style_2}: any) => {
  const data = style ? service_data : services
  return (
    <>
      <div className={`service-section ${style ? "style-two" : style_2 ? "style-three" : ""}`}>
        <div className="container">
          {!style_2 && 
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title wow slideInLeft">
                  <h4>Our Most Service</h4>
                </div>
                <div className="section-main-title wow slideInLeft">
                  <h2>Services We Do</h2>
                  <p>SOLPOWER AUSTRALIA is a leading and local solar solutions provider in Australia. We understand that each client has different requirements, thus we offer custom options of Solar PV Systems from Full Battery Back Up Systems to On-grid Solar PV Systems to everyone based on their specific needs. At SOLPOWER AUSTRALIA, we provide only advanced and top-quality products.<br></br><br></br>
                  Also, we employ highly experienced Solar Accreditation Australia (SAA) Accredited installers only when it comes to system installation, as we follow the rules of the New Energy Tech Consumer Code (NETCC) very strictly. We can provide on-site quotes by our highly experienced and friendly solar expert considering the type of power to your property, future planning, your current power consumption pattern, the roof size, etc. to cut down the power bill by going greener.</p>
                </div>
              </div>
            </div>
          </div>      
          
          }
          <div className="row">
            {data.map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`service-box ${style ? "style-two" : ""} wow animate__backInUp`}>
                  <div className="service-thumb">
                    <Image src={item.img} style={{height: 'auto'}} alt="image-title" />
                    <div className="service-content">
                      <div className="service-icon-thumb">
                        <Image src={item.icon} alt="image-title" />
                      </div>
                      <div className="service-text">
                        <h4><Link href="/service-details">{item.title}</Link></h4>
                        <p>{item.sm_des}</p>
                        <Link href="/service-details">Read More <i className="bi bi-arrow-up-right"></i></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceAreaHomeOne;