import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@components/navbar";
import HeroSection from "@components/hero-section";
import FeatureSection from "@components/feature-section";
import ApproachSection from "@components/approach-section";
import CtaSection from "@components/cta-section";
import Footer from "@components/footer";
import LocationSection from "@components/location-section";
import StatsSection from "@components/stats-section";
import Head from "next/head";
import Script from "next/script";
import ContactDialog from "@components/shared/contact-dialog";
import { Button } from "@components/ui/button";
import ImagesSection from "@components/images";
import AboutSection from "@components/about-section";
import ContactSection from "@components/contact-section";
import LayoutSection from "@components/layout-section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11345315403"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11345315403');
`}
      </Script>
      <div className="fixed bottom-10 right-5 z-[100]">
        <ContactDialog>
          <button className="button-secondary button-md font-medium">Contact Now</button>
        </ContactDialog>
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <LocationSection/>
      <LayoutSection/>
      <ContactSection/>
      <Footer />
    </>
  );
}
