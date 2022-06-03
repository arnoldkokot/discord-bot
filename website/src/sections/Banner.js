import { Button } from "primereact/button";
import content from "../content";

export default function Banner() {
  return (
    <div className="surface-0 text-700 text-center">
      <div className="text-900 font-bold text-5xl mb-3">Start using Daiji</div>
      <div className="text-700 text-2xl mb-5">
        No need for a setup, just click the button, select your server and start
        listening to music.
      </div>

      <a href={content.link.discord} target="_blank" rel="noreferrer">
        <Button
          label="Invite Now"
          icon="pi pi-discord"
          className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
        />
      </a>
    </div>
  );
}
