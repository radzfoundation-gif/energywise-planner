import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Clock, Zap } from "lucide-react";

type Task = {
  id: string;
  title: string;
  energyLevel: "high" | "medium" | "low";
  estimatedTime: string;
  category: string;
};

export const SmartPrioritizer = () => {
  const topTasks: Task[] = [
    {
      id: "1",
      title: "Quarterly strategy presentation",
      energyLevel: "high",
      estimatedTime: "2h",
      category: "Strategic",
    },
    {
      id: "2",
      title: "Review team performance reports",
      energyLevel: "medium",
      estimatedTime: "1h",
      category: "Management",
    },
    {
      id: "3",
      title: "Reply to routine emails",
      energyLevel: "low",
      estimatedTime: "30m",
      category: "Communication",
    },
  ];
  
  const getEnergyColor = (level: Task["energyLevel"]) => {
    switch (level) {
      case "high":
        return "bg-energy-high/10 text-energy-high border-energy-high/20";
      case "medium":
        return "bg-energy-medium/10 text-energy-medium border-energy-medium/20";
      case "low":
        return "bg-energy-low/10 text-energy-low border-energy-low/20";
    }
  };
  
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-primary mb-4">
            <Zap className="h-6 w-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">AI Prioritization</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Your Top 3 Tasks for Today</h2>
          <p className="text-lg text-muted-foreground">
            Perfectly matched to your current energy level
          </p>
        </div>
        
        <div className="space-y-4">
          {topTasks.map((task, index) => (
            <Card 
              key={task.id} 
              className="p-6 bg-gradient-card hover:shadow-soft transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {task.title}
                    </h3>
                    <button className="text-muted-foreground hover:text-foreground transition-colors">
                      <CheckCircle2 className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline" className={getEnergyColor(task.energyLevel)}>
                      {task.energyLevel.toUpperCase()} ENERGY
                    </Badge>
                    <Badge variant="outline" className="border-muted-foreground/20">
                      <Clock className="h-3 w-3 mr-1" />
                      {task.estimatedTime}
                    </Badge>
                    <Badge variant="outline" className="border-muted-foreground/20">
                      {task.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};