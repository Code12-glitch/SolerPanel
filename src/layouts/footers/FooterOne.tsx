import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CopyRight,
  TeamSocialLinks,
} from '@/components/common/SocialLinks';

import footer_logo from "@/assets/images/resource/logo-ftr.jpg";
import footer_thumb from "@/assets/images/resource/footer-thumb.png";

const footer_content = {
  sm_info:
    "SOLPOWER AUSTRALIA is a leading and local solar solutions provider in Australia.",

  // First List
  list_title_1: "Quick Links",

  list_items_1: [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "About Us",
      link: "#",
    },
    {
      title: "Services",
      link: "#",
    },
    {
      title: "Product",
      link: "#",
    },
    {
      title: "Battery",
      link: "#",
    },
    {
      title: "Our Projects",
      link: "#",
    },
    {
      title: "Blog",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
  ],

  // Second List
  list_title_2: "Services",

  list_items_2: [
    {
      title: "Residential Solar PV System",
      link: "/residential-solar-pv-system",
    },
    {
      title: "Commercial Solar PV System",
      link: "/commercial-solar-pv-system",
    },
    {
      title: "Hybrid Battery Backup Solar PV System",
      link: "/hybrid-battery-backup-solar-pv-system",
    },
  ],

  title: "Get In Touch",

  phone: "1800 979 707",

  address:
    "WOTSO, 2/194, Varsity Parade, Varsity Lakes, QLD, 4227",

  email: "info@solpoweraustralia.com.au",

  bootom_links: [
    "Privacy",
    "Term & Conditions",
    "Legal",
  ],
};

const {
  sm_info,
  list_title_1,
  list_items_1,
  list_title_2,
  list_items_2,
  title,
  address,
  phone,
  email,
  bootom_links,
} = footer_content;

const FooterOne = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
          <div className="row">

            {/* Logo / About */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget wow animate__zoomIn">

                <div className="footer-wiget-log">
                  <Link href="/">
                    <Image
                      src={footer_logo}
                      alt="SolPower Australia"
                    />
                  </Link>
                </div>

                <div className="footer-wiget-text">
                  <p>{sm_info}</p>
                </div>

                <div className="footer-wiget-social">
                  <ul>
                    <TeamSocialLinks />
                  </ul>
                </div>

              </div>
            </div>

            {/* Industry Sectors */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget wow animate__slideInDown">

                <div className="footer-wiget-title">
                  <h4>{list_title_1}</h4>
                </div>

                <div className="footer-wiget-menu">
                  <ul>
                    {list_items_1.map((item, i) => (
                      <li key={i}>
                        <Link href={item.link}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget wow animate__slideInDown">

                <div className="footer-wiget-title">
                  <h4>{list_title_2}</h4>
                </div>

                <div className="footer-wiget-menu">
                  <ul>
                    {list_items_2.map((item, i) => (
                      <li key={i}>
                        <Link href={item.link}>
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Get In Touch */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-wiget-quick-contanct wow animate__slideInUp">

                <div className="footer-wiget-title">
                  <h4>{title}</h4>
                </div>

                <div className="footer-wiget-contact-menu">
                  <ul>

                    <li>
                      {address}
                    </li>

                    <li>
                      <a href={`tel:${phone.replace(/\s/g, "")}`}>
                        {phone}
                      </a>
                    </li>

                    <li>
                      <a href={`mailto:${email}`}>
                        {email}
                      </a>
                    </li>

                  </ul>
                </div>

              </div>
            </div>

            {/* Footer Thumbnail */}
            {/*
            <div className="col-lg-3">
              <div className="footer-thumb wow animate__slideInDown">
                <Image
                  src={footer_thumb}
                  alt="image-title"
                />
              </div>
            </div>
            */}

          </div>

          {/* Footer Bottom */}
          <div className="row footer-line">

            {/* Copyright */}
            <div className="col-lg-9 col-md-6">
              <div className="copyright-text wow animate__slideInUp">
                <p>
                  <CopyRight />
                </p>
              </div>
            </div>

            {/* <div className="col-lg-2"></div> */}

            {/* Privacy / Terms / Legal */}
            {/* <div className="col-lg-4 col-md-6">
              <div className="footer-condition wow animate__slideInDown">
                <ul>
                  {bootom_links.map((item, i) => (
                    <li key={i}>
                      <Link href="#">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

            <div className="col-lg-3"></div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;