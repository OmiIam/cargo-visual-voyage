
import { Button } from "@/components/ui/button";
import Globe from "../3d/Globe";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/4 -left-1/3 w-1/2 h-1/2 bg-logistics-accent/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-1/3 w-1/2 h-1/2 bg-logistics-highlight/20 blur-[150px] rounded-full"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 opacity-0 animate-fade-in">
          <div>
            <h2 className="text-sm md:text-base uppercase tracking-wider mb-2 text-logistics-highlight">Worldwide Logistics Solutions</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Global Freight.
              <br />
              <span className="text-gradient">Fast. Private. Reliable.</span>
            </h1>
          </div>
          
          <p className="text-lg text-gray-300 max-w-lg opacity-0 animate-fade-in-delay-1">
            Seamless logistics solutions that connect businesses across the globe with unparalleled speed, security, and dependability.
          </p>
          
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-2">
            <Button asChild size="lg" className="bg-gradient hover:opacity-90">
              <a href="#contact">Get Started</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#services">Explore Services</a>
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-6 opacity-0 animate-fade-in-delay-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-logistics-dark bg-gray-500/30"></div>
              ))}
            </div>
            <p className="text-sm text-gray-400">Trusted by <span className="text-white font-bold">500+</span> businesses worldwide</p>
          </div>
        </div>
        
        <div className="relative flex justify-center opacity-0 animate-fade-in-delay-1">
          <div className="absolute inset-0 bg-logistics-accent/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80">
            <Globe />
            <div className="absolute inset-0 bg-gradient-to-tr from-logistics-accent/0 to-logistics-highlight/30 rounded-full blur-md"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
