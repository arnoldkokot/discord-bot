import {
  Hero,
  Features,
  Commands,
  Questions,
  Banner,
  Footer,
} from "./sections";
import { Container, Navigation, Wrapper } from "./components";

export default function App() {
  return (
    <>
      <Wrapper>
        <Hero />
        <Container>
          <Features />
        </Container>
        <Container>
          <Commands />
        </Container>
        <Container>
          <Questions />
        </Container>
        <Container>
          <Banner />
        </Container>
      </Wrapper>
      <Footer />
      <Navigation />
    </>
  );
}
