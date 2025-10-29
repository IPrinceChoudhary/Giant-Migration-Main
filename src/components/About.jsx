// AboutUs.jsx
import Short from "./ui/About/short";
import Content from "./ui/About/content";

const About = () => {
  return (
    <section className="py-16 lg:py-24 lg:px-20 bg-[#FAF8F7] overflow-hidden">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="mb-10">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-maroon-dark via-brand to-maroon-dark bg-clip-text text-transparent font-heading">
              Leading Immigration Consultants
            </span>
          </h2>
        <p className="text-lg text-gray-600 text-center">
            Your Vision, Our Mission – Making Immigration Solutions Simple
        </p>
        </div>
        {/* Main Grid Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Short />
          <Content />
        </div>
      </div>
    </section>
  );
};

export default About;
