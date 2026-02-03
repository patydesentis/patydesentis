import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import TheShift from "@/components/sections/TheShift";
import WhatIDo from "@/components/sections/WhatIDo";
import WhyMe from "@/components/sections/WhyMe";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import FitCheck from "@/components/sections/FitCheck";
import Results from "@/components/sections/Results";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <TheShift />
      <WhatIDo />
      <WhyMe />
      <HowItWorks />
      <Services />
      <FitCheck />
      <Results />
      <FinalCTA />
    </main>
  );
};

export default Index;
