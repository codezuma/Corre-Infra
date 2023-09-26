import Image from "next/image";
import React, { useState } from "react";

// An array of video URLs
const videoURLs = [
  "https://www.youtube.com/embed/lgU6AgIe-mM?si=l6GamIs632Ta2l-s",
  "https://www.youtube.com/embed/cMZ65GrMfho?si=l23YrhiBd9rhPlZU",
  "https://www.youtube.com/embed/1t__fjK8Tvc?si=ERvrrKuaUZAQ59TW",
];

const LocationSection = () => {
  return (
    <section className="bg-primary xl:py-36 md:py-24 py-16">
      <div className="container mx-auto  px-4">
        <div className="max-w-4xl mb-12 ">
          <h2 className="text-3xl font-semibold text-primary-foreground sm:text-4xl">{`Location Advantage `}</h2>
        </div>
        <CardBlog />
      </div>
    </section>
  );
};

export default LocationSection;

const CardBlog = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };
  const locationInfo = [
    {
      title: "Prime Location",
      description: "Situated in Sector 1 Farukhnagar, our project enjoys the distinction of being in the upcoming and highly talked-about area of the town.",
      imageUrl: "/assets/images/award/prime-location-image.jpg",
    },
    {
      title: "Proximity to AIIMS Jhajhar",
      description: "Just 6-7 kilometers away from AIIMS Jhajhar, you have easy access to world-class healthcare facilities.",
      imageUrl: "/assets/images/award/aiims-jhajhar-image.jpg",
    },
    {
      title: "Convenient Airport Access",
      description: "Located a mere 30-35 minutes from the airport, you'll appreciate the hassle-free travel to and from your destination.",
      imageUrl: "/assets/images/award/airport-access-image.webp",
    },
    {
      title: "Near DLF Garden City",
      description: "Our project is in close proximity to DLF Garden City, making it easy to explore and enjoy leisure and entertainment options.",
      imageUrl: "/assets/images/award/dlf-garden-city-image.jpeg",
    },
    {
      title: "Access to Dwarka Expressway",
      description: "With a distance of 7-8 kilometers from the Dwarka Expressway, you're seamlessly connected to the broader city and beyond.",
      imageUrl: "/assets/images/award/dwarka-expressway-image.webp",
    },
    {
      title: "Model Economy Township Nearby",
      description: "Just 2-3 kilometers away from the Model Economy Township, Reliance District Jhajhar, you're at the heart of economic opportunities and growth.",
      imageUrl: "/assets/images/award/model-economy-township-image.webp",
    },
  ];
  

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2  xl:grid-cols-  gap-6">
        {locationInfo.map((card, index) => (
          <div
            key={index}
            className="group relative block"
            onMouseEnter={toggleDescription}
            onMouseLeave={toggleDescription}
          >
            <div className="flex-shrink-0 relative  overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:w-full before:h-full before:bg-gradient-to-t transition-all group-hover:before:from-gray-900/[.9] before:from-gray-900/[.7] before:z-[1]">
              <Image width={900} height={500}
                className="w-full h-full absolute top-0 left-0 object-cover"
                src={card.imageUrl}
                alt="Image Description"
              />
            </div>

            <div className="absolute bottom-0 transition-all inset-x-0 z-10">
              <div className="p-4 flex flex-col h-full sm:p-6">
                <h3 className="text-lg sm:text-3xl font-medium text-white group-hover:text-white/[.8]">
                  {card.title}
                </h3>
                <div className={`sm:h-0 overflow-hidden transition-all ease-out duration-100 group-hover:h-14`}>
                  <p className="text-white/[0.8]">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
