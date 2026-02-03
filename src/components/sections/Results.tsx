import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CreditCard, Brain, Building2, Globe } from "lucide-react";

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = [
    {
      icon: CreditCard,
      industry: "FINTECH",
      result: "Cut customer service workload by 70% with AI implementation",
    },
    {
      icon: Brain,
      industry: "AI STARTUP",
      result: "Aligned exec team + board. Built first unified roadmap for Series A.",
    },
    {
      icon: Building2,
      industry: "INFRASTRUCTURE",
      result: "Structured $20M MXN raise. Projected 28% IRR.",
    },
    {
      icon: Globe,
      industry: "GLOBAL NGO",
      result: "Built 30+ partner ecosystem for the World Cup 2026 campaign.",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-secondary/20">
      <div className="container px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Recent <span className="text-gradient">work.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {results.map((item, index) => (
            <motion.div
              key={item.industry}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_hsl(185_85%_55%_/_0.2)]">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                
                <span className="text-xs font-bold tracking-wider text-primary mb-3 block">
                  {item.industry}
                </span>
                <p className="text-foreground/90 text-sm leading-relaxed">
                  {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
