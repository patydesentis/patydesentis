import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phases = [
    {
      number: "01",
      title: "DIAGNOSTIC",
      description: "I go deep into your business. Numbers. Processes. People. No templates. No assumptions.",
      output: "A brutally honest map of what's working and what's not.",
    },
    {
      number: "02",
      title: "STRATEGY",
      description: "We define the 3-5 moves that actually matter. Not 47 initiatives. Not a 90-page deck.",
      output: "A clear plan you can execute this quarter.",
    },
    {
      number: "03",
      title: "AI IMPLEMENTATION",
      description: "We automate what should be automated. We build systems that run without you.",
      output: "Time back. Clarity. Leverage.",
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
            Fast. Focused. <span className="text-gradient">Done.</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12 md:space-y-0">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-8 ${
                    index % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_4px_hsl(185_85%_55%_/_0.4)]" />

                  <div className={`${index % 2 === 0 ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                    <span className="text-primary text-sm font-bold tracking-wider mb-2 block">
                      PHASE {phase.number}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{phase.title}</h3>
                    <p className="text-muted-foreground mb-4">{phase.description}</p>
                    <div className="inline-flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-2">
                      <span className="text-primary text-sm font-medium">Output:</span>
                      <span className="text-foreground/80 text-sm">{phase.output}</span>
                    </div>
                  </div>

                  {index % 2 === 0 && <div className="hidden md:block" />}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
