import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { User } from "@supabase/supabase-js";
import { Menu, X, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: "Failed to log out.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
      navigate("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <Zap className="h-6 w-6 text-primary" />
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            EnergyFlow AI
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/features" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Pricing
          </Link>
          
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Button onClick={handleLogout} variant="outline" size="sm">
                Log Out
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button variant="default" size="sm">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container px-4 py-4 flex flex-col gap-4">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Button onClick={handleLogout} variant="outline" size="sm" className="w-full">
                  Log Out
                </Button>
              </>
            ) : (
              <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="default" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};
