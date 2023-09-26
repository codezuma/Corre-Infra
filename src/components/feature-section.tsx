import React from "react";
import FeatureCard from "@components/shared/feature-card"; // Import the FeatureCard component
import { Pill, PlusCircle, User } from "lucide-react";

const features = [
  {
    title: "Extensive Grounds",
    description:
      "Encompassing a sprawling 8 acres, our project offers abundant space for a comfortable and roomy living experience.",
    iconClass: "bi bi-tree-fill", // Bootstrap icon class for tree icon
  },
  {
    title: "Tranquil Setting",
    description:
      "Tucked away from the city's hustle and bustle, our project provides a serene oasis while conveniently located at the heart of the city.",
    iconClass: "bi bi-sun-fill", // Bootstrap icon class for sun icon
  },
  {
    title: "Personalized Plots",
    description:
      "Embrace the freedom to design and construct your dream home on a plot tailored to your preferences and lifestyle.",
    iconClass: "bi bi-house-fill", // Bootstrap icon class for house icon
  },
  {
    title: "Secluded Gardens",
    description:
      "Revel in the luxury of distinct garden areas for both children and elders, ensuring a secure and peaceful environment for every family member.",
    iconClass: "bi bi-flower2", // Bootstrap icon class for flower icon
  },
  {
    title: "Secured Community",
    description:
      "Enjoy the assurance of security and exclusivity within our gated community, where your safety and privacy are our utmost concerns.",
    iconClass: "bi bi-shield-lock-fill", // Bootstrap icon class for shield lock icon
  },
  {
    title: "Athletic Hub",
    description:
      "Maintain an active and healthy lifestyle with access to a cutting-edge sports academy, featuring a tennis court and gymnasium right within the community.",
    iconClass: "bi bi-trophy-fill", // Bootstrap icon class for trophy icon
  },
  {
    title: "Community Hub",
    description:
      "Foster connections and socialize with your neighbors in our fully-equipped community center, thoughtfully designed to unite residents through a variety of activities and events.",
    iconClass: "bi bi-people-fill", // Bootstrap icon class for people icon
  },
];


const FeatureSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className=" max-w-3xl ">
         
          <p className="mt-2 text-3xl font-bold  tracking-tight text-primary sm:text-4xl">
          Our Project
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
{`          Bringing the project that define Corre Infra's commitment to excellence.
`}          </p>
        </div>
        <div className="mt-20 flex  gap-8 max-w-7xl mx-auto   flex-wrap justify-between">
          {features.map((feature, index) => (
            <div className="flex-1 sm:min-w-[300px]" key={index}>
              {/* Icon */}
              <div className="p-2  w-fit">
              <i className={`text-3xl text-primary ${feature.iconClass}`}/>
              </div>
                            <div className="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-2 mb-1 dark:from-gray-700 dark:to-slate-900/0">
                <div className="bg-gray-400 w-9 h-0.5"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
