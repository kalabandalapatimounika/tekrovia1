export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-blue-600">TekRovia</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          TekRovia is a technology company focused on building fast, reliable,
          and scalable digital products. We combine modern engineering with
          thoughtful design to help businesses grow.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mt-16">
        {[
          { title: "Our Mission", desc: "To simplify technology and make powerful tools accessible to every business." },
          { title: "Our Vision", desc: "A future where great software is fast to build and easy to scale." },
          { title: "Our Values", desc: "Quality, transparency, and long-term partnership with every client." },
        ].map((item) => (
          <div key={item.title} className="p-6 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}