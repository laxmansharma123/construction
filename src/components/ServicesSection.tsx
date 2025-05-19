"use client";

import Image from "next/image";

const services = [
  {
    icon: "/architecture.svg", // replace with actual path
    title: "Architecture",
    description: "Meticulous Planning and Flawless design",
  },
  {
    icon: "/design.svg",
    title: "Exterior Design",
    description: "Sustainable and prodigious design with the best quality material in the market.",
  },
  {
    icon: "/furniture.svg",
    title: "Furniture Design",
    description: "Flexible and custom made - that suits the design and client comfort.",
  },
  {
    icon: "/landscape.svg",
    title: "Landscape Design",
    description: "Bridge nature into your building.",
  },
  {
    icon: "/siteplaning.svg",
    title: "Site Planning",
    description: "Develops the most appropriate economic models.",
  },
  {
    icon: "/interrior.svg",
    title: "Interior Design",
    description: "Healthy and aesthetically pleasing environment for the people using the space",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#ffffff]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Our</h2>
         <span className="text-yellow-600 text-3xl">Services </span>
        <p className="text-gray-600 mt-4 text-lg">We Offer Civil Construction Services</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div key={index} className="text-center space-y-4">
            <div className="flex justify-center">
              <Image src={service.icon} alt={service.title} width={60} height={60} />
            </div>
            <h3 className="text-xl font-semibold text-black">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
