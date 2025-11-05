import { Card } from "./ui/card";
import { Bot, Shield, Zap, GitBranch, MessageSquare, Lock } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Analysis",
    description: "Advanced machine learning models analyze your code for bugs, vulnerabilities, and best practices.",
  },
  {
    icon: GitBranch,
    title: "GitHub Integration",
    description: "Seamlessly integrates with your GitHub workflow. Reviews happen automatically on every PR.",
  },
  {
    icon: MessageSquare,
    title: "Inline Comments",
    description: "Get detailed, actionable feedback directly in your pull requests, just like a human reviewer.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Reviews complete in seconds, not hours. Keep your development velocity high.",
  },
  {
    icon: Shield,
    title: "Security Focused",
    description: "Identifies security vulnerabilities and potential exploits before they reach production.",
  },
  {
    icon: Lock,
    title: "Private & Secure",
    description: "Your code never leaves your infrastructure. Complete privacy and security guaranteed.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-br from-[#0f172a] via-[#0a1a1a] to-[#0f172a] text-[#e2e8f0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Powerful Features for Modern Teams
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Everything you need to maintain code quality and ship faster
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-[#1e293b]/60 border border-[#10b981]/30 hover:border-[#fbbf24]/60 transition-all hover:shadow-lg hover:shadow-[#fbbf24]/10 group rounded-xl"
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#10b981]/10 text-[#10b981] group-hover:bg-[#fbbf24] group-hover:text-[#0f172a] transition-all">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-[#cbd5e1]">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
