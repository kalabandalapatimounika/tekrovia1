import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "TekRovia",
  description: "Building smart, scalable digital solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <span className="font-bold text-xl text-blue-600">TekRovia</span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
            <Link href="/services" className="hover:text-blue-600 transition">Services</Link>
            <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </div>
        </nav>

        {children}

        <footer className="bg-gray-900 text-gray-300 px-6 py-12 mt-20">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">TekRovia</h3>
              <p className="text-gray-400 text-sm">
                Building smart, scalable digital solutions to power your business forward.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} TekRovia. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}