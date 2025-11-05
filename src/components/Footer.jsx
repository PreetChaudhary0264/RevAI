import { Code2, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">RevAI</span>
            </div>
            <p className="text-slate-400 text-sm">
              Automated code reviews powered by AI. Ship faster with confidence.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Product</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Connect</h3>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-400 hover:bg-blue-500/10"
                asChild
              >
                <a href="https://github.com/PreetChaudhary0264" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-400 hover:bg-blue-500/10"
                asChild
              >
                <a href="https://x.com/PreetSi11143247" target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-blue-400 hover:bg-blue-500/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/preet-chaudhary-5523a0306/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2025 RevAI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
