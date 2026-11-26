import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <QuoteForm />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
