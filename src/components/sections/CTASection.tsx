
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function CTASection() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote request received",
      description: "We'll contact you shortly with shipping details.",
    });
  };
  
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-logistics-gray/20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-logistics-highlight/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient p-0.5 rounded-2xl">
          <div className="bg-logistics-dark rounded-2xl p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship with Confidence?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Request a quote today and experience seamless logistics solutions tailored to your specific requirements.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4">
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-logistics-gray/20 border-logistics-gray/30 focus:border-logistics-highlight"
                required
              />
              <Input 
                type="text" 
                placeholder="Shipment Details" 
                className="bg-logistics-gray/20 border-logistics-gray/30 focus:border-logistics-highlight"
                required
              />
              <Button type="submit" className="bg-gradient hover:opacity-90 h-full">
                Get a Free Quote
              </Button>
            </form>
            
            <div className="mt-8 text-center text-sm text-gray-400">
              By submitting, you agree to our 
              <a href="#" className="text-logistics-highlight hover:underline mx-1">Terms of Service</a> 
              and 
              <a href="#" className="text-logistics-highlight hover:underline mx-1">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
