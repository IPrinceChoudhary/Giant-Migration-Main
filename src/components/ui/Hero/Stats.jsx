import { useEffect, useState } from "react";

const Stats = () => {
  const stats = [
    { number: 1000, suffix: "+", label: "Successful Cases" },
    { number: 25, suffix: "+", label: "Countries" },
    { number: 98, suffix: "%", label: "Success Rate" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000; // 2s animation
      const increment = end / (duration / 16); // ~60fps
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = Math.floor(start);
          return newCounts;
        });
      }, 16);
    });
  }, []);

  return (
    <div className="flex items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-600">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-heading font-bold text-brand-200">
            {counts[index]}
            {stat.suffix}
          </div>
          <div className="text-sm text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
