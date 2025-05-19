"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FC } from 'react';

interface Step {
  id: string;
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  {
    id: "01",
    title: "Technical Consultation",
    description:
      "Share your vision for your dream home with our experienced architects. Leveraging advanced technology and extensive...",
    image: "/technical.jpeg",
  },
  {
    id: "02",
    title: "Booking",
    description:
      "Secure your project by paying a nominal booking fee of just 0.5% of the total cost.",
    image: "/booking2.png",
  },
  {
    id: "03",
    title: "Design & Planning",
    description:
      "We create detailed drawings and plans tailored to your needs.",
    image: "/planing.png",
  },
  {
    id: "04",
    title: "Home Construction",
    description:
      "Our expert team builds your home efficiently and professionally.",
    image: "/homeconstruction.png",
  },
  {
    id: "05",
    title: "Move-In",
    description:
      "Once construction is complete, you can move into your dream home.",
    image: "/movein.png",
  },
];

interface StepItemProps {
    step: Step;
    index: number;
    isLast: boolean;
}

const StepItem: FC<StepItemProps> = ({ step, index, isLast }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-12 items-center gap-6"
        >
            {/* Image */}
            <div
                className={`col-span-12 md:col-span-5 ${
                    index % 2 !== 0 ? "md:order-3" : ""
                }`}
            >
                <Image
                    src={step.image}
                    alt={step.title}
                    width={500}
                    height={300}
                    className="rounded-xl w-full h-auto"
                />
            </div>

            {/* Step number and line */}
            <div className="col-span-12 md:col-span-2 flex flex-col items-center">
                <div className="bg-yellow-500 text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                    {step.id}
                </div>
                {!isLast && (
                    <div className="h-full w-1 bg-gray-300 mt-2"></div>
                )}
            </div>

            {/* Text */}
            <div
                className={`col-span-12 md:col-span-5 ${
                    index % 2 !== 0 ? "md:order-1" : ""
                }`}
            >
                <h3 className="text-xl font-semibold text-yellow-600">
                    {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
            </div>
        </motion.div>
    );
};

export default function HowItWorks() {
    return (
        <section className="py-10 bg-[#fcfad9]">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">
                    <span className="text-yellow-600">How it </span>
                    <span className="text-black">Works</span>
                </h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                    Understand our home-building process — a smooth and transparent
                    journey from start to finish.
                </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-24 relative px-4 md:px-0">
                {steps.map((step, index) => (
                    <StepItem
                        key={step.id}
                        step={step}
                        index={index}
                        isLast={index === steps.length - 1}
                    />
                ))}
            </div>
        </section>
    );
}