"use client";
import React from "react";
import Link from "next/link";

export default function Layout({ children }) {
  const navItems = [
    { label: "Home", href: "/home" },
    { label: "About Us", href: "/home/about" },
    { label: "Blogs", href: "/home/blogs" },
    { label: "Pre- Diagnosis", href: "/home/prediagnosis" },
    { label: "Assessment", href: "/home/assessment" },
    { label: "Activities", href: "/home/activities" },
  ];

  return (
    <div
      className="relative min-h-screen flex flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Lexend, "Noto Sans", sans-serif' }}
    >
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#f0f3f4] px-10 py-3">
        <div className="flex items-center gap-4 text-[#111518]">
          <div className="size-4">
            {/* Logo */}
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-[-0.015em] text-[#111518]">Early Bloom</h2>
        </div>

        <div className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            {navItems.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-sm font-medium text-[#111518] leading-normal"
              >
                {label}
              </Link>
            ))}
          </div>

          <button className="flex h-10 items-center justify-center overflow-hidden rounded-full bg-[#f0f3f5] px-2.5 text-sm font-bold text-[#111518] gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z" />
            </svg>
          </button>

          <div
            className="size-10 rounded-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCr4W6SAhRNUKocKCl4bOPpXmy5trdegrY7S9lJmG7LC6nFyFrlF2cZCYrq8dSr9wj5btdNPc8iCRdXqDCOfNyKIx_C0IIzWFTfE46LPYkrRafYuZNB0MBnOQ3CkKLFSWAf-9IK5nDYGmK4J9uZlZGFP8TWkbgl6ecXlgDieG3oqc7S9s4yhc-BdvF1-v979iGO7e2dhJ93FQ60fakDXET-808rCZieu9QwXXqPi_8wEA1OVEH3gCDHSvTYyqQTd6c9rMU5U2MSBP8")',
            }}
          />
        </div>
      </header>

      {children}
    </div>
  );
}
