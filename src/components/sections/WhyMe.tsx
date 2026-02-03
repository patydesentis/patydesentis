import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WhyMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const credentials = [
    "500 Global",
    "BBVA Bancomer",
    "Innova Schools",
    "Collective Academy",
    "Promotora Social Mexico",
  ];

  const awards = [
    "100+ investments",
    "7,000+ companies analyzed",
    "LAVCA Emerging Investor",
    "Expansión 30 Promesas",
    "LinkedIn Top Voice",
  ];

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-secondary/20">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              <span className="text-gradient">10 years</span> on the other side of the table.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground text-center mb-16"
          >
            <p>
              I've evaluated <span className="text-foreground font-medium">7,000+ companies</span>. 
              Invested in <span className="text-foreground font-medium">100+</span>. 
              Watched the best scale and the rest struggle.
            </p>
            <p>
              I know what makes a business defensible. I know where most companies leak time, money, and energy. 
              <span className="text-primary font-medium"> I know how to see around corners.</span>
            </p>
            <p className="text-foreground font-medium text-xl">
              Now I'm on your side of the table.
            </p>
            <p className="text-primary">
              Same sharp eye. Different mission.
            </p>
          </motion.div>

          {/* Credentials */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {credentials.map((cred, index) => (
                <span 
                  key={index}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm md:text-base"
                >
                  {cred}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              {awards.map((award, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground/80"
                >
                  {award}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
