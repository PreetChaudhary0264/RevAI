import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Connect Repository",
    description: "Link your GitHub repository with a single click. No complex setup required.",
  },
  {
    step: "02",
    title: "Open Pull Request",
    description: "Create a PR as usual. Our AI automatically detects new pull requests.",
  },
  {
    step: "03",
    title: "AI Review",
    description: "CodeReview AI analyzes your code for bugs, security issues, and improvements.",
  },
  {
    step: "04",
    title: "Get Feedback",
    description: "Receive detailed comments and suggestions directly on your PR within seconds.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#0f172a] via-[#0a1a1a] to-[#0f172a] text-[#e2e8f0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Get started in minutes with our simple 4-step process
          </p>
        </div>

        {/* Flowchart */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="w-16 h-16 rounded-full bg-white text-[#0f172a] font-bold text-2xl flex items-center justify-center mb-4 relative z-10 shadow-lg">
                    {step.step}
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <ArrowRight className="lg:hidden text-[#fbbf24] my-4 h-8 w-8" />
                  )}

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-2 text-[#fef9c3]">
                    {step.title}
                  </h3>
                  <p className="text-[#cbd5e1]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Flow Diagram */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-[#1e293b]/70 border border-[#10b981]/30 rounded-lg p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg bg-[#10b981]/10 flex items-center justify-center mb-2">
                  <span className="text-3xl">📦</span>
                </div>
                <span className="text-sm font-medium text-[#fef9c3]">Your Repo</span>
              </div>

              <ArrowRight className="text-[#fbbf24] h-8 w-8 rotate-90 md:rotate-0" />

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg bg-[#10b981]/10 flex items-center justify-center mb-2">
                  <span className="text-3xl">🔄</span>
                </div>
                <span className="text-sm font-medium text-[#fef9c3]">New PR</span>
              </div>

              <ArrowRight className="text-[#fbbf24] h-8 w-8 rotate-90 md:rotate-0" />

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg bg-[#10b981]/20 flex items-center justify-center mb-2 animate-pulse">
                  <span className="text-3xl">🤖</span>
                </div>
                <span className="text-sm font-medium text-[#fef9c3]">AI Analysis</span>
              </div>

              <ArrowRight className="text-[#fbbf24] h-8 w-8 rotate-90 md:rotate-0" />

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-lg bg-[#10b981]/10 flex items-center justify-center mb-2">
                  <span className="text-3xl">✅</span>
                </div>
                <span className="text-sm font-medium text-[#fef9c3]">Comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
