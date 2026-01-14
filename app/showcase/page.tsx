"use client";
import { useState, useEffect } from "react";
import ShowcaseNavbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        title: "Web Design + Development",
        description: "Take your business to the next level with our web design and development services",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80"
    },
    {
        title: "Search Engine Optimization",
        description: "Get your website to the top of search engine results with our SEO services",
        image: "https://images.unsplash.com/photo-1562577309-2592ab84b1bc?w=800&q=80"
    },
    {
        title: "Content Creation",
        description: "Boost your brand's online presence with our content creation services",
        image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=800&q=80"
    },
    {
        title: "Social Media Marketing",
        description: "Interact with your customers and increase sales with strategic social media campaigns",
        image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80"
    },
    {
        title: "Email Marketing",
        description: "With our email marketing services, we help businesses drive measurable results",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
    },
    {
        title: "Pay-Per-Click Advertising",
        description: "Reach your target audience effectively with data-driven PPC campaigns",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
        title: "Influence Marketing",
        description: "From clicks to customers—drive real results with precision marketing",
        image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&q=80"
    },
    {
        title: "Branding",
        description: "Authentic connections, precise targeting, and measurable results for impactful growth",
        image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80"
    }
];

const Showcase = () => {
    // Hydration fix for footer date
    const [currentYear, setCurrentYear] = useState<number | null>(null);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <div className="min-h-screen bg-[#fafafa]">
            <ShowcaseNavbar />
            <section className="px-6 py-24 xl:w-4/5 2xl:w-[68%] mx-auto">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Our Services
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600">
                        Marketing Solutions That Drive Results
                    </p>
                    <p className="mt-4 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
                        All of our services are designed to help your business stand out and achieve measurable growth
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                        >
                            <div className="aspect-video w-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center relative">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Updated Call to Action with IN and UK buttons */}
                <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Schedule a consultation to discuss your marketing goals
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:+919369938791"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 text-lg bg-white border-2 border-black rounded-[6px] hover:bg-gray-50 transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
                        >
                            Call Now (IN)
                        </a>
                        <a
                            href="tel:+447733012139"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-8 text-lg bg-white border-2 border-black rounded-[6px] hover:bg-gray-50 transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]"
                        >
                            Call Now (UK)
                        </a>
                        <Link
                            href="/meeting"
                            className="w-full sm:w-auto inline-block py-3 px-8 text-lg hover:bg-[#abcbff] rounded-[6px] border-2 border-black text-white bg-[#121212] transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] text-center"
                        >
                            Book a Meeting
                        </Link>
                    </div>
                </div>
            </section>

            {/* Global Footer */}
            <footer className="bg-[#fafafa] py-12 px-6 md:px-12 border-t border-gray-200">
                <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start gap-12">
                    
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tight"><strong>Kreelab</strong></h1>
                        <p className="text-gray-600 max-w-xs">Marketing That Never Sleeps!</p>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li>
                                <span className="block font-medium text-gray-900">Email</span>
                                <a href="mailto:contact@kreelab.com" className="hover:text-blue-500 transition-colors">contact@kreelab.com</a>
                            </li>
                            <li><span className="block font-medium text-gray-900">India</span>+91 9369938791</li>
                            <li><span className="block font-medium text-gray-900">United Kingdom</span>+44 7733 012139</li>
                        </ul>
                    </div>

                    {/* Address Section */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-900">Our Offices</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <span className="block font-medium text-gray-900 mb-1">India Office</span>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    124/57 A, D Block<br />Govind Nagar<br />Kanpur, Uttar Pradesh- 208006
                                </p>
                            </div>
                            <div>
                                <span className="block font-medium text-gray-900 mb-1">UK Office</span>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    the mille, 1000 Great West Rd<br />London TW8 9DW<br />United Kingdom
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="container mx-auto max-w-7xl mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm text-center md:text-left">
                    <p>&copy; {currentYear} Kreelab. All Rights Reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-6">
                        <Link href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="text-blue-500 hover:underline">Terms of Service</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Showcase;