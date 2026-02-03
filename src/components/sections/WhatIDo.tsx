import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Map, Zap } from "lucide-react";

const WhatIDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "DIAGNOSE",
      description: "Find what's actually broken",
      icon: Search,
    },
    {
      number: "02",
      title: "STRATEGIZE",
      description: "Build the roadmap that matters",
      icon: Map,
    },
    {
      number: "03",
      title: "AUTOMATE",
      description: "Implement AI where it actually works",
      icon: Zap,
    },
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="container px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            I transform traditional businesses{" "}
            <span className="text-gradient">with AI.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_40px_-10px_hsl(185_85%_55%_/_0.3)]">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center text-lg text-muted-foreground max-w-2xl mx-auto italic"
        >
          "I don't sell AI for the sake of AI. I sell clarity, speed, and leverage. The technology is just how we get there."
        </motion.p>
      </div>
    </section>
  );
};

export default WhatIDo;
