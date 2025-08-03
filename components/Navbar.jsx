// components/Navbar.tsx
"use client";

import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Assessment", href: "/assessment" },
];

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b px-10 py-3">
      <div className="flex items-center gap-4">
        <div className="size-4">🌱</div>
        <h2 className="text-lg font-bold">Early Bloom</h2>
      </div>
      <nav className="flex gap-6">
        {navItems.map(({ label, href }) => (
          <Link key={label} href={href} className="text-sm font-medium">
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
