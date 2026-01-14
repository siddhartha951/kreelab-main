"use client";
import ShowcaseNavbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react"; // Added useEffect for hydration fix

interface FounderCardProps {
  name: string;
  role: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
}

const FounderCard = ({ name, role, image, shortDesc, fullDesc }: FounderCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasMoreContent = fullDesc.length > shortDesc.length;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 flex flex-col">
      <div className="flex flex-col items-center mb-6">
        <Image
          src={image}
          alt={`${name}, ${role}`}
          width={192}
          height={192}
          className="w-48 h-48 rounded-full object-cover border-4 border-blue-200 shadow-md mb-4"
        />
        <h3 className="text-3xl font-bold text-gray-900">{name}</h3>
        <p className="text-lg text-blue-600 font-semibold mt-1">{role}</p>
      </div>
      <div className="text-gray-700 leading-relaxed flex-grow">
        {isExpanded ? (
          <div className="space-y-4">
            {fullDesc.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p>{shortDesc}</p>
        )}
        {hasMoreContent && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 text-blue-600 hover:text-indigo-500 font-semibold underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

const Showcase = () => {
  // Hydration fix for the footer date
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fafafa] via-white to-blue-50">
      <ShowcaseNavbar />

      {/* Main Section */}
      <section className="px-6 py-24 md:py-32 xl:w-4/5 2xl:w-[68%] mx-auto">
        <div className="container mx-auto max-w-7xl">
          {/* Headline */}
          <div className="text-center mb-24">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Kreelab
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Marketing That Never Sleeps
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
              Your business runs 24/7, and so do we. We&apos;re your partner in driving growth with creativity and precision.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-24">
            {/* Who We Are */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Always On, Always Ahead
              </h2>
              <p className="text-gray-600 leading-relaxed">
                With 24/7 support, Kreelab keeps your brand unstoppable. Last-minute tweaks? Real-time insights? We&apos;ve got you covered—anytime, anywhere.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize marketing—dynamic, innovative, and relentless. Empowering your brand with strategies that shatter limits and redefine success.
              </p>
            </div>

            {/* Our Journey */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Journey
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Born in 2024 in Kanpur, Kreelab started with a spark: marketing should match your hustle. Now, with 50+ campaigns across India and beyond, we&apos;re a force of passion and innovation.
              </p>
            </div>

            {/* See the Proof */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                See the Proof
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our work? Bold. Impactful. Proven. Check out our{" "}
                <Link href="/showcase" className="text-blue-600 hover:text-indigo-500 font-semibold underline">
                  Showcase
                </Link>{" "}
                and witness the magic.
              </p>
            </div>
          </div>

          {/* What We Stand For */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-10 mb-24">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              What We Stand For
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Relentless Drive</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We push boundaries to keep you ahead with continuous improvement and innovation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Excellence</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bold ideas that captivate and convert, resonating with your audience.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Honest results, no smoke and mirrors. Clear communication always.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Adaptability</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We evolve as fast as your vision does with a flexible approach.
                </p>
              </div>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mb-24">
            <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">
              Meet the Founders
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <FounderCard
                name="Rishabh Rathore"
                role="Founder"
                image="/images/rishabh-founder.png"
                shortDesc="Rishabh Rathore is the Founder and driving force behind Kreelab, a next-generation digital marketing agency built with the vision to help brands scale with clarity, consistency, and measurable growth."
                fullDesc="Rishabh Rathore is the Founder and driving force behind Kreelab, a next-generation digital marketing agency built with the vision to help brands scale with clarity, consistency, and measurable growth..."
              />

              <FounderCard 
                name="Piyush Chhabra"
                role="Co-Founder"
                image="/images/founder.png"
                shortDesc="Piyush Chhabra is the Co-Founder and Managing Director of Kreelab, and the backbone of the agency's execution, operations, and client success."
                fullDesc="Piyush Chhabra is the Co-Founder and Managing Director of Kreelab, and the backbone of the agency's execution, operations, and client success..."
              />
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-24 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a consultation to discuss your marketing goals
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919369938791"
                className="inline-flex items-center gap-2 py-3 px-8 text-lg bg-white border-2 border-black rounded-[6px] hover:bg-gray-50 transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
              >
                Call Now (IN)
              </a>
              <a
                href="tel:+447733012139"
                className="inline-flex items-center gap-2 py-3 px-8 text-lg bg-white border-2 border-black rounded-[6px] hover:bg-gray-50 transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
              >
                Call Now (UK)
              </a>
              <Link
                href="/meeting"
                className="inline-block py-3 px-8 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
              >
                Book a Meeting
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Footer */}
      <footer className="bg-gradient-to-t from-blue-50 to-white py-16 px-6 md:px-12 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Kreelab
            </h1>
            <p className="text-gray-600 max-w-xs text-lg">Marketing That Never Sleeps!</p>
            <div className="flex space-x-6">
              {/* Social Links... */}
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-4 text-gray-600 text-lg">
              <li>
                <span className="block font-bold text-gray-900 text-sm">Email</span>
                <a href="mailto:contact@kreelab.com" className="hover:text-blue-600">contact@kreelab.com</a>
              </li>
              <li>
                <span className="block font-bold text-gray-900 text-sm">India</span>
                +91 9369938791
              </li>
              <li>
                <span className="block font-bold text-gray-900 text-sm">United Kingdom</span>
                +44 7733 012139
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Our Offices</h3>
            <div className="space-y-4 text-gray-600 text-lg">
              <div>
                <span className="block font-bold text-gray-900 text-sm">India Office</span>
                <p>124/57 A, D Block, Govind Nagar<br />Kanpur, UP- 208006</p>
              </div>
              <div>
                <span className="block font-bold text-gray-900 text-sm">UK Office</span>
                <p>the mille, 1000 Great West Rd<br />London TW8 9DW</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto max-w-7xl mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} Kreelab. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/privacy-policy" className="text-blue-600 hover:text-indigo-500">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-of-service" className="text-blue-600 hover:text-indigo-500">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Showcase;