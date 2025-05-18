import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Services from "@/components/services";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
 <main className="min-h-screen bg-gray-50 dark:bg-gray-900 ">
  <Navbar/>
  <Hero/>
  <About/>
  <Projects/>
  <Services/>
  <Contact/>
  <Footer/>
  </main>
  );
}
