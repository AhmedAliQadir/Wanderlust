import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Compass, Menu, X, WifiOff, Map, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  const { toast } = useToast();

  const toggleOfflineMode = () => {
    setIsOfflineMode(!isOfflineMode);
    if (!isOfflineMode) {
      toast({
        title: "Offline Mode Enabled",
        description: "Itineraries and tickets downloaded for offline access.",
      });
    } else {
      toast({
        title: "Back Online",
        description: "Syncing latest updates...",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <Compass className="h-8 w-8 text-primary group-hover:rotate-45 transition-transform duration-500" />
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              Wanderlust
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <a className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          </Link>
          <Link href="/tours">
            <a className="text-sm font-medium hover:text-primary transition-colors">Tours</a>
          </Link>
          <Link href="/ai-planner">
            <a className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              AI Planner <span className="bg-accent/20 text-accent-foreground text-[10px] px-1.5 py-0.5 rounded-full font-bold">NEW</span>
            </a>
          </Link>
          <Link href="/about">
            <a className="text-sm font-medium hover:text-primary transition-colors">About</a>
          </Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleOfflineMode}
            className={isOfflineMode ? "text-primary bg-primary/10" : "text-muted-foreground"}
            title={isOfflineMode ? "Offline Mode Active" : "Enable Offline Mode"}
          >
            {isOfflineMode ? <WifiOff className="h-5 w-5" /> : <Download className="h-5 w-5" />}
          </Button>

          <Link href="/auth">
            <Button variant="ghost" className="font-medium">
              Log in
            </Button>
          </Link>
          <Link href="/auth">
            <Button className="rounded-full px-6 font-semibold shadow-lg shadow-primary/20">
              Sign up
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-2">
           <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleOfflineMode}
            className={isOfflineMode ? "text-primary bg-primary/10" : "text-muted-foreground"}
          >
            {isOfflineMode ? <WifiOff className="h-5 w-5" /> : <Download className="h-5 w-5" />}
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                <Link href="/">
                  <a className="text-xl font-serif font-bold" onClick={() => setIsOpen(false)}>Home</a>
                </Link>
                <Link href="/tours">
                  <a className="text-xl font-serif font-bold" onClick={() => setIsOpen(false)}>All Tours</a>
                </Link>
                 <Link href="/ai-planner">
                  <a className="text-xl font-serif font-bold text-accent" onClick={() => setIsOpen(false)}>AI Trip Planner</a>
                </Link>
                <Link href="/about">
                  <a className="text-xl font-serif font-bold" onClick={() => setIsOpen(false)}>About Us</a>
                </Link>
                <div className="flex flex-col gap-4 mt-4">
                  <Link href="/auth">
                    <Button className="w-full" variant="outline" onClick={() => setIsOpen(false)}>Log in</Button>
                  </Link>
                  <Link href="/auth">
                    <Button className="w-full" onClick={() => setIsOpen(false)}>Sign up</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
