
import { Package, Search, BarChart3, Truck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: Search,
    title: "Request a Quote",
    description: "Share your shipping requirements and receive a tailored quote within hours."
  },
  {
    icon: Package,
    title: "We Pick Up",
    description: "Our team collects your cargo from your location with utmost care and precision."
  },
  {
    icon: Truck,
    title: "Express Transport",
    description: "Your cargo is transported via optimized routes using our global logistics network."
  },
  {
    icon: BarChart3,
    title: "Real-time Tracking",
    description: "Monitor your shipment's progress with our advanced tracking technology."
  }
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 bg-logistics-gray/10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider mb-3 text-logistics-highlight">Simplified Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h3>
          <p className="text-gray-300">Our streamlined logistics process ensures your cargo moves efficiently from origin to destination with complete transparency.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`bg-logistics-gray/20 p-8 rounded-lg border border-logistics-gray/30 hover:border-logistics-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-logistics-highlight/5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms`, transitionProperty: 'all', transitionDuration: '600ms' }}
            >
              <div className="w-16 h-16 mb-6 rounded-lg bg-gradient flex items-center justify-center">
                <step.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
