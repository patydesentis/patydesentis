import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TheShift = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-secondary/20">
      <div className="container px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-tight">
            What if your business ran like a startup—
            <span className="text-gradient">without the chaos?</span>
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground text-left md:text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Startups move fast because they have to. They diagnose problems quickly. They automate ruthlessly. They make decisions with data, not gut feelings.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I spent a decade inside venture capital. I watched thousands of companies—some scale, most die.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-foreground font-medium"
            >
              The difference? Not luck. <span className="text-primary">Structure. Focus. The right tools at the right time.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Now I bring that playbook to businesses like yours.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-foreground"
            >
              Not to turn you into a startup. <span className="text-primary font-medium">To give you the unfair advantages they have.</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheShift;
