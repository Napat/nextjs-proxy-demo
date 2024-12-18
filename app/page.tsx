"use client";

import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
            <h1 className="text-5xl font-bold mb-6">
                Welcome to My Next.js App!
            </h1>
            <p className="text-lg mb-8">
                Explore the features and experience seamless development.
            </p>
            <Link href="/proxydemo">
                <button className="bg-white text-blue-500 hover:bg-gray-200 px-6 py-3 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105">
                    Go to Proxy Demo
                </button>
            </Link>
        </main>
    );
}
