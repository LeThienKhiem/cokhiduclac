import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import PortfolioSection from "@/app/components/PortfolioSection";
import ServicesSection from "@/app/components/ServicesSection";
import WhyChooseUs from "@/app/components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
