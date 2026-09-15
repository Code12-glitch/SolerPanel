
import React from 'react';
import ContactFormHomeOne from '@/components/forms/ContactFormHomeOne';
import contact_img_1 from "@/assets/images/resource/choose-thumb.png";
import Image from 'next/image';


const contact_area_content = {
  subtitle: 'Why Choose Us',
  title: 'Best Solution For Your',
  sm_des: "At SOLPOWER AUSTRALIA, we are one of the best and leading solar solutions provider in Australia, choose us as:",
  festures: [
    "Personalised support: We understand that each property and client requirement are different, and thus we offer tailored solutions for solar PV systems.",
    "Local and trusted provider: We are a local solar power company offering quality support.",
    "Friendly and experienced team: At SOLPOWER AUSTRALIA, we have a team of highly qualified and experienced people to help clients with their solar requirements.",
    "100% client satisfaction: Customer satisfaction is our top priority. We pride ourselves on transparent communication, professional service, and reliable support long after installation.",
    "Advanced products: We only use advanced and top-quality products.",
    "Comprehensive support: We handle everything from system design and permitting to installation and maintenance, ensuring a hassle-free experience from start to finish.",
  ],
  btn_text: "Get A Quote",
  phone: <>Call Us <span>1800 979 707</span></>,

}

const { subtitle, title, sm_des, festures, btn_text, phone } = contact_area_content

const ContactAreaHomeOne = () => {
  return (
    <>
      <div className="choose-us-section">
        <div className="container">
          <div className="row choose">
            <div className="col-lg-6 col-md-12">
              <div className="section-title wow animate__slideInUp">
                <div className="section-sub-title choose">
                  <h4>{subtitle}</h4>
                </div>
                <div className="section-main-title choose">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="choose-us-discription wow animate__slideInUp">
                <p>{sm_des}</p>
              </div>
              <div className="choose-us-content wow animate__zoomIn">
                <div className="choose-us-thumb">
                  <Image src={contact_img_1} alt="image-title" />
                </div>
                <div className="choose-us-list">
                  <ul>
                    {festures.map((item, index) => (
                      <li key={index}><i className="bi bi-check"></i> {item}</li>
                    ))} 
                  </ul>
                </div>
                <div className="choose-us-info">
                  <div className="solar-btn choose">
                    <a href="#">{btn_text} <i className="bi bi-arrow-right"></i></a>
                  </div>
                  <div className="choose-us-icon">
                    <i className="bi bi-telephone-plus"></i>
                  </div>
                  <div className="choose-us-phone">
                    <h5>{phone}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="choose-contact-box wow animate__slideInRight">
                <div className="choose-contact-title">
                  <h4>Make an Appointment</h4>
                </div>

                <ContactFormHomeOne /> 


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAreaHomeOne;