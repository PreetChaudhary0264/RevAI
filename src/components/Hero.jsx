import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Github, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0b1c17] via-[#113c34] to-[#1b5b4a] pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#34d399]/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#facc15]/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#fef9c3]/10 backdrop-blur-sm border border-[#facc15]/40 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-[#facc15]" />
            <span className="text-sm text-[#fef9c3]">AI-Powered Code Review</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-[#34d399] to-[#facc15]"
            style={{ animationDelay: "0.1s" }}
          >
            Automated Code Reviews
            <br />
            Right in Your PRs
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-[#d1fae5] mb-10 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Connect your GitHub repository and let AI review your code, catch bugs,
            and add insightful comments directly on your pull requests.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              variant="hero"
              size="lg"
              className="group bg-gradient-to-r from-[#34d399] to-[#facc15] text-[#0b1c17] font-semibold hover:opacity-90 transition-all"
              asChild
            >
              <Link to="/get-started">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group border border-[#facc15]/50 text-[#facc15] hover:bg-[#facc15]/10"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <div className="text-4xl font-bold text-[#34d399] mb-2">10+</div>
              <div className="text-sm text-[#d1fae5]">Reviews Done</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#34d399] mb-2">50+</div>
              <div className="text-sm text-[#d1fae5]">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#34d399] mb-2">80.0%</div>
              <div className="text-sm text-[#d1fae5]">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

