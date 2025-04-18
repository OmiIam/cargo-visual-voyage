
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-logistics-gray/20 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Package className="h-6 w-6 text-logistics-highlight" />
              <span className="text-xl font-bold">CargoVoyage</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">Premium global logistics services delivering your cargo with speed, security, and reliability anywhere in the world.</p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-logistics-gray/20 flex items-center justify-center hover:bg-logistics-highlight/20 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-logistics-gray/20 flex items-center justify-center hover:bg-logistics-highlight/20 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-logistics-gray/20 flex items-center justify-center hover:bg-logistics-highlight/20 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-logistics-gray/20 flex items-center justify-center hover:bg-logistics-highlight/20 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-logistics-highlight transition-colors">Ocean Freight</a></li>
              <li><a href="#" className="text-gray-400 hover:text-logistics-highlight transition-colors">Air Freight</a></li>
              <li><a href="#" className="text-gray-400 hover:text-logistics-highlight transition-colors">Land Freight</a></li>
              <li><a href="#" className="text-gray-400 hover:text-logistics-highlight transition-colors">Warehousing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-logistics-highlight transition-colors">Express Delivery</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-logistics-highlight transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-logistics-highlight transition-colors">Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-logistics-highlight transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-logistics-highlight transition-colors">News & Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-logistics-highlight transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-logistics-highlight" />
                <span className="text-gray-400">123 Logistics Way<br />Global City, SC 29292</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-logistics-highlight" />
                <a href="tel:+18001234567" className="text-gray-400 hover:text-logistics-highlight transition-colors">+1 (800) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-logistics-highlight" />
                <a href="mailto:info@cargovoyage.com" className="text-gray-400 hover:text-logistics-highlight transition-colors">info@cargovoyage.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-logistics-gray/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 CargoVoyage. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-logistics-highlight transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-logistics-highlight transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-500 hover:text-logistics-highlight transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
