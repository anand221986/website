const FAQ = () => {
  const faqs = [
    {
      question: "How long does the recruitment process take?",
      answer:
        "Our average time to hire is 18 days, but this can vary depending on the role complexity and your specific requirements.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We specialize in technology, finance, healthcare, and consulting, with deep expertise in technical roles and executive positions.",
    },
    {
      question: "Do you offer any guarantees?",
      answer:
        "Yes, we offer a 90-day replacement guarantee. If a placed candidate doesn't work out within 90 days, we'll find a replacement at no additional cost.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Our pricing varies by service type and role level. Contact us for a customized quote based on your specific needs.",
    },
  ];

  return (
    <section className="py-20 px-5 bg-white">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm"
              >
                <div className="px-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
