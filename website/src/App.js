import {
  Hero,
  Features,
  Commands,
  Questions,
  Banner,
  Footer,
} from "./sections";
import { Navigation } from "./components";

export default function App() {
  return (
    <>
      <Hero />
      <Features />
      <Commands />
      <Questions />
      <Banner />
      <Footer />
      <Navigation />
    </>
  );
}
