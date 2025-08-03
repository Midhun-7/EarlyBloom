"use client";
import React from "react";

export default function BlogsPage() {
  const blogs = [
    {
      title: "Supporting Emotional Growth in Early Years",
      excerpt:
        "Understanding your child’s emotions is key to raising confident, connected individuals. Learn how to build emotional intelligence from infancy.",
      author: "Dr. Evelyn Reed",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD2CLmZ0Erp2hB1ihxZDQkZkLnzKo9Pz8qR4vWKiMskD5Nz2q-sHZ8a0o6hEJS_VbhUEfG0YdnxwZxy7PiZ6ydehJY0Fw=w960",
    },
    {
      title: "How Nutrition Shapes Brain Development",
      excerpt:
        "From omega-3s to iron, discover which nutrients play a role in your baby’s cognitive development and how to build brain-boosting meals.",
      author: "Dr. Samuel Kaur",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDcmhM4JrOeNJGgqptz8u2RoXzAsZWaCUyBdKhGRhKKnT1h0a3vvWW3hET4MH2=w960",
    },
    {
      title: "Early Signs of Sensory Processing Issues",
      excerpt:
        "Does your baby avoid touch or seem overly sensitive to sound? Learn what sensory red flags to watch for and when to consult a specialist.",
      author: "Dr. Amelia Carter",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD8O6qzUZaKNMxj-Nx2mH5Dd7AxJS2n2sKv3AxmQq8RrCg=w960",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-[#111518]">
      <h1 className="text-3xl font-bold mb-8">Parenting Articles & Insights</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md overflow-hidden bg-white flex flex-col"
          >
            <div
              className="aspect-video bg-cover bg-center"
              style={{ backgroundImage: `url(${blog.image})` }}
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
              <p className="text-sm text-[#60798a] flex-grow">{blog.excerpt}</p>
              <div className="mt-4 text-sm font-medium text-[#111518]">
                {blog.author}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
