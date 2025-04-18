
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-logistics-dark/90 backdrop-blur-md py-3 shadow-lg' : 'py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Package className="h-8 w-8 text-logistics-highlight" />
          <span className="text-xl font-bold">CargoVoyage</span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How It Works</a>
          <a href="#services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#why-us" className="text-sm text-gray-300 hover:text-white transition-colors">Why Choose Us</a>
          <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" className="hidden md:inline-flex hover:bg-logistics-accent/10">
            <a href="#contact">Track Shipment</a>
          </Button>
          <Button asChild className="bg-gradient hover:opacity-90">
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
