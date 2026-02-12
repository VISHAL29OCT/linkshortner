"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("recentLinks")) || [];
    setLinks(stored);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-8">
      
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
          📊 Your Last 5 Generated Links
        </h1>

        {links.length === 0 && (
          <p className="text-center text-gray-500">
            No links generated yet.
          </p>
        )}

        <div className="space-y-4">
          {links.map((link, index) => (
            <div
              key={index}
              className="p-4 border rounded-xl bg-gray-50 hover:shadow-md transition-all"
            >
              <p className="text-sm text-gray-500">
                Created: {new Date(link.createdAt).toLocaleString()}
              </p>

              <p className="mt-2">
                <span className="font-semibold text-gray-700">
                  Original:
                </span>{" "}
                <span className="text-blue-600 break-all">
                  {link.longUrl}
                </span>
              </p>

              <p className="mt-2">
                <span className="font-semibold text-gray-700">
                  Short:
                </span>{" "}
                <Link
                  href={link.shortUrl}
                  target="_blank"
                  className="text-purple-600 underline hover:text-purple-800"
                >
                  {link.shortUrl}
                </Link>
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
