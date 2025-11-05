import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Developer",
    company: "TechCorp",
    avatar: "SC",
    content:
      "CodeReview AI has transformed our code review process. It catches issues we would have missed and provides valuable suggestions. Our code quality has improved significantly.",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Engineering Manager",
    company: "StartupXYZ",
    avatar: "MR",
    content:
      "The speed and accuracy are incredible. What used to take hours now happens in seconds. It's like having an expert reviewer available 24/7.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Tech Lead",
    company: "DevStudio",
    avatar: "EW",
    content:
      "Integration was seamless and the insights are spot-on. The security vulnerability detection alone has saved us from potential disasters.",
    rating: 5,
  },
  {
    name: "James Kumar",
    role: "Full Stack Developer",
    company: "CloudNative Inc",
    avatar: "JK",
    content:
      "Best investment we've made in our development workflow. The AI understands context and provides meaningful feedback, not just generic suggestions.",
    rating: 5,
  },
  {
    name: "Lisa Park",
    role: "CTO",
    company: "InnovateLabs",
    avatar: "LP",
    content:
      "Our team velocity increased by 40% after implementing CodeReview AI. It's an essential tool for any modern development team.",
    rating: 5,
  },
  {
    name: "David Thompson",
    role: "Software Architect",
    company: "Enterprise Solutions",
    avatar: "DT",
    content:
      "The inline comments are incredibly detailed and actionable. It's like having a senior developer review every line of code.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-[#0f172a] via-[#0a1a1a] to-[#0f172a] text-[#e2e8f0]"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Loved by Developers Worldwide
          </h2>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto">
            Join thousands of developers who trust CodeReview AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 bg-[#1e293b]/70 border border-[#10b981]/20 hover:border-[#fbbf24]/50 transition-all hover:shadow-lg hover:shadow-[#10b981]/10"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#cbd5e1] mb-6">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-[#10b981]/10 text-white">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-[#fef9c3]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#a7f3d0]">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
