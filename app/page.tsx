import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Locations } from "./components/Locations";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFBF9]">
      <Navbar />
      <Hero />
      <Locations />
      <About />
      <Footer />
    </main>
  );
}
