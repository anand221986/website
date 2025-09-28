import { useEffect, useState } from "react";
import axios from "axios";

interface TestimonialType {
  id: number;
  message: string;
  author_name: string;
  author_designation: string;
  company?: string;
  avatar?: string; // optional if backend provides an image
}

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://16.171.117.2:3000/testimonials")
      .then((response) => {
        setTestimonials(response.data); // backend must return an array of testimonials
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  if (testimonials.length === 0) {
    return (
      <section className="py-20 px-20 bg-white text-center">
        <p className="text-gray-500">Loading testimonials...</p>
      </section>
    );
  }

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section className="py-20 px-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Trusted by companies and professionals worldwide
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl py-6 border-none shadow-lg">
            <div className="p-8 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star h-5 w-5 fill-yellow-400 text-yellow-400"
                      aria-hidden="true"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "{activeTestimonial.message}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-12 w-12">
                  <img
                    src={
                      activeTestimonial.avatar ||
                      "/placeholder.svg?height=40&width=40"
                    }
                    alt={activeTestimonial.author_name}
                    className="aspect-square size-full"
                  />
                </span>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {activeTestimonial.author_name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {activeTestimonial.author_designation}
                    {activeTestimonial.company
                      ? ` at ${activeTestimonial.company}`
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                activeIndex === index ? "bg-teal-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
