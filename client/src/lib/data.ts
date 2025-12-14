import heroImage from "@assets/generated_images/mountain_hiker_looking_at_sunset.png";
import beachImage from "@assets/generated_images/tropical_beach_paradise.png";
import templeImage from "@assets/generated_images/ancient_jungle_temple.png";
import snowImage from "@assets/generated_images/snowy_mountain_cabin.png";
import desertImage from "@assets/generated_images/desert_safari_sunset.png";

export interface Tour {
  id: number;
  title: string;
  location: string;
  price: number;
  duration: string;
  maxGroupSize: number;
  difficulty: "Easy" | "Medium" | "Hard";
  rating: number;
  reviews: number;
  image: string;
  description: string;
  startDates: string[];
}

export const tours: Tour[] = [
  {
    id: 1,
    title: "The Forest Hiker",
    location: "Banff, Canada",
    price: 297,
    duration: "5 days",
    maxGroupSize: 15,
    difficulty: "Medium",
    rating: 4.8,
    reviews: 23,
    image: heroImage,
    description: "Breathtaking hike through the Canadian Rockies. Experience the wild beauty of nature.",
    startDates: ["2024-06-15", "2024-07-20", "2024-08-10"],
  },
  {
    id: 2,
    title: "Bali Beach Paradise",
    location: "Bali, Indonesia",
    price: 1299,
    duration: "7 days",
    maxGroupSize: 10,
    difficulty: "Easy",
    rating: 4.9,
    reviews: 45,
    image: beachImage,
    description: "Relax on the pristine beaches of Bali. Snorkeling, sunbathing, and luxury villas await.",
    startDates: ["2024-05-01", "2024-06-01", "2024-09-15"],
  },
  {
    id: 3,
    title: "Lost Temple Adventure",
    location: "Siem Reap, Cambodia",
    price: 899,
    duration: "6 days",
    maxGroupSize: 8,
    difficulty: "Medium",
    rating: 4.7,
    reviews: 18,
    image: templeImage,
    description: "Explore the ancient ruins of Angkor Wat and discover hidden jungle temples.",
    startDates: ["2024-11-10", "2024-12-05"],
  },
  {
    id: 4,
    title: "Snowy Alpine Escape",
    location: "Swiss Alps, Switzerland",
    price: 1599,
    duration: "5 days",
    maxGroupSize: 6,
    difficulty: "Hard",
    rating: 5.0,
    reviews: 12,
    image: snowImage,
    description: "Skiing, snowboarding, and cozy cabin nights in the heart of the Alps.",
    startDates: ["2024-12-20", "2025-01-15"],
  },
  {
    id: 5,
    title: "Sahara Desert Expedition",
    location: "Merzouga, Morocco",
    price: 749,
    duration: "4 days",
    maxGroupSize: 12,
    difficulty: "Medium",
    rating: 4.6,
    reviews: 30,
    image: desertImage,
    description: "Camel trekking into the sunset and camping under the stars in the Sahara Desert.",
    startDates: ["2024-10-05", "2024-11-12"],
  },
];
