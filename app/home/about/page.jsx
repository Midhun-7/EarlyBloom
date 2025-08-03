"use client";
import React from "react";

export default function AboutUsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-[#111518]">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <p className="text-lg mb-4">
        At <span className="font-semibold">Early Bloom</span>, we are committed to empowering parents
        with tools and insights to support their child's early development.
        From expert guidance to engaging activities, we help families
        understand and track key milestones in their child's cognitive,
        emotional, and social growth.
      </p>

      <p className="text-lg mb-4">
        Our mission is to make early developmental screening accessible,
        comforting, and actionable. With contributions from pediatricians,
        neurologists, and educators, our platform provides research-backed
        recommendations to help you take the right steps—at the right time.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Why Early Bloom?</h2>
      <ul className="list-disc pl-5 space-y-2 text-base">
        <li>Evidence-based milestones and expert articles</li>
        <li>Personalized activities to nurture development</li>
        <li>Early screening tools for peace of mind</li>
        <li>Progress tracking and family insights</li>
      </ul>

      <p className="mt-8 text-lg">
        Join us in nurturing the potential of every child—right from the
        beginning. 💫
      </p>
    </div>
  );
}
