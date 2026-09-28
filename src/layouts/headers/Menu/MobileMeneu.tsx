"use client";

import React, { useState } from "react";
import menu_data from "./MenuData";
import Link from "next/link";
import Image from "next/image";

import HeaderLogo from "@/assets/images/resource/logo-ftr.jpg";

const MobileMeneu = () => {
  const [navTitle, setNavTitle] = useState("");

  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mobile-menu-area sticky d-sm-block d-md-block d-lg-none">
        <div className="mobile-menu mean-container">

          <div className="mean-bar">

            {/* Mobile Logo */}
            <div className="mobile-logo">
              <Link href="/">
                <Image
                  src={HeaderLogo}
                  alt="SolPower Australia"
                  priority
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <a
              onClick={() => setOpen(!open)}
              className={`meanmenu-reveal ${open ? "meanclose" : ""}`}
              style={{
                right: "0px",
                left: "auto",
                textAlign: "center",
                textIndent: "0px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              {open ? (
                "X"
              ) : (
                <>
                  <span></span>
                  <span></span>
                  <span></span>
                </>
              )}
            </a>

            {/* Mobile Navigation */}
            <nav className="mean-nav">
              <ul className={`nav_scroll ${open ? "d-block" : "d-none"}`}>

                {menu_data.map((item, i) => (
                  <li key={i}>

                    <Link href={item.link}>
                      {item.title}
                    </Link>

                    {item.has_dropdown && (
                      <div className="sub-menu">

                        <ul
                          style={{
                            display:
                              navTitle === item.title
                                ? "block"
                                : "none",
                          }}
                        >
                          {item.sub_menus?.map(
                            (sub_item, index) => (
                              <li key={index}>
                                <Link href={sub_item.link}>
                                  {sub_item.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>

                        <a
                          className="mean-expand"
                          onClick={() =>
                            openMobileMenu(item.title)
                          }
                          style={{
                            fontSize: "18px",
                            cursor: "pointer",
                          }}
                        >
                          {navTitle === item.title ? "−" : "+"}
                        </a>

                      </div>
                    )}

                  </li>
                ))}

              </ul>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMeneu;