import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="footer" className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t-4 border-[#C8102E]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-playfair font-bold text-[#C8102E]">Capri Pizza</h3>
            <p className="text-gray-400 leading-relaxed">
              Penny More, Penny Less, Capri Pizza Is Still The Best! Serving Windsor&apos;s finest authentic pizza since the beginning.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#C8102E] transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#C8102E] transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-[#C8102E] transition-colors">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-[#333] pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="#menu" className="hover:text-white transition-colors">Our Menu</Link></li>
              <li><Link href="#locations" className="hover:text-white transition-colors">Locations</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-[#333] pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#C8102E] mt-1 shrink-0" size={18} />
                <span>3020 Dougall Ave,<br />Windsor, ON N9E 1S4</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#C8102E] shrink-0" size={18} />
                <span>(519) 969-6969</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#C8102E] shrink-0" size={18} />
                <span>hello@capripizza.ca</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-[#333] pb-2 inline-block">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for special offers and updates.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 rounded px-4 py-2 focus:outline-none focus:border-[#C8102E] transition-colors text-white"
              />
              <button className="bg-[#C8102E] text-white px-4 py-2 rounded font-medium hover:bg-[#D32F2F] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Capri Pizza. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Powered by Crafted by AK</p>
        </div>
      </div>
    </footer>
  );
}
