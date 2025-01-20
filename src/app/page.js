import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Demo />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
