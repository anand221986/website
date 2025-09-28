import { Button } from "@/components/ui/button";
import { Search, Download } from "lucide-react";



const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-20 lg:py-32">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          Find Top Tech Talent{" "}
          <br className="hidden sm:block" />
          or Your{" "}
          <span className="text-primary">Dream Job</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          We connect growing companies with skilled professionals across industries.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
  variant="default"
  size="lg"
  onClick={() => (window.location.href = '/employers')}
  className="w-full sm:w-auto"
>
            <Search className="w-5 h-5 mr-2" />
            Hire Talent
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto"  onClick={() => (window.location.href = '/jobseekers')}>
            <Download className="w-5 h-5 mr-2" />
            Get Hired
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;