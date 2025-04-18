
import { Ship, Plane, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Ship,
    title: "Ocean Freight",
    description: "Reliable and cost-effective shipping solutions for large cargo volumes across international waters.",
    features: ["FCL & LCL Options", "Port-to-Port Service", "Customs Clearance"]
  },
  {
    icon: Plane,
    title: "Air Freight",
    description: "Ultra-fast air transport services for time-sensitive shipments requiring swift delivery.",
    features: ["Express Delivery", "Perishable Goods", "High-Value Items"]
  },
  {
    icon: Truck,
    title: "Land Freight",
    description: "Efficient ground transportation solutions for domestic and cross-border logistics needs.",
    features: ["FTL & LTL Options", "Last-Mile Delivery", "Warehousing"]
  }
];

export default function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-logistics-accent/10 blur-[100px] rounded-full"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider mb-3 text-logistics-highlight">Our Offerings</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Services We Provide</h3>
          <p className="text-gray-300">Comprehensive logistics solutions tailored to meet your specific shipping requirements with utmost efficiency and reliability.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`bg-logistics-gray/20 border-logistics-gray/30 hover:border-logistics-accent/40 transition-all duration-500 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 mb-4 rounded-lg bg-gradient flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="text-gray-400">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-logistics-highlight"></div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-logistics-accent/30 hover:bg-logistics-accent/10 hover:border-logistics-accent/50">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
