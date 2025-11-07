import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Navbar } from "@/components/Navbar";
import { EnergyTracker } from "@/components/EnergyTracker";
import { SmartPrioritizer } from "@/components/SmartPrioritizer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@supabase/supabase-js";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate("/auth");
      } else {
        setUser(session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center h-[80vh]">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      <div className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Welcome back!
          </h1>
          <p className="text-muted-foreground">
            {user?.email}
          </p>
        </div>

        <div className="grid gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Energy Overview</CardTitle>
              <CardDescription>Track your energy levels throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <EnergyTracker />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Smart Task Prioritization</CardTitle>
              <CardDescription>AI-powered task recommendations based on your energy</CardDescription>
            </CardHeader>
            <CardContent>
              <SmartPrioritizer />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
