"use client";
import React from "react";

export default function HomePage() {
  const concernCards = [
    "Is your child easily distracted?",
    "Speech development concerns?",
    "Difficulty following instructions?",
    "Trouble with social play?",
    "Issues with sleep patterns?",
  ];

  const activities = [
    "Memory Match Game",
    "Simon Says Challenge",
    "Shape Sorter Task",
    "Sequence Puzzle Game",
    "I Spy Game",
  ];

  return (
    <div className="min-h-screen font-lexend bg-white text-[#111518]">

      {/* Section 1: Concern Cards */}
      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Concerns by Age</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {concernCards.map((text, i) => (
            <div
              key={i}
              className="min-w-[280px] rounded-xl bg-blue-50 p-4 shadow hover:shadow-md transition"
            >
              <p className="mb-2 font-medium">{text}</p>
              <button className="bg-[#34a3f3] text-white px-4 py-1 rounded-full text-sm">
                Check Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Family Health Data Strip */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16 px-6 text-white"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=1600&q=80")',
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">
            Complete your family health history to personalize insights
          </h2>
          <button className="mt-4 bg-white text-[#111518] font-medium px-6 py-2 rounded-full">
            Enter Family Health Data
          </button>
        </div>
      </section>

      {/* Section 3: Interactive Activities */}
      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-4">Interactive Activities for Cognitive Growth</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-xl p-4 shadow hover:shadow-md transition flex flex-col justify-between"
            >
              <p className="font-semibold mb-2">{activity}</p>
              <button className="bg-[#34a3f3] text-white px-4 py-1 rounded-full text-sm self-start">
                Start Activity
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Progress Overview */}
      <section className="px-6 py-8">
        <h2 className="text-2xl font-bold mb-2">Your Child’s Progress</h2>
        <p className="text-[#60798a] mb-4">
          Track milestones and activity history.
        </p>
        <button className="bg-[#34a3f3] text-white px-6 py-2 rounded-full font-medium">
          View Reports
        </button>
      </section>

      {/* Footer */}
      <footer className="flex justify-center gap-6 border-t border-gray-200 py-6 text-sm text-[#60798a]">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Contact Us</a>
      </footer>
    </div>
  );
}
