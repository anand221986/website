import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, DollarSign, Users, Heart } from "lucide-react";

const SpecializationsSection = () => {
  const specializations = [
    {
      icon: Code,
      title: "Tech Hiring",
      description: "Software engineers, developers, and IT professionals",
      color: "text-primary"
    },
    {
      icon: DollarSign,
      title: "Finance Hiring",
      description: "Financial analysts, accountants, and banking experts",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Non-Tech Hiring",
      description: "Marketing, sales, and operations professionals",
      color: "text-success"
    },
    {
      icon: Heart,
      title: "Healthcare Hiring",
      description: "Medical professionals and healthcare specialists",
      color: "text-destructive"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Specializations
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We specialize in connecting talent across various industries with precision and expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => {
            const IconComponent = spec.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-secondary flex items-center justify-center ${spec.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {spec.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {spec.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Explore Roles
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;