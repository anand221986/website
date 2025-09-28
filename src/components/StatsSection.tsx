const StatsSection = () => {
  const stats = [
    {
      number: "10,000+",
      label: "Active Candidates",
      description: "Skilled professionals ready for opportunities"
    },
    {
      number: "2,500+",
      label: "Jobs Placed",
      description: "Successful placements across industries"
    },
    {
      number: "500+",
      label: "Partner Companies",
      description: "Trusted employers worldwide"
    },
    {
      number: "98%",
      label: "Success Rate",
      description: "Client satisfaction and retention"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of professionals and companies worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;