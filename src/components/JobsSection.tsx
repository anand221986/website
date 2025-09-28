import React from "react";

const jobs = [
  {
    title: "Data Analyst",
    type: "Full-time",
    company: "Tech Corp",
    salary: "$70k - $90k",
  },
  {
    title: "Frontend Developer",
    type: "Remote",
    company: "StartupXYZ",
    salary: "$80k - $120k",
  },
  {
    title: "Backend Developer",
    type: "Hybrid",
    company: "Enterprise Inc",
    salary: "$90k - $130k",
  },
  {
    title: "Product Manager",
    type: "Full-time",
    company: "Innovation Labs",
    salary: "$100k - $140k",
  },
  {
    title: "UX Designer",
    type: "Remote",
    company: "Design Studio",
    salary: "$75k - $110k",
  },
  {
    title: "DevOps Engineer",
    type: "Hybrid",
    company: "Cloud Solutions",
    salary: "$95k - $135k",
  },
];

const PopularJobRoles = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Popular Job Roles
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover opportunities in high-demand positions across various
            industries.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-xl border py-6 shadow-sm h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-slate-200"
            >
              <div className="px-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold text-slate-800">
                    {job.title}
                  </div>
                  <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium bg-teal-100 text-teal-700">
                    {job.type}
                  </span>
                </div>
                <div className="text-sm text-slate-600">{job.company}</div>
              </div>

              {/* Content */}
              <div className="px-6">
                <p className="text-lg font-semibold text-teal-600 mb-4">
                  {job.salary}
                </p>
                <div className="flex gap-2">
                  {/* <button className="flex-1 h-8 rounded-md px-3 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition">
                    View CVs
                  </button> */}
                <button className="flex-1 h-8 rounded-md px-3 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 transition">
                    Apply Now
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

export default PopularJobRoles;
