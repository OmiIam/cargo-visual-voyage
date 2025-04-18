
import { Shield, Clock, Globe, BadgeCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const reasons = [
  {
    icon: Shield,
    title: "Maximum Security",
    description: "End-to-end encryption and real-time monitoring ensure your cargo is always protected.",
    stat: "99.9%",
    statLabel: "Secure Deliveries"
  },
  {
    icon: Clock,
    title: "Express Speed",
    description: "Optimized routes and dedicated transport solutions to meet your tightest deadlines.",
    stat: "24/7",
    statLabel: "Operational Support"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Extensive logistics network spanning 120+ countries for seamless worldwide shipping.",
    stat: "120+",
    statLabel: "Countries Served"
  },
  {
    icon: BadgeCheck,
    title: "Certified Expertise",
    description: "Fully licensed and certified logistics professionals handling your valuable cargo.",
    stat: "15+",
    statLabel: "Years Experience"
  },
];

export default function WhyChooseUsSection() {
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
    <section id="why-us" ref={sectionRef} className="py-24 bg-logistics-gray/10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider mb-3 text-logistics-highlight">Our Advantages</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h3>
          <p className="text-gray-300">With years of experience in global logistics, we deliver unmatched service quality, reliability and customer satisfaction.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className={`p-8 border border-logistics-gray/30 rounded-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <reason.icon className="w-10 h-10 text-logistics-highlight mb-6" />
              <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
              <p className="text-gray-400 mb-6">{reason.description}</p>
              
              <div className="pt-6 border-t border-logistics-gray/30">
                <p className="text-3xl font-bold text-logistics-highlight">{reason.stat}</p>
                <p className="text-sm text-gray-400">{reason.statLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
