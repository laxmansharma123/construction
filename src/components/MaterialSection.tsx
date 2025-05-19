"use client";
import Image from "next/image";

const MaterialSection = () => {
  return (
    <section id="materials" className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900">Our Building Materials</h2>
        <p className="text-lg text-gray-600">Explore our premium materials for construction</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Material Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <Image
            src="/concreate.jpeg" // Replace with actual image paths
            alt="Concrete Material"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Concrete</h3>
            <p className="text-gray-600 mt-2">Strong and durable material used for foundations and flooring.</p>
            <a
              href="#"
              className="text-yellow-600 mt-4 inline-block font-semibold hover:underline"
            >
              View Details
            </a>
          </div>
        </div>

        {/* Material Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <Image
            src="/wood.jpeg" // Replace with actual image paths
            alt="Wood Material"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Wood</h3>
            <p className="text-gray-600 mt-2">Versatile material for flooring, furniture, and structural components.</p>
            <a
              href="#"
              className="text-yellow-600 mt-4 inline-block font-semibold hover:underline"
            >
              View Details
            </a>
          </div>
        </div>

        {/* Material Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <Image
            src="/steel.jpeg" // Replace with actual image paths
            alt="Steel Material"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Steel</h3>
            <p className="text-gray-600 mt-2">High-strength material used for reinforcement and structural support.</p>
            <a
              href="#"
              className="text-yellow-600 mt-4 inline-block font-semibold hover:underline"
            >
              View Details
            </a>
          </div>
        </div>

        {/* Material Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <Image
            src="/bricks.jpeg" // Replace with actual image paths
            alt="Brick Material"
            width={400}
            height={300}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">Bricks</h3>
            <p className="text-gray-600 mt-2">Traditional building material known for its durability and strength.</p>
            <a
              href="#"
              className="text-yellow-600 mt-4 inline-block font-semibold hover:underline"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialSection;
