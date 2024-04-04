"use client";
import Socials from "@/components/footers/component/Socials";
import React from "react";

export default function Cta() {
  return (
    <div className="cta-area-1 overflow-hidden bg-theme space text-xl-start text-center" id="contact">
      <div className="container">
        <div className="row justify-content-xl-between justify-content-center">
          <div className="col-xl-12 col-lg-10">
            <div className="title-area mb-xl-0 mb-40">
              <h2 className="sec-title">Let’s Work Together</h2>
              <p className="sec-text mt-30 mb-n2">
              Ready to take your digital experiences to new heights? Connect with me for a partnership that merges creativity with technical mastery. 
              Together, we'll craft digital solutions that not only meet but exceed your expectations.
              </p>
              <p className="copyright-text mt-4 mb-3">
                Copyright © 2024
                <a href="https://themeforest.net/user/ib-themes/portfolio">
                  &nbsp;spriyad.co.uk
                </a>
              </p>
              <div className="social-btn style3 justify-content-xl-start justify-content-center">
                <Socials />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
