
import Navbar from "./components/header/navbar";
import Footer from "./components/footer/Footer";
import AboutSection from "./components/about/About";
import Topabout from "./components/topabout/Topabout"
import Education from "./components/Education/Education";
import  Projects  from "./components/projects/Projetcs";
import Contactus from "./components/contactus/contactus";
import Skills from "./components/skills/Skills";
import Layout from "./components/Layout";




export default function Home() {
  
  return (
    <div>
  <Layout >
   <Navbar />
   <Topabout />
   <AboutSection />
   <Education />
   <Projects />
   <Skills />
   <Contactus />
   </Layout >
    <Footer />
      </div>
  );
}
