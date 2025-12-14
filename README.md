# Wanderlust - Tour Booking Platform

A modern, premium tour booking web application designed for the adventurous traveler. This project is a high-fidelity frontend prototype built with React, showcasing a polished user interface and thoughtful user experience.

![Project Preview](attached_assets/generated_images/mountain_hiker_looking_at_sunset.png)

## 🚀 Project Overview

Wanderlust is a concept for a travel booking platform where users can discover, browse, and book exclusive tour packages. The design emphasizes a connection to nature through a curated "Forest & Sand" color palette, immersive imagery, and elegant typography.

### Core Goals
- **Immersive Experience:** High-quality visuals and clean layout to inspire travel.
- **Modern UI/UX:** Smooth transitions, responsive design, and interactive elements.
- **Clean Architecture:** Component-based structure using best practices.

## 🛠️ Tech Stack

- **Frontend Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Shadcn/UI](https://ui.shadcn.com/) (customized)
- **Routing:** [wouter](https://github.com/molefrog/wouter)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Validation:** Zod + React Hook Form

## ✨ Features

- **Home Page:**
  - Parallax-style hero section with search functionality.
  - Featured tours grid with hover effects.
  - Value proposition and newsletter signup.
- **Tour Details:**
  - Comprehensive tour information (Itinerary, Highlights, Map).
  - Sticky booking sidebar with price calculation.
  - Tabbed interface for daily schedules.
- **Authentication:**
  - Modern Login/Register interface with split-screen design.
  - Form validation using Zod schemas.
- **Design System:**
  - Custom "Nature" theme (Forest Green & Warm Sand).
  - `Playfair Display` (Serif) for headings, `Inter` (Sans) for body.
  - Glassmorphism and soft shadow effects.

## 📂 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── layout/       # Navbar, Footer
│   │   ├── ui/           # Reusable UI components (buttons, inputs, etc.)
│   │   └── TourCard.tsx  # Feature-specific components
│   ├── lib/
│   │   ├── data.ts       # Mock data for tours
│   │   └── utils.ts      # Helper functions
│   ├── pages/
│   │   ├── home.tsx
│   │   ├── tour-details.tsx
│   │   └── auth-page.tsx
│   ├── App.tsx           # Main router and app layout
│   └── index.css         # Global styles and Tailwind theme
```

## 🎨 Design Philosophy

The aesthetic is built around the concept of "Premium Adventure."
- **Typography:** We use a classic pairing of a strong Serif (Playfair Display) for emotional impact and a clean Sans-Serif (Inter) for readability.
- **Color Palette:**
  - Primary: Deep Forest Green (`#150 40% 30%` HSL)
  - Accent: Golden Sun (`#35 80% 55%` HSL)
  - Background: Soft Warm White (`#60 20% 98%` HSL)
- **Texture:** Subtle noise and gradients are used to avoid a "flat" look.

## 🚀 Getting Started

1. **Clone the repository** (if moving to local dev)
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
