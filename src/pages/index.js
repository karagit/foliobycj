import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";
import Works from "../Components/Works";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <Banner />
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  )
}