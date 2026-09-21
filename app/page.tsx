import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-28">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to <span className="text-blue-600">TekRovia</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mb-10">
          Building smart, scalable digital solutions to power your business forward.
        </p>
        <div className="flex gap-4">
          <Link
            href="/contact"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Get Started
          </Link>
          <Link
            href="/about"
            className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Fast Development",
            desc: "We build and ship products quickly without compromising quality.",
          },
          {
            title: "Modern Tech Stack",
            desc: "Powered by the latest tools and frameworks for performance and scale.",
          },
          {
            title: "Reliable Support",
            desc: "Our team is with you from planning to launch and beyond.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition"
          >
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-gray-600 mb-8">
          Let's build something great together.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}