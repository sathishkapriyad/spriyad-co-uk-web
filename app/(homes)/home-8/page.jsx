import Footer7 from "@/components/footers/Footer7";
import Header1 from "@/components/headers/Header1";
import Header7 from "@/components/headers/Header7";
import Blogs from "@/components/homes/home-8/Blogs";
import Clients from "@/components/homes/home-8/Clients";
import Cta from "@/components/homes/home-8/Cta";
import Features from "@/components/homes/home-8/Features";
import Hero from "@/components/homes/home-4/Hero";
import Projects from "@/components/homes/home-8/Projects";
import Testimonials from "@/components/homes/home-8/Testimonials";
import React from "react";
import HeroMain from "@/components/homes/home-8/HeroMain";
export const metadata = {
  title: "Home 8 || Frisk - Creative Agency & Portfolio Nextjs Template",
};
export default function HomePage8() {
  return (
    <div>
      <Header1 />
      <HeroMain />
      <Features />
      <Projects />
      {/* <Testimonials /> */}
      <Clients />
      <Blogs />
      <Cta />
      <Footer7 />
    </div>
  );
}
