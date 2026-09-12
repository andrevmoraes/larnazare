import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import StructureSection from "../components/StructureSection";
import HelpSection from "../components/HelpSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <StructureSection />
        <HelpSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
