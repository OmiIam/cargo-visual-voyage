
import { Button } from "@/components/ui/button";
import { Package, LogIn } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if user is on the dashboard page
  const isDashboard = location.pathname === "/dashboard";

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-logistics-dark/90 backdrop-blur-md py-3 shadow-lg' : 'py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Package className="h-8 w-8 text-logistics-highlight" />
          <span className="text-xl font-bold">CargoVoyage</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">How It Works</Link>
          <Link to="/#services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</Link>
          <Link to="/#why-us" className="text-sm text-gray-300 hover:text-white transition-colors">Why Choose Us</Link>
          <Link to="/#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
          {isDashboard && (
            <Link to="/dashboard" className="text-sm text-logistics-highlight hover:text-logistics-accent transition-colors">Dashboard</Link>
          )}
        </nav>
        
        <div className="flex items-center gap-4">
          {isDashboard ? (
            <Button asChild variant="ghost" className="hidden md:inline-flex hover:bg-logistics-accent/10">
              <Link to="/">Back to Home</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" className="hidden md:inline-flex hover:bg-logistics-accent/10">
                <Link to="/dashboard">Track Shipment</Link>
              </Button>
              <Button asChild className="bg-gradient hover:opacity-90">
                <Link to="/auth" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
