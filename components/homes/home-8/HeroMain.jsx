import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroMain() {
  return (
    <div className="hero-wrapper hero-4 shape-mockup-wrap" id="hero">
      {/* <div
        className="hero-4-thumb img-custom-anim-left wow animated shape-mockup"
        style={{ left: "0px" }}
      >
        <Image
          width={838}
          height={838}
          className="w-100"
          src="/assets/img/hero/hero-main.png"
          alt="img"
        />
      </div> */}
      <div className="bg-theme">
        <div className="container">
          <div className="hero-style4">
            <div className="row justify-content-end">
              <div className="col-lg-12">
                <h1 className="hero-title wow img-custom-anim-right animated">
                Hi, I'm SATHISHKA PRIYAD,
                </h1>
                <p className="hero-text wow img-custom-anim-right animated">
                A Senior Frontend Developer based in London, harnessing the power of React JS, Next JS, and Magento 2 to create frontiers in web technology. 
                My journey over 7 years has been about transforming ideas into digital experiences that engage and inspire. Let's join forces to unlock exponential growth for your brand with strategic design and development.
                </p>
                <div className="btn-group fade_right">
                  <Link
                    
                    href="#portfolio"
                    className="btn wow img-custom-anim-right animated"
                  >
                    <span className="link-effect">
                      <span className="effect-1">VIEW MY WORKS</span>
                      <span className="effect-1">VIEW MY WORKS</span>
                    </span>
                  </Link>
                </div>
                <div className="hero-thumb-group img-custom-anim-right wow animated">
                  {/* <Image
                    width={60}
                    height={60}
                    className="img1"
                    src="/assets/img/hero/hero-counter1-2.png"
                    alt="img"
                  />
                  <Image
                    width={60}
                    height={60}
                    className="img2"
                    src="/assets/img/hero/hero-counter1-2.png"
                    alt="img"
                  /> */}
                  <div className="hero-counter counter-item">
                    <span className="counter-number">7</span>+
                  </div>
                  <p>
                    Over <span className="counter-number">7</span>&nbsp;
                    years of experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
