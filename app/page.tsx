import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Pillars from "@/components/sections/Pillars";
import Ecosystem from "@/components/sections/Ecosystem";
import MediaDivision from "@/components/sections/MediaDivision";
import Vision from "@/components/sections/Vision";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Ecosystem />
        <MediaDivision />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
