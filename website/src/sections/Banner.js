import { Button } from "primereact/button";
import { Container } from "../components";
import { link } from "../content";

export default function Banner() {
  return (
    <Container className="surface-0 text-center py-8 mb-8">
      <div className="text-900 font-bold text-5xl mb-3">Start using Daiji</div>
      <div className="text-700 text-2xl mb-5">
        No need for a setup, just click the button, select your server and start
        listening to music.
      </div>
      <a href={link.discord} target="_blank" rel="noreferrer">
        <Button
          label="Invite Now"
          icon="pi pi-discord"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        />
      </a>
    </Container>
  );
}
