'use client';
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { CoverDemo } from "@/components/demos/cover-demo";
import { PiCheckBold } from "react-icons/pi";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { Analytics } from "@vercel/analytics/react";
import Founder from "./founder"
import { ClientOnly } from "@/components/client-only"

const services = [
  {
    icon: "/images/s_6.png",
    title: "Web Design + Development",
    description:
      "Take your business to the next level with our web design and development services",
  },
  {
    icon: "/images/s_1.png",
    title: "Search Engine Optimization",
    description:
      "Get your website to the top of search engine results with our SEO services",
  },
  {
    icon: "/images/s_5.png",
    title: "Content Creation",
    description:
      "Boost your brand's online presence with our social media marketing services",
  },
  {
    icon: "/images/s_3.png",
    title: "Social Media Marketing",
    description:
      "Interact with your customers and increase sales with our email marketing services",
  },
  {
    icon: "/images/s_4.png",
    title: "Email Marketing",
    description:
      "With our content creation services, we help businesses drive results",
  },
  {
    icon: "/images/s_2.png",
    title: "Pay-Per-Click Advertising",
    description:
      "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  },
  {
    icon: "/images/influencer.png",
    title: "Influence ",
    description:
      "From clicks to customers—drive real results with precision marketing",
  },
  {
    icon: "/images/s_2.png",
    title: "Branding ",
    description:
      "Authentic connections, precise targeting, and measurable results for impactful growth.",
  },

];

export default function Home() {
  return (

    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Element name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] bg-white flex items-center 
   justify-between py-2 px-4  md:px-8 mx-6 ">

        <h1 className="text-2xl font-bold  ">
          Kreelab
        </h1>

        <div className="absolute right-1/2  translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/about"} className="hover:text-blue-500">
              About Us
            </Link>
            <Link href={"/showcase"} className="hover:text-blue-500">
              Showcase
            </Link>
            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Process
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center  gap-x-4">
          <Link
            href={"/meeting"}
            className=" py-3 px-5 text-lg hover:bg-[#abcbff] rounded-[6px] border-2  border-black  text-white  bg-[#121212]  transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Contact Now
          </Link>
        </div>
      </Element>

      <main className="md:pb-10 ">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto pt-12 mt-14">
          <h1 className="pt-4">
            <ClientOnly>
              <CoverDemo />
            </ClientOnly>
          </h1>
          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
            Schedule a call with us to discuss your project and get a quote in
            minutes
          </p>
          <div
            className="
                  flex 
                   md:justify-center 
                   items-center 
                   gap-x-4
                    "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Contact Now
            </Link>

            <Link
              href={"/showcase"}
              className="
               bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Showcase
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Strategy
              </p>
            </BoxReveal>

          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28  mx-auto">
            <div className="md:w-2/5 ml-4">
              <h1 className="text-2xl font-medium text-gray-600 w-4/5 ">
                Trusted by fast moving brands worldwide
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-blue-500 text-3xl md:text-5xl">
                    <NumberTicker value={200} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Happy Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={100} /> +
                    <p className="text-gray-500 text-sm md:text-md">
                      Projects Completed
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-3/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/logo/logo.png",
                    name: "Logo",
                  },
                  {
                    logo: "/logo/logo.png",
                    name: "Logo",
                  },
                ]}
              />
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business stand out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20 ">
        <ClientOnly>
          <ScrollBasedVelocityDemo />
        </ClientOnly>
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get
            noticed.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <ClientOnly>
                <AnimatedBeamMultipleOutputDemo />
              </ClientOnly>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
              <ClientOnly>
                <BoxRevealDemo />
              </ClientOnly>
            </div>
          </div>
        </main>
      </Element>

      <section className="mt-8">
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/logo.png"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-6 md:w-1/2">
            <h1 className="text-lg md:text-1.5xl ">
              &quot;We&apos;ve partnered with <strong>Kreelab</strong> for over 8 months, and their digital marketing expertise has been exceptional. Their strategies have driven remarkable growth for our business, and we couldn&apos;t be more satisfied with the results.&quot;
            </h1>

            <span className="text-xl font-medium">
              Nikhil   <br />
              CEO - Soapy-wise
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ClientOnly>
          <ShootingStarsAndStarsBackgroundDemo />
        </ClientOnly>
      </Element>

      <section className="my-6 md:py-12 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      {/* Footer of website  */}
      <footer className="bg-[#fafafa] py-12 px-6 md:px-12 border-t border-gray-200">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-start gap-12">

          {/* Brand Section */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">
              <strong>Kreelab</strong>
            </h1>
            <p className=" text-gray-600 max-w-xs">
              Marketing That Never Sleeps!
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-blue-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <span className="block font-medium text-gray-900">Email</span>
                <a href="mailto:contact@kreelab.com" className="hover:text-blue-500 transition-colors">
                  contact@kreelab.com
                </a>
              </li>
              <li>
                <span className="block font-medium text-gray-900">India</span>
                +91 9369938791
              </li>
              <li>
                <span className="block font-medium text-gray-900">United Kingdom</span>
                +44 7733 012139
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Our Offices</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
              <div>
                <span className="block font-medium text-gray-900 mb-1">India Office</span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  124/57 A, D Block<br />
                  Govind Nagar<br />
                  Kanpur, Uttar Pradesh- 208006
                </p>
              </div>
              <div>
                <span className="block font-medium text-gray-900 mb-1">UK Office</span>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The Mille, 1000 Great West Rd<br />
                  London TW8 9DW<br />
                  United Kingdom
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="container mx-auto max-w-7xl mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2026 Kreelab. All Rights Reserved.</p>
          <div className="mt-2 md:mt-0">
            <Link href="/privacy-policy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-service" className="text-blue-500 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}