export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          🚀 About Link Shortener
        </h1>

        <p className="text-gray-700 mb-4 leading-relaxed">
          This URL Shortener is a full-stack web application built using
          <span className="font-semibold text-purple-600"> Next.js </span>
          and
          <span className="font-semibold text-purple-600"> MongoDB Atlas</span>.
        </p>

        <p className="text-gray-700 mb-4 leading-relaxed">
          It allows users to generate short URLs, track recent links,
          and redirect securely using dynamic routing.
        </p>

        <p className="text-gray-700 leading-relaxed">
          This project demonstrates knowledge of:
        </p>

        <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
          <li>Next.js App Router</li>
          <li>MongoDB Integration</li>
          <li>Dynamic API Routes</li>
          <li>Environment Variables</li>
          <li>Session-based Dashboard</li>
        </ul>

        <p className="mt-6 text-center font-semibold text-purple-700">
          Built with ❤️ by Vishal
        </p>

      </div>
    </div>
  );
}
