import Hero from "../components/Hero";
import About from "../components/About";
import Choose from "../components/Choose";
import Testimonials from "../components/Testimonials";
import Blogs from "../components/Blogs"
import FAQ from "../components/FAQs"

const Home = () => {
  return (
    <main className="bg-surface">
      <Hero />
      <About />
      <Choose />
      <Testimonials />
      <Blogs/>
      <FAQ/>
    </main>
  );
};
export default Home;
