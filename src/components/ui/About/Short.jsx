import { motion } from "motion/react";

const Short = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex justify-center items-center"
    >
      <div className="relative">
        {/* iPhone Frame */}
        <div className="relative w-[280px] sm:w-[320px] md:w-[340px] lg:w-[360px] mx-auto">
          {/* iPhone outer frame */}
          <div className="relative bg-[#1f1f1f] rounded-[3rem] p-3 shadow-2xl">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[40%] h-7 bg-[#1f1f1f] rounded-b-3xl z-20"></div>

            {/* Screen container */}
            <div
              className="relative bg-black rounded-[2.5rem] overflow-hidden"
              style={{ aspectRatio: "9/19.5" }}
            >
              {/* YouTube Short Embed */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/-Bp1NiO4r8A"
                title="Giant Migration YouTube Short"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Home indicator (bottom bar) */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white rounded-full opacity-50"></div>
          </div>

          {/* Side buttons */}
          <div className="absolute -left-2 top-[20%] w-1 h-12 bg-[#1f1f1f] rounded-l-lg"></div>
          <div className="absolute -left-2 top-[35%] w-1 h-16 bg-[#1f1f1f] rounded-l-lg"></div>
          <div className="absolute -left-2 top-[50%] w-1 h-16 bg-[#1f1f1f] rounded-l-lg"></div>
          <div className="absolute -right-2 top-[30%] w-1 h-20 bg-[#1f1f1f] rounded-r-lg"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Short;
