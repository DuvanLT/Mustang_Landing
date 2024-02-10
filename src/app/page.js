import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import MustangTec from "./components/MustangTec";
import Mustang from "./components/Mustangs";
import Nav from "./components/Nav";
export default function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <Mustang />
    <Gallery />
    <MustangTec />
    </>
  );
}
