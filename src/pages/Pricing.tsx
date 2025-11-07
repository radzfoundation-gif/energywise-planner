import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for trying out EnergyFlow AI",
      features: [
        "Basic energy tracking (3x daily)",
        "Top 3 task suggestions",
        "7-day energy history",
        "Mobile app access",
      ],
    },
    {
      name: "Pro",
      price: "$12",
      description: "For professionals serious about productivity",
      features: [
        "Everything in Free",
        "Unlimited energy tracking",
        "Advanced AI prioritization",
        "Calendar integration",
        "30-day energy analytics",
        "Custom break scheduling",
      ],
      popular: true,
    },
    {
      name: "Business",
      price: "$29",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team energy insights",
        "Admin dashboard",
        "Priority support",
        "Custom integrations",
        "Unlimited history",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple,{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "border-primary shadow-glow" : ""}
            >
              <CardHeader>
                {plan.popular && (
                  <div className="text-xs font-semibold text-primary mb-2">
                    MOST POPULAR
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "$0" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <Link to="/auth">
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    className="w-full mb-6"
                  >
                    Get Started
                  </Button>
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
