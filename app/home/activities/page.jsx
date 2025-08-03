"use client";
import React from "react";
import { useRouter } from "next/navigation";

const tests = [
  {
    title: "Go/No-Go Test",
    description:
      "Assess attention control and response inhibition. Commonly used in ADHD evaluation.",
    image:
      "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/05/Girl-during-ADHD-therapy-session-header-1024x575.jpg?h=1528&w=1155",
    href: "https://go-nogo-test.streamlit.app/",
  },
  {
    title: "Visual Acuity Eye Test",
    description:
      "Check your distance vision using a digital Snellen chart simulation. Helps identify early signs of vision impairment.",
    image:
      "https://images.unsplash.com/photo-1576210117723-cd06449a467d?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXllJTIwY2hhcnR8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000",
    href: "https://eye-test.streamlit.app/",
  },
  {
    title: "Stroop Test",
    description:
      "Test cognitive flexibility and processing speed by identifying color-word conflicts.",
    image:
      "https://www.cambridge.org/insight/hs-fs/hubfs/gfx/cognitive-test-laptop.jpg?height=700&name=cognitive-test-laptop.jpg&width=700https://images.unsplash.com/photo-1611078489935-9b007c205b1e?auto=format&fit=crop&w=600&q=80",
    href: "/activities/stroop",
  },
  {
    title: "Digit Span Test",
    description:
      "Evaluate short-term memory by recalling sequences of numbers.",
    image:
      "https://www.jove.com/CDNSource/teasers/55121.jpg",
    href: "/activities/digit-span",
  },
];

export default function ActivitiesPage() {
  const router = useRouter();

  return (
    <div className="px-6 py-10">
      <h1 className="text-3xl font-bold text-[#111518] mb-6">
        Cognitive Activities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {tests.map((test) => (
          <div
            key={test.title}
            className="cursor-pointer rounded-xl overflow-hidden shadow-md bg-blue-50 hover:bg-blue-100 transition"
            onClick={() => router.push(test.href)}
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={test.image}
                alt={test.title}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x300.png?text=Image+Unavailable";
                }}
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-[#111518]">{test.title}</h2>
              <p className="text-sm text-[#60798a] mt-1">{test.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
