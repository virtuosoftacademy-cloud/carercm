import Mission from "@/components/sections/Mission";
import Hero from "@/components/sections/Hero";
// import Vision from "@/components/sections/Vision";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Recognition from "@/components/sections/Recognition";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";
import Specialty from "@/components/sections/Specialty";

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