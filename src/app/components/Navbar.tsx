"use client";

import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-bold">SplitMate 💸</h1>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </nav>
  );
}
