import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Rocket, MessageSquare } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Zap,
      title: "Diagnostic Sprint",
      description: "Deep-dive into your business. Identification of bottlenecks. Prioritized recommendations.",
      tag: "Best if you need clarity, fast.",
    },
    {
      icon: Rocket,
      title: "Full Transformation",
      description: "Diagnosis + Strategy + Implementation. Automation of key processes. Support until it runs on its own.",
      tag: "Best if you're ready to actually change.",
    },
    {
      icon: MessageSquare,
      title: "Strategic Copilot",
      description: "Monthly direction sessions. Review of key decisions. Direct access when you need it.",
      tag: "Best if you need a thought partner who challenges you.",
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
            Three ways to <span className="text-gradient">work together.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_50px_-10px_hsl(185_85%_55%_/_0.25)] flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-primary font-medium">{service.tag}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
