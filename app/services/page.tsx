export default function Services() {
  const services = [
    { title: "Web Development", desc: "Custom, high-performance websites built with modern frameworks." },
    { title: "App Development", desc: "Scalable mobile and web apps tailored to your business needs." },
    { title: "UI/UX Design", desc: "Clean, intuitive interfaces that keep users engaged." },
    { title: "Cloud & DevOps", desc: "Reliable infrastructure, deployment, and scaling solutions." },
    { title: "API Integration", desc: "Seamless connections between your tools and third-party services." },
    { title: "Maintenance & Support", desc: "Ongoing updates, monitoring, and technical support." },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-gray-600">
          Everything you need to design, build, and scale your digital products.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 border border-gray-200 rounded-xl hover:shadow-md transition"
          >
            <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}