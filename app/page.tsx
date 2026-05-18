import Mission from "@/components/Home/Mission";
import Hero from "@/components/Home/Hero";
// import Vision from "@/components/sections/Vision";
import Services from "@/components/Home/Services";
import Testimonials from "@/components/Home/Testimonials";
import Recognition from "@/components/Home/Recognition";
import ContactForm from "@/components/Home/ContactForm";
import Footer from "@/components/Home/Footer";
import Specialty from "@/components/Home/Specialty";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      {/* <Vision /> */}
      <Specialty />
      <Services />
      <Testimonials />
      <Recognition />
      <ContactForm />
      <Footer />
    </main>
  );
}