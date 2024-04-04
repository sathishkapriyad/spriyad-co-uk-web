"use client";
import Image from "next/image";
import MobileMenuSocials from "./MobileMenuSocials";
import Link from "next/link";
import addGsap from "@/utils/addGsap";
import { useEffect } from "react";

export default function SideMenu({ isOpen, setIsOpen }) {
  useEffect(() => {
    addGsap();
  }, []);

  return (
    <div className={`sidemenu-wrapper  ${isOpen ? "show" : ""}`}>
      <div className="sidemenu-content">
        <button
          className="closeButton sideMenuCls"
          onClick={() => setIsOpen(false)}
        >
          <Image
            width={24}
            height={24}
            src="/assets/img/icon/close.svg"
            alt="icon"
          />
        </button>
        <div className="widget footer-widget">
          <div className="widget-about">
            <div className="footer-logo">
              <Link scroll={false} href="/">
                <Image
                  width={86}
                  height={24}
                  src="/assets/img/logo-white.svg"
                  alt="Ovation"
                />
              </Link>
            </div>
            <p className="about-text">
            Ready to take your digital experiences to new heights? Connect with me for a partnership that merges creativity with technical mastery. Together, we'll craft digital solutions that not only meet but exceed your expectations.
            </p>
            <div className="sidebar-wrap">
              <h6>London,</h6>
              <h6>United Kingdom</h6>
            </div>
            <div className="sidebar-wrap">
              <h6>
                <a href="tel:447392946487">+44 7392 9464 87 </a>
              </h6>
              <h6>
                <a href="mailto:projects@spriyad.co.uk">projects@spriyad.co.uk</a>
              </h6>
            </div>
            <div className="social-btn style2">
              <MobileMenuSocials />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Link
            scroll={false}
            href="/contact"
            className="chat-btn gsap-magnetic"
          >
            Let’s Talk with us
          </Link>
        </div>
      </div>
    </div>
  );
}
