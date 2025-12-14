import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Sparkles, MapPin, Calendar as CalendarIcon, Wallet, Loader2, ArrowRight } from "lucide-react";
import { TourCard } from "@/components/TourCard";
import { tours } from "@/lib/data";

export default function AIPlanner() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedTour, setGeneratedTour] = useState<typeof tours[0] | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      setIsGenerating(false);
      // For demo purposes, we'll just pick a random tour, but in a real app
      // this would use the inputs to query an AI backend
      setGeneratedTour(tours[Math.floor(Math.random() * tours.length)]);
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              AI Trip Planner
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us your dream vacation vibe, and our AI will craft the perfect itinerary for you in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Input Form */}
            <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 md:p-8 space-y-6">
                <form onSubmit={handleGenerate} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Where do you want to go?</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input id="destination" placeholder="e.g. Japan, Italy, Anywhere" className="pl-9" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vibe">What's your travel vibe?</Label>
                    <Textarea 
                      id="vibe" 
                      placeholder="e.g. Relaxing beach vacation with good food, or Adventurous hiking trip with history..." 
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label>Budget Level</Label>
                      <span className="text-sm text-muted-foreground">Moderate</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Budget</span>
                      <span>Luxury</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Duration</Label>
                    <div className="flex gap-2">
                      <Button type="button" variant="outline" className="flex-1">3-5 Days</Button>
                      <Button type="button" variant="outline" className="flex-1 bg-primary/5 border-primary text-primary">1 Week</Button>
                      <Button type="button" variant="outline" className="flex-1">2 Weeks+</Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full text-lg h-12" disabled={isGenerating}>
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Crafting your journey...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Itinerary
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Results Area */}
            <div className="space-y-6">
              {!generatedTour && !isGenerating && (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-border rounded-xl min-h-[400px]">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                    <MapPin className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Ready to plan?</h3>
                  <p className="text-muted-foreground">
                    Fill out the form to let our AI design your perfect trip.
                  </p>
                </div>
              )}

              {isGenerating && (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 min-h-[400px]">
                  <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                    <Sparkles className="absolute inset-0 m-auto h-8 w-8 text-primary animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Analyzing destinations...</h3>
                  <p className="text-muted-foreground animate-pulse">
                    Finding hidden gems matching your vibe...
                  </p>
                </div>
              )}

              {generatedTour && !isGenerating && (
                <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">Your Custom Itinerary</h3>
                    <Button variant="ghost" className="text-sm text-muted-foreground" onClick={() => setGeneratedTour(null)}>
                      Clear
                    </Button>
                  </div>
                  <TourCard tour={generatedTour} />
                  
                  <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex gap-3">
                      <Sparkles className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-sm mb-1">AI Recommendation</h4>
                        <p className="text-sm text-muted-foreground">
                          Based on your request for a relaxing trip, we selected this package because it includes private transfers and verified quiet accommodations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
