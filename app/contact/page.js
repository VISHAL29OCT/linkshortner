"use client"
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          📩 Contact Us
        </h1>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-purple-500"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-purple-500"
              required
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-purple-500"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded-lg font-bold hover:bg-purple-700 transition-all"
            >
              Send Message
            </button>

          </form>
        ) : (
          <p className="text-center text-green-600 font-semibold">
            ✅ Thank you! Your message has been received.
          </p>
        )}

      </div>
    </div>
  );
}
