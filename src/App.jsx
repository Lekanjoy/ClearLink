import Header from "./components/Header";
import Hero from "./components/Hero";
import background from "./assets/Background pattern.svg";
import Companies from "./components/Companies";
import WhyChoose from "./components/WhyChoose";
import Testimonial from "./components/Testimonial";
import FAQs from "./components/FAQs";
import Trial from "./components/Trial";
import Footer from "./components/Footer";
import FooterLinks from "./components/FooterLinks";

function App() {
  return (
    <div className="font-[Inter]  w-full relative ">
      <img src={background} alt="" className="absolute w-full top-0  left-0 " />
      <header className="fixed w-full top-0 left-0 z-[100] lg:px-[128px] pt-5 cursor-pointer lg:pt-10">
        <Header />
      </header>
      <main className="pt-[150px] lg:pt-[200px]">
        <Hero />
        <Companies />
        <WhyChoose />
        <Testimonial />
        <FAQs />
        <Trial />
      </main>
      <footer>
        <Footer />
        <FooterLinks/>
      </footer>
    </div>
  );
}
export default App;
