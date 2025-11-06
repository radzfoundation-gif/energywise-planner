import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import heroImage from "@/assets/hero-energy.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
      </div>
      
      <div className="container relative z-10 px-4 py-20 text-center animate-fade-in">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Zap className="h-4 w-4" />
            AI-Powered Energy Management
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Work With Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Energy Flow
            </span>
            {" "}Not Against It
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Stop burning out. EnergyFlow AI aligns your tasks with your natural energy patterns, 
            helping you accomplish more while staying energized throughout the day.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="text-base px-8">
              Start Your Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-base">
              Watch Demo
            </Button>
          </div>
          
          <div className="pt-8 text-sm text-muted-foreground">
            Join 10,000+ professionals preventing burnout with EnergyFlow AI
          </div>
        </div>
      </div>
    </section>
  );
};