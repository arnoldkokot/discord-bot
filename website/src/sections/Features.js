import { Container, Heading, Feature } from "../components";
import { features } from "../content";

export default function Features() {
  return (
    <Container className="py-8 text-center surface-0">
      <Heading className="mb-3">
        One Bot,<span className="text-primary"> Many Features</span>
      </Heading>
      <div className="text-700 text-sm mb-6">
        Check out this awsome bot features.
      </div>
      <div className="grid">
        {features.map((feature) => (
          <Feature key={feature.title} {...feature} />
        ))}
      </div>
    </Container>
  );
}
