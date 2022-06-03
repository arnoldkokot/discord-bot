import { Button } from "primereact/button";
import content from "../content";

export default function Hero() {
  return (
    <div
      style={{ height: "100vh" }}
      className="grid grid-nogutter surface-0 text-800"
    >
      <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center justify-content-center ">
        <section>
          <span className="block text-6xl font-bold mb-1">Create the mood</span>
          <div className="text-6xl text-primary font-bold mb-3">
            your members want
          </div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            "Daiji" is a music bot for discord servers that allows users to
            listen to their favorite music with all channel members,
            simultaneously.
          </p>
          <a href={content.link.discord} target="_blank" rel="noreferrer">
            <Button
              label="Add on Discord"
              type="button"
              className="mr-3 p-button-raised"
            />
          </a>
          <a href={content.link.github} target="_blank" rel="noreferrer">
            <Button
              label="Github"
              type="button"
              className="p-button-outlined"
            />
          </a>
        </section>
      </div>
      <div
        className="col-12 hidden md:block md:col-6 bg-center bg-cover"
        style={{
          clipPath: "polygon(8% 0, 100% 0%, 100% 100%, 0 100%)",
          backgroundImage: "url(assets/images/hero.png)",
        }}
      >
        Image dontainer
        {/* <img src="assets/images/hero.png" alt="hero-1" className="h-screen" /> */}
      </div>
    </div>
  );
}
