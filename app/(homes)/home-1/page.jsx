import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import SearchPopup from "@/components/headers/component/SearchPopup";
import About from "@/components/homes/home-5/About";
import Blogs from "@/components/homes/common/Blogs";
import Faq from "@/components/homes/home-1/Faq";

import Hero from "@/components/homes/home-4/Hero";
import Portfolio from "@/components/homes/home-1/Portfolio";
import Team from "@/components/homes/common/Team";
import Testimonials from "@/components/homes/common/Testimonials";
import Features from "@/components/homes/home-2/Features";
export const metadata = {
  title: "Home 1 || Frisk - Creative Agency & Portfolio Nextjs Template",
};
export default function HomePage1() {
  return (
    <>
      {/*<SearchPopup />*/}
      <Header1 />
      <Hero />
        <Features />
      <Portfolio />
        <About />
        <Blogs />
      <Testimonials />
      <Footer1 />
    </>
  );
}
