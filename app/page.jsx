import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Projects from "./components/Projects";
import ContactUS from "./components/ContactUS";
import Footer from "./components/Footer";
import './globals.css';



export default function Home() {
  return (
    <>
    
      <Hero />
      <Mission/>
      <Projects />
      <ContactUS />
       <Footer />
    </>
  );
}
