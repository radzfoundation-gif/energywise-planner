import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Battery, BatteryMedium, BatteryLow } from "lucide-react";
import { useState } from "react";

type EnergyLevel = "high" | "medium" | "low";

export const EnergyTracker = () => {
  const [selectedLevel, setSelectedLevel] = useState<EnergyLevel | null>(null);
  
  const energyOptions: { level: EnergyLevel; icon: typeof Battery; label: string; color: string }[] = [
    { level: "high", icon: Battery, label: "High Energy", color: "energy-high" },
    { level: "medium", icon: BatteryMedium, label: "Medium Energy", color: "energy-medium" },
    { level: "low", icon: BatteryLow, label: "Low Energy", color: "energy-low" },
  ];
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Track Your Energy in Seconds</h2>
          <p className="text-lg text-muted-foreground">
            Quick check-ins, 3 times a day. That's all it takes.
          </p>
        </div>
        
        <Card className="p-8 bg-gradient-card shadow-soft">
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">How's your energy right now?</h3>
              <p className="text-sm text-muted-foreground">Select one to continue</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {energyOptions.map(({ level, icon: Icon, label, color }) => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level)}
                  className={`
                    group relative p-6 rounded-xl border-2 transition-all duration-300
                    ${selectedLevel === level 
                      ? `border-${color} bg-${color}/10 shadow-glow` 
                      : 'border-border hover:border-muted-foreground/50 hover:shadow-soft'
                    }
                  `}
                >
                  <div className="flex flex-col items-center gap-3">
                    <Icon 
                      className={`h-12 w-12 transition-colors ${
                        selectedLevel === level ? `text-${color}` : 'text-muted-foreground'
                      }`}
                    />
                    <span className={`font-medium ${
                      selectedLevel === level ? `text-${color}` : 'text-foreground'
                    }`}>
                      {label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="pt-4">
              <Button 
                className="w-full" 
                size="lg"
                disabled={!selectedLevel}
              >
                Save Energy Level
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};