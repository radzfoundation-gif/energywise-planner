import { Navbar } from "@/components/Navbar";
import { FeaturesGrid } from "@/components/FeaturesGrid";

export default function Features() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Energy Management
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to optimize your daily productivity and prevent burnout
          </p>
        </div>
        <FeaturesGrid />
      </div>
    </div>
  );
}
