import { JSX } from "react";
import CategoryCard from "@/components/CategoryCard.tsx";
import Navbar from "@/components/Navbar";

export default function Home(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to <span className="text-blue-500">CodePlay</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Compete, learn, and improve your coding skills with fun challenges.
        </p>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Choose Your Challenge
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <CategoryCard
            title="Algorithm Challenges"
            description="Solve classic algorithm problems and improve your logic."
          />
          <CategoryCard
            title="Frontend Battles"
            description="Build UI components and challenge your React skills."
          />
          <CategoryCard
            title="Full-Stack Coding"
            description="Work on real-world full-stack coding projects."
          />
        </div>
      </section>
    </div>
  );
}
