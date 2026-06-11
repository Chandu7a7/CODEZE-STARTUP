import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import Technologies from "./Technologies";
import IndustriesSection from "./IndustriesSection";
import ProcessSection from "./ProcessSection ";
// import FAQSection from "./FAQSection";


const Home = () => {
  return (
    <>
      <HeroSection />

      <Technologies/>

      <ServicesSection />
      <IndustriesSection/>
      <ProcessSection/>
      {/* <FAQSection/> */}
    </>
  );
};

export default Home;