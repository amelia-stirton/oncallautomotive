import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ServiceAreas from "../components/ServiceAreas";
import WhyUs from "../components/WhyUs";
import QuoteForm from "../components/QuoteForm";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ServiceAreas />
        <WhyUs />
        <QuoteForm />
        <Faq />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
