import { Code2, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-8 w-8 text-primary text-white" />
            <span className="text-xl text-white font-bold">RevAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-white">
            <Button variant="nav" onClick={() => scrollToSection("features")}>
              Features
            </Button>
            <Button variant="nav" onClick={() => scrollToSection("how-it-works")}>
              How It Works
            </Button>
            <Button variant="nav" onClick={() => scrollToSection("testimonials")}>
              Testimonials
            </Button>
            <Button variant="default" size="sm" asChild>
              <Link className="bg-gradient-to-r from-[#34d399] to-[#facc15] text-black" to="/get-started">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <Button
              variant="nav"
              onClick={() => scrollToSection("features")}
              className="w-full justify-start"
            >
              Features
            </Button>
            <Button
              variant="nav"
              onClick={() => scrollToSection("how-it-works")}
              className="w-full justify-start"
            >
              How It Works
            </Button>
            <Button
              variant="nav"
              onClick={() => scrollToSection("testimonials")}
              className="w-full justify-start"
            >
              Testimonials
            </Button>
            <Button variant="default" size="sm" className="w-full" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
