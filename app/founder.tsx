'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-hidden  ">
      <main className="pb-2">
        <div className="mx-auto mt-14 px-6 md:px-0 xl:w-4/5 2xl:w-[68%]">

          {/* Founders Section */}
          <div className="text-center mt-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Founders</h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-16">

              {/* Founder */}
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full shadow-lg transition-transform group-hover:scale-105">
                  <Image src="/images/rishabh-founder.png" alt="Founder" layout="fill" objectFit="cover" />
                </div>
                <h3 className="text-xl font-semibold mt-3 group-hover:text-blue-600 transition-colors">
                  Rishabh Rathore
                </h3>
                <p className="text-gray-500">Founder & CEO</p>
              </div>

              {/* Co-Founder */}
              <div className="text-center group">
                <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full shadow-lg transition-transform group-hover:scale-105">
                  <Image src="/images/founder.png" alt="Co-Founder" layout="fill" objectFit="cover" />
                </div>
                <h3 className="text-xl font-semibold mt-3 group-hover:text-blue-600 transition-colors">
                  Piyush Chhabra
                </h3>
                <p className="text-gray-500">Co-Founder & MD</p>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
