import { Card } from "@/components/ui/card";
import { Calendar, BarChart3, Brain, Shield } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms analyze your energy patterns and provide personalized task recommendations.",
  },
  {
    icon: Calendar,
    title: "Smart Calendar Sync",
    description: "Automatically inserts breaks between meetings and optimizes your schedule based on energy data.",
  },
  {
    icon: BarChart3,
    title: "Energy Analytics",
    description: "Visualize your energy trends over time and discover your peak productivity hours.",
  },
  {
    icon: Shield,
    title: "Burnout Prevention",
    description: "Get alerts when you're overextending yourself and receive suggestions to maintain balance.",
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Built for Sustainable Productivity</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to maximize output while protecting your wellbeing
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-gradient-card hover:shadow-soft transition-all duration-300 group border-2 hover:border-primary/20"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-hero group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};