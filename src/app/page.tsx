// src/app/page.tsx

import Navbar from "@/components/Navbar"; 

import HeroSection from "@/components/HeroSection";
import MaterialSection from "@/components/MaterialSection";
import HowItWorks from "@/components/HowItWorks";
import ServicesSection from "@/components/ServicesSection";
import ProjectVideosAndTestimonials from '@/components/ProjectVideosAndTestimonials';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
       <MaterialSection />
       <HowItWorks />
        <ServicesSection />
        <ProjectVideosAndTestimonials />
        <QuoteSection />
         <Footer />
    
    </>
  );
}