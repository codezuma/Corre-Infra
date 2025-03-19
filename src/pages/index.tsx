import AboutSection from "@components/about-section";
import ContactSection from "@components/contact-section";
import FeatureSection from "@components/feature-section";
import Footer from "@components/footer";
import HeroSection from "@components/hero-section";
import LocationSection from "@components/location-section";
import Navbar from "@components/navbar";
import NewsSection from "@components/news-section";
import ContactDialog from "@components/shared/contact-dialog";
import MasterLayoutSection from "@components/shared/master-layout";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <NewsSection />
      <AboutSection />
      <FeatureSection />
      <LocationSection/>
      <MasterLayoutSection/>
      <ContactSection/>
      <Footer />
    </>
  );
}
