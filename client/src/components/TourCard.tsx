import { Tour } from "@/lib/data";
import { Link } from "wouter";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Star, Users } from "lucide-react";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="group overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full bg-card">
      {/* Image Header */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-primary hover:bg-white backdrop-blur-sm font-semibold shadow-sm">
            ${tour.price}
          </Badge>
        </div>
        <div className="absolute top-4 left-4">
           {tour.difficulty === "Easy" && <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">Easy</Badge>}
           {tour.difficulty === "Medium" && <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-200">Medium</Badge>}
           {tour.difficulty === "Hard" && <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-200">Hard</Badge>}
        </div>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-accent" />
            {tour.location}
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span>{tour.rating}</span>
            <span className="text-muted-foreground font-normal">({tour.reviews})</span>
          </div>
        </div>
        <h3 className="font-serif text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
          <Link href={`/tour/${tour.id}`}>{tour.title}</Link>
        </h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {tour.description}
        </p>
        
        <div className="grid grid-cols-2 gap-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary/70" />
            {tour.duration}
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary/70" />
            {tour.maxGroupSize} People
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary/70" />
            {new Date(tour.startDates[0]).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0 pb-6">
        <Link href={`/tour/${tour.id}`} className="w-full">
          <Button className="w-full font-semibold group-hover:bg-primary/90 transition-colors">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
