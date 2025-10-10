import { FaGlobe, FaShieldAlt, FaClock } from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaGlobe className="text-2xl text-brand mb-2" />,
      title: "Full Global Reach",
      desc: "All Across Borders",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-brand mb-2" />,
      title: "Secure Process",
      desc: "100% confidential",
    },
    {
      icon: <FaClock className="text-2xl text-brand mb-2" />,
      title: "Fast Processing",
      desc: "Quick turnaround",
    },
  ];

  // Feature Card Component
  const FeatureCard = ({ icon, title, desc }) => (
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-lg py-2 px-1 lg:p-4 text-center hover:bg-white/20 transition-all duration-300">
      <div className="flex justify-center">{icon}</div>
      <h4 className="font-heading font-semibold text-sm mb-1 text-white">
        {title}
      </h4>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  );

  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};
export default Features;
