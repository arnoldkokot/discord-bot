import { Accordion, AccordionTab } from "primereact/accordion";
import { Container, Heading } from "../components";
import { faq } from "../content";

export default function Questions() {
  return (
    <Container className="py-8 surface-0">
      <Heading className="mb-6">
        Frequently asked <span className="text-primary">questions</span>
      </Heading>
      <Accordion activeIndex={0}>
        {faq.map(({ question, answer }) => (
          <AccordionTab header={question}>
            <p>{answer}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </Container>
  );
}
