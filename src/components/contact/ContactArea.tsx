

import React from 'react';
import ContactForm from '../forms/ContactForm';


interface DataType {
  subtitle: string;
  title: string;
  sm_info: string;
  contact_data: {
    id: number;
    icon: string;
    title: string;
    info: string;
    info_2?: string;
  }[];
}

const contact_content: DataType = {
  subtitle: "Contact Wlth Us",
  title: "Get In Touch!",
  sm_info: "Have questions about solar solutions or need more information? Our experienced team is here to provide the right guidance and help you find the best solution for your energy needs.",
  contact_data: [
    
    {
      id: 0,
      icon: "bi bi-phone-flip",
      title: "Have a Questions? Call Us",
      info: "1800 979 707",
    },
    {
      id: 1,
      icon: "bi bi-geo-alt-fill",
      title: "Visit Our Company at",
      info: "Office Address: WOTSO, 2/194, Varsity Parade, Varsity Lakes, QLD, 4227",
      info_2: "Postal Address: P O Box 3098, Browns Plains, QLD, 4118",
    },
    {
      id: 2,
      icon: "bi bi-phone-flip",
      title: "Call Us Today",
      info: "1800 979 707",
    },
    {
      id: 3,
      icon: "bi bi-envelope",
      title: "Email Us",
      info: "info@solpoweraustralia.com.au",
    },
    {
      id: 4,
      icon: "bi bi-clock",
      title: "Working Hours",
      info: "Mon – Fri: 09.00AM to 05.00PM",
      info_2: "Saturday & Sunday: Closed",
    }

  ]
}

const { subtitle, title, sm_info, contact_data } = contact_content

const renderContactInfo = (info: string) => {
  const parts = info.split(":");

  if (parts.length > 1) {
    return (
      <>
        <strong>{parts[0]}:</strong> {parts.slice(1).join(":")}
      </>
    );
  }

  return info;
};

const ContactArea = () => {
  return (
    <>
      <div className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-title">
                <div className="contact-sub-title ">
                  <h4>{subtitle}</h4>
                </div>
                <div className="contact-main-title">
                  <h2>{title}</h2>
                </div>
                <div className="contact-discription">
                  <p>{sm_info}</p>
                </div>
              </div>

              {contact_data.map((item, i) => (
                <div key={i} className="contact-box-item">
                  <div className="contact-icon">
                    <i className={item.icon}></i>
                  </div>
                  <div className="contact-adress">
                    <h5>{item.title}</h5>
                    <div>{renderContactInfo(item.info)}</div>
                    {item.info_2 && <div>{renderContactInfo(item.info_2)}</div>}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="choose-contact-box contact-inner">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactArea;