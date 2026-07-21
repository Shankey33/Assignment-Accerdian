import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Solutions from "@/components/Solutions";
import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import Faqs from "@/components/Faqs";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Solutions />
        <Programs />
        <HowItWorks />
        <Faqs />
        <Testimonials />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
