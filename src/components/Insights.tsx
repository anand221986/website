import { Calendar, ArrowRight } from "lucide-react";

const Insights = () => {
  const articles = [
    {
      badge: "Tech Trends",
      date: "Dec 15, 2023",
      title: "Top 10 Tech Skills in Demand for 2024",
      description:
        "Discover the most sought-after technical skills that employers are looking for this year.",
      readTime: "5 min read",
    },
    {
      badge: "Career Tips",
      date: "Dec 12, 2023",
      title: "How to Ace Your Remote Job Interview",
      description:
        "Essential tips and best practices for succeeding in virtual interviews and landing remote positions.",
      readTime: "7 min read",
    },
    {
      badge: "HR Insights",
      date: "Dec 10, 2023",
      title: "Building Diverse and Inclusive Teams",
      description:
        "Strategies for employers to create more diverse hiring practices and inclusive workplace cultures.",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stay updated with the latest trends in recruitment and career
            development.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div
              key={idx}
              className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full bg-white border-slate-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Card Header */}
              <div className="px-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit bg-teal-100 text-teal-700">
                    {article.badge}
                  </span>
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-1" /> {article.date}
                  </div>
                </div>
                <div className="leading-none font-semibold text-slate-800 hover:text-teal-600 transition-colors">
                  {article.title}
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6">
                <div className="text-sm text-slate-600 mb-4">
                  {article.description}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    {article.readTime}
                  </span>
                  <button className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700 hover:bg-teal-50 h-8 rounded-md gap-1.5 px-3 transition-all">
                    Read More <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
