import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-glow to-glow-purple flex items-center justify-center font-bold shadow-lg shadow-glow/20">
            n
          </div>
          <span className="font-heading font-bold text-xl tracking-tight hidden sm:block">AI Automation</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#curriculum" className="text-sm font-medium text-foreground/60 hover:text-glow transition-colors hidden md:block">Lộ trình</a>
          <a href="#outcomes" className="text-sm font-medium text-foreground/60 hover:text-glow transition-colors hidden md:block">Kết quả</a>
          <a href="#pricing" className="text-sm font-medium text-foreground/60 hover:text-glow transition-colors hidden md:block">Học phí</a>
          <button 
            onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            className={cn(buttonVariants({ size: "sm" }), "font-heading font-bold uppercase tracking-wider bg-foreground text-background px-6 rounded-full hover:bg-glow hover:text-background transition-all cursor-pointer")}
          >
            ĐĂNG KÝ <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
