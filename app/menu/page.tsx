import { Menu } from "../components/Menu";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#FCFBF9]">
      <Navbar />
      <div className="pt-20">
        <Menu />
      </div>
      <Footer />
    </main>
  );
}
