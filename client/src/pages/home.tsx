import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TourCard } from "@/components/TourCard";
import { tours } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax-like effect */}
        <div className="absolute inset-0 z-0">
          <img
            src={tours[0].image}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-in slide-in-from-bottom-8 duration-1000">
            Discover the <span className="text-accent italic">Extraordinary</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light tracking-wide animate-in slide-in-from-bottom-8 duration-1000 delay-200">
            Curated adventures for the modern explorer. Experience the world's most breathtaking destinations in style.
          </p>

          {/* Search Bar */}
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 max-w-4xl mx-auto flex flex-col md:flex-row gap-2 shadow-2xl animate-in fade-in zoom-in-95 duration-1000 delay-300">
            <div className="flex-1 bg-white rounded-xl flex items-center px-4 h-14">
               <MapPin className="text-primary h-5 w-5 mr-3" />
               <Input 
                 placeholder="Where do you want to go?" 
                 className="border-none shadow-none focus-visible:ring-0 text-base" 
               />
            </div>
            <div className="flex-1 bg-white rounded-xl flex items-center px-4 h-14">
               <Calendar className="text-primary h-5 w-5 mr-3" />
               <Input 
                 placeholder="When?" 
                 className="border-none shadow-none focus-visible:ring-0 text-base" 
               />
            </div>
            <Button size="lg" className="h-14 px-8 rounded-xl text-lg font-semibold bg-accent hover:bg-accent/90 text-white shadow-lg shadow-accent/20">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl font-bold text-primary mb-2">Featured Adventures</h2>
            <p className="text-muted-foreground">Handpicked experiences for your next journey.</p>
          </div>
          <Button variant="outline" className="hidden md:flex gap-2 group">
            View All Tours <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${tour.id * 100}ms` }}>
              <TourCard tour={tour} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">View All Tours</Button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 text-primary">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">Expert Guides</h3>
              <p className="text-muted-foreground">Our local experts know every hidden gem and secret spot to ensure an authentic experience.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 text-primary">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">Flexible Booking</h3>
              <p className="text-muted-foreground">Plans change. That's why we offer free cancellation up to 24 hours before your trip.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 text-primary">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3">5-Star Quality</h3>
              <p className="text-muted-foreground">We rigorously vet every tour and activity to guarantee the highest standards of safety and enjoyment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">Start Your Adventure</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Subscribe to our newsletter for exclusive deals, travel inspiration, and insider tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Enter your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 text-lg" 
              />
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90 h-12 px-8 text-lg font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
