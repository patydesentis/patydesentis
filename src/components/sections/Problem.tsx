import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Problem = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const painPoints = [
    "Everything runs through you (and it's exhausting)",
    "Your team is busy, but the needle barely moves",
    "You know AI could help—but where do you even start?",
    "You grew fast. Now you're stuck.",
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container relative z-10 px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-6 text-lg md:text-xl text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-foreground font-medium"
            >
              Your business makes money.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-foreground font-medium"
            >
              But you're exhausted.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground"
            >
              Your team is busy doing... stuff.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground"
            >
              And "AI" sounds like something you should care about but don't.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-center mb-10"
          >
            But let's be honest:
          </motion.p>

          <div className="space-y-4 mb-12">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="text-primary text-xl mt-0.5">→</span>
                <p className="text-foreground text-lg">{point}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-center space-y-4"
          >
            <p className="text-muted-foreground text-lg">
              It's not a talent problem. <span className="text-primary font-medium">It's a systems problem.</span>
            </p>
            <p className="text-muted-foreground text-lg">And systems can be fixed.</p>
            <p className="text-foreground font-medium text-xl mt-8">Sound familiar?</p>
            <p className="text-primary font-medium text-lg">Good. Keep reading.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
