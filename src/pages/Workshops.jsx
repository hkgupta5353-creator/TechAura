import React from "react";
import WorkshopCard from "../components/WorkshopCard";

const workshops = [
  {
    title: "AI & Machine Learning",
    date: "12 Jan 2026",
    description: "Learn fundamentals of AI with real-world hands-on projects.",
    image: "https://picsum.photos/400/200?1"
  },
  {
    title: "Advanced Robotics",
    date: "14 Jan 2026",
    description: "Build and program robots with expert mentors.",
    image: "https://picsum.photos/400/200?2"
  },
  {
    title: "Blockchain Development",
    date: "16 Jan 2026",
    description: "Create decentralized apps and smart contracts.",
    image: "https://picsum.photos/400/200?3"
  }
];

const Workshops = () => {
  return (
    <section className="bg-black min-h-screen py-16 px-6">

      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Workshops
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {workshops.map((workshop, index) => (
          <WorkshopCard key={index} {...workshop} />
        ))}
      </div>

    </section>
  );
};

export default Workshops;