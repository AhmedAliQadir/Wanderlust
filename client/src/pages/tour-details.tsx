import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { tours } from "@/lib/data";
import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Star, Users, CheckCircle2, Info, Instagram, Heart, Share2, Download, WifiOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import social1 from "@assets/generated_images/happy_traveler_selfie_at_beach.png";
import social2 from "@assets/generated_images/hiker_view_from_mountain_peak.png";
import social3 from "@assets/generated_images/couple_exploring_ancient_ruins.png";
import social4 from "@assets/generated_images/group_of_friends_around_campfire.png";
import social5 from "@assets/generated_images/local_food_street_market.png";

const socialPosts = [
  { id: 1, user: "@travel_junkie", image: social1, likes: 234, text: "Best trip ever! 😍" },
  { id: 2, user: "@wander_lust", image: social2, likes: 892, text: "The views were insane." },
  { id: 3, user: "@couple_goals", image: social3, likes: 567, text: "Magical moments." },
  { id: 4, user: "@camp_vibes", image: social4, likes: 120, text: "Nights like these." },
  { id: 5, user: "@foodie_adventures", image: social5, likes: 345, text: "So delicious!" },
];

export default function TourDetails() {
  const [match, params] = useRoute("/tour/:id");
  const { toast } = useToast();
  
  if (!match) return <div>Tour not found</div>;
  
  const tour = tours.find(t => t.id === parseInt(params.id));
  
  if (!tour) return <div className="min-h-screen flex items-center justify-center">Tour not found</div>;

  const handleBook = () => {
    toast({
      title: "Booking Initiated",
      description: "This is a demo. In a real app, this would open stripe.",
    });
  };
  
  const handleDownload = () => {
    toast({
      title: "Itinerary Downloaded",
      description: "You can now access this trip offline via the app.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Header */}
      <div className="relative h-[60vh] md:h-[70vh]">
        <img 
          src={tour.image} 
          alt={tour.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 container mx-auto">
          <div className="flex justify-between items-end">
            <div>
              <Badge className="mb-4 bg-accent text-white hover:bg-accent/90">{tour.duration} Adventure</Badge>
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4 shadow-sm">{tour.title}</h1>
              <div className="flex flex-wrap gap-6 text-foreground/80 font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {tour.location}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  {tour.rating} ({tour.reviews} reviews)
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Max {tour.maxGroupSize} Guests
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex gap-3">
              <Button variant="outline" className="bg-background/20 backdrop-blur-md border-white/20 text-white hover:bg-white/20" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" /> Save Offline
              </Button>
              <Button variant="outline" size="icon" className="bg-background/20 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Overview */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {tour.description} Experience the ultimate journey through {tour.location}. 
              Our expert guides will take you off the beaten path to discover hidden gems 
              and authentic local culture. This {tour.duration} itinerary is carefully crafted 
              to balance adventure with relaxation.
            </p>
          </section>

          {/* Social Proof Gallery */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-serif text-3xl font-bold text-primary">Traveler Moments</h2>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <Instagram className="h-4 w-4" />
                <span>#Wanderlust{tour.location.split(',')[0]}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {socialPosts.map((post) => (
                <div key={post.id} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                  <img src={post.image} alt={post.text} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3 text-white">
                    <p className="text-xs font-medium truncate">{post.user}</p>
                    <div className="flex items-center gap-1 text-xs mt-1">
                      <Heart className="h-3 w-3 fill-white" /> {post.likes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Highlights */}
          <section>
             <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Highlights</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30">
                   <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                   <div>
                     <h4 className="font-semibold mb-1">Highlight {i}</h4>
                     <p className="text-sm text-muted-foreground">Experience something truly unique and memorable on this trip.</p>
                   </div>
                 </div>
               ))}
             </div>
          </section>

          {/* Itinerary Tabs */}
          <section>
            <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Itinerary</h2>
            <Tabs defaultValue="day1" className="w-full">
              <TabsList className="w-full justify-start h-auto p-1 bg-secondary/50 overflow-x-auto">
                <TabsTrigger value="day1" className="py-3 px-6">Day 1</TabsTrigger>
                <TabsTrigger value="day2" className="py-3 px-6">Day 2</TabsTrigger>
                <TabsTrigger value="day3" className="py-3 px-6">Day 3</TabsTrigger>
              </TabsList>
              <div className="mt-6 border-l-2 border-primary/20 pl-8 ml-4 relative">
                <TabsContent value="day1" className="space-y-4">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold">Arrival & Welcome</h3>
                  <p className="text-muted-foreground">Arrive at the destination and meet your guide. Transfer to your luxury accommodation and enjoy a welcome dinner with the group.</p>
                </TabsContent>
                <TabsContent value="day2" className="space-y-4">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold">Exploration Begins</h3>
                  <p className="text-muted-foreground">Start the day with a sunrise hike followed by a visit to local markets. Afternoon free for leisure or optional activities.</p>
                </TabsContent>
                <TabsContent value="day3" className="space-y-4">
                   <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                  <h3 className="text-xl font-bold">Deep Dive</h3>
                  <p className="text-muted-foreground">Immerse yourself in the local culture with a cooking class and a visit to historical sites.</p>
                </TabsContent>
              </div>
            </Tabs>
          </section>
        </div>

        {/* Sidebar Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-border bg-card shadow-xl p-8 space-y-6">
            <div className="flex items-end justify-between border-b border-border pb-6">
              <div>
                <p className="text-muted-foreground text-sm">Price per person</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">${tour.price}</span>
                  <span className="text-muted-foreground">USD</span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full text-yellow-800 text-sm font-semibold">
                <Star className="h-4 w-4 fill-yellow-800" />
                {tour.rating}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Select Date</h4>
              <div className="grid grid-cols-2 gap-2">
                {tour.startDates.map((date, idx) => (
                  <Button 
                    key={idx} 
                    variant="outline" 
                    className={`justify-start h-auto py-3 ${idx === 0 ? 'border-primary bg-primary/5 ring-1 ring-primary' : ''}`}
                  >
                    <div className="text-left">
                      <div className="font-semibold">{new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</div>
                      <div className="text-xs text-muted-foreground">2024</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Guests</h4>
              <div className="flex items-center justify-between border border-input rounded-md p-3">
                 <span className="text-sm">Number of people</span>
                 <div className="flex items-center gap-3">
                   <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-secondary">-</Button>
                   <span className="font-medium w-4 text-center">2</span>
                   <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-secondary">+</Button>
                 </div>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">${tour.price} x 2 people</span>
                <span>${tour.price * 2}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Service fee</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-border pt-3">
                <span>Total</span>
                <span>${tour.price * 2}</span>
              </div>
            </div>

            <Button size="lg" className="w-full text-lg font-semibold shadow-lg shadow-primary/20" onClick={handleBook}>
              Book Now
            </Button>
            
            <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-2">
              <Info className="h-3 w-3" /> You won't be charged yet
            </p>
          </div>
          
           {/* Offline Mode Promo */}
           <div className="mt-6 p-4 bg-secondary/50 rounded-2xl flex items-start gap-3">
             <div className="bg-background p-2 rounded-full shadow-sm">
               <WifiOff className="h-5 w-5 text-primary" />
             </div>
             <div>
               <h4 className="font-semibold text-sm">Going off the grid?</h4>
               <p className="text-xs text-muted-foreground mt-1">Download this itinerary and access your tickets without internet.</p>
               <Button variant="link" className="p-0 h-auto text-xs mt-2 text-primary" onClick={handleDownload}>
                 Download to App
               </Button>
             </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
