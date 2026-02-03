import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container px-6 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Brand */}
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-foreground tracking-tight">
              Paty Desentis
            </span>
            <span className="text-xs md:text-sm text-muted-foreground">
              Fractional Strategy and AI Officer
            </span>
          </div>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/patricia-desentis/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="hidden sm:inline text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
