'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Accordion from '../common/Accordion';
import AppointmentForm from '../forms/AppointmentForm';

import service_details_thumb_1 from '@/assets/images/resource/service-details.png';
import service_details_thumb_2 from '@/assets/images/resource/service-details2.png';
import service_details_thumb_3 from '@/assets/images/resource/service-details3.png';

interface CategoryLink {
  title: string;
  slug: string;
}

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface DataType {
  title: string;
  sm_des_1: string;
  sm_des_2: string;
  title_2: string;
  sm_des_3?: string;
  feature_list?: string[];
  sm_des_before_title_3?: string;
  title_3?: string;
  sm_des_4?: string;
  feature_list_2?: string[];
  sm_des_5?: string;
  sm_des_before_title_4?: string;
  title_4?: string;
  sm_des_6?: string;
  feature_list_3?: string[];
  sm_des_7?: string;
  title_5?: string;
  feature_list_4?: string[];
  title_6?: string;
  faq?: FaqItem[];
  categories: CategoryLink[];
  help_title: string;
  help_info: string;
  phone: string;
  email: string;
}


const service_details_content: DataType = {
  title: "This service overview",
  sm_des_1: "ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  dolore magna ali Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irures dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat nonm proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor.",
  sm_des_2: "sit amet, consectetur adipisoftwareit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Duis fvUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
  title_2: "This service overview Everyone",
  title_5: "FAQ",

  categories: [
    { title: "Residential Solar PV System", slug: "residential-solar-pv-system" },
    { title: "Commercial Solar PV System", slug: "commercial-solar-pv-system" },
    { title: "Hybrid Battery Backup Solar PV System", slug: "hybrid-battery-backup-solar-pv-system" },
  ],
  help_title: "Need Help?",
  help_info: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  phone: "(123) 456-7890",
  email: "example@gmail.com",
}

const ServiceDetailsArea = ({ service }: { service?: any }) => {
  const detail = service?.details || service_details_content;
  const { title, sm_des_1, sm_des_2, title_2, sm_des_3, feature_list, sm_des_before_title_3, title_3, sm_des_4, feature_list_2, sm_des_5, sm_des_before_title_4, title_4, sm_des_6, feature_list_3, sm_des_7, title_5, feature_list_4, title_6, faq, categories, help_title, help_info, phone, email } = detail;
  const isCommercialPage = service?.slug === 'commercial-solar-pv-system';

  const renderFeatureItem = (item: string) => {
    const parts = item.split(":");

    if (parts.length > 1) {
      return (
        <>
          <strong>{parts[0]}:</strong> {parts.slice(1).join(":")}
        </>
      );
    }

    return <>{item}</>;
  };

  const renderFeatureList = (items: string[], threeColumns = false) => {
    if (threeColumns) {
      return (
        <div className="blog-details-list">
          <div className="row g-3">
            {items.map((item: string, i: number) => (
              <div key={i} className="col-lg-4 col-md-6 col-12">
                <ul className="mb-0">
                  <li><i className="bi bi-check2-circle"></i> {renderFeatureItem(item)}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="blog-details-list">
        <ul>
          {items.map((item: string, i: number) => (
            <li key={i}><i className="bi bi-check2-circle"></i> {renderFeatureItem(item)}</li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="service-details-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="service-details-thumb">
                <Image src={service_details_thumb_1} style={{ width: '100%', height: 'auto' }} alt="service-details" />
              </div>
              <div className="service-details-title">
                <h4>{title}</h4>
              </div>
              <div className="service-details-discription">
                <p>{sm_des_1}</p>
                <p>{sm_des_2}</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="service-details-thumb-two">
                    <Image src={service_details_thumb_2} style={{height: "auto"}} alt="image-title" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service-details-thumb-two">
                    <Image src={service_details_thumb_3} style={{height: "auto"}} alt="image-title" />
                  </div>
                </div>
              </div>
              <div className="service-details-title">
                <h4>{title_2}</h4>
              </div>
              {(sm_des_3 || (feature_list && feature_list.length > 0)) ? (
                <>
                  {sm_des_3 && (
                    <div className="service-details-discription">
                      <p>{sm_des_3}</p>
                    </div>
                  )}
                  {feature_list && feature_list.length > 0 && renderFeatureList(feature_list, isCommercialPage)}
                  {sm_des_before_title_3 && (
                    <div className="service-details-discription">
                      <p>{sm_des_before_title_3}</p>
                    </div>
                  )}
                  {sm_des_4 && !title_3 && (
                    <div className="service-details-discription">
                      <p>{sm_des_4}</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="service-details-discription">
                  <p>{sm_des_1}</p>
                </div>
              )}

              {title_3 && (
                <>
                  <div className="service-details-title">
                    <h4>{title_3}</h4>
                  </div>
                  {sm_des_4 && (
                    <div className="service-details-discription">
                      <p>{sm_des_4}</p>
                    </div>
                  )}
                  {feature_list_2 && feature_list_2.length > 0 && renderFeatureList(feature_list_2)}
                  {sm_des_5 && (
                    <div className="service-details-discription">
                      <p>{sm_des_5}</p>
                    </div>
                  )}
                  {sm_des_before_title_4 && (
                    <div className="service-details-discription">
                      <p>{sm_des_before_title_4}</p>
                    </div>
                  )}
                </>
              )}

              {title_4 && (
                <>
                  <div className="service-details-title">
                    <h4>{title_4}</h4>
                  </div>
                  {sm_des_6 && (
                    <div className="service-details-discription">
                      <p>{sm_des_6}</p>
                    </div>
                  )}
                  {feature_list_3 && feature_list_3.length > 0 && renderFeatureList(feature_list_3)}
                  {sm_des_7 && !feature_list_4 && (
                    <div className="service-details-discription">
                      <p>{sm_des_7}</p>
                    </div>
                  )}
                </>
              )}

              {feature_list_4 && feature_list_4.length > 0 && (
                <>
                  <div className="service-details-title">
                    <h4>{title_5}</h4>
                  </div>
                  {sm_des_7 && (
                    <div className="service-details-discription">
                      <p>{sm_des_7}</p>
                    </div>
                  )}
                  {renderFeatureList(feature_list_4)}
                </>
              )}

              <div className="service-details-title mt-4">
                <h4>{title_6 || (feature_list_4 ? "FAQ" : title_5 || "FAQ")}</h4>
              </div>
              <Accordion data={faq} />
            </div>
            <div className="col-lg-4 col-md-6">
              {/* <!-- widget search --> */}
              <div className="widget_search box mb-30">
                <form onSubmit={e => e.preventDefault()} method="get">
                  <input type="text" name="s" value="" placeholder="Search Here" title="Search for:" />
                    <button type="submit" className="icons">
                      <i className="fa fa-search"></i>
                    </button>
                </form>
              </div>
              <div className="widget-categories-box two">
                {/* <!-- widget categories menu --> */}
                <div className="widget-categories-menu asd">
                  <ul>
                    {categories.map((item: CategoryLink, i: number) => (
                      <li key={i}><Link href={`/service-details/${item.slug}`} style={{ color: "#000" }}>{item.title}<span><i className="bi bi-arrow-right"></i></span></Link></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="widget-help-box">
                <div className="widget-content">
                  <h4>{help_title}</h4>
                  <p>{help_info}</p>
                  <div className="widget-info-social-link">
                    <ul>
                      <li><a href="tel:1800 979 707"><i className="bi bi-telephone"></i> <span>{phone}</span></a></li>
                      <li><a href="mailto:info@solpoweraustralia.com.au"><i className="bi bi-envelope"></i> <span>{email}</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="service-details-contact-form mt-4">
                <div className="service-details-title">
                  <h4>Make an Appointment</h4>
                </div>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsArea;