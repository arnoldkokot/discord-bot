import { Button } from "primereact/button";
import { Container } from "../components";
import { link } from "../content";

import avatar from "../img/daiji.png";

export default function Hero() {
  return (
    <Container
      style={{ minHeight: "80vh", marginTop: "84px" }}
      className="flex flex-column justify-content-center text-center"
    >
      <img
        src={avatar}
        height={250}
        width={250}
        alt="daiji avatar"
        className="mx-auto mb-5 border-round"
      />
      <span className="block text-6xl font-bold mb-1">You, your friends</span>
      <div className="text-6xl text-primary font-bold mb-3">
        and some good tunes
      </div>
      <p className="mt-0 mb-4 line-height-3 text-700">
        Daiji brings music from youtube directly to your Discord voice channel
        allowing
        <br />
        you to listen to music of your choice with your friends. It supports
        <br />
        direct youtube links and links to playlists.
      </p>
      <div>
        <a href={link.discord} target="_blank" rel="noreferrer">
          <Button
            label="Add on Discord"
            type="button"
            className="mr-3 p-button-raised"
          />
        </a>
        <a href={link.github} target="_blank" rel="noreferrer">
          <Button label="Github" type="button" className="p-button-outlined" />
        </a>
      </div>
    </Container>
  );
}
