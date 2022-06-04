import { Avatar } from "primereact/avatar";
import { link } from "../content";

import navImage from "../img/nav.png";

export default function Navigation() {
  return (
    <div className="bg-bluegray-900 text-gray-100 py-3 px-3  md:px-8 flex justify-content-between align-items-center flex-wrap fixed top-0 right-0 left-0">
      <a href="/" className="flex align-items-center mr-8">
        <Avatar image={navImage} alt="daiji avatar" className="mr-3" />
      </a>
      <a
        className="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150"
        style={{ width: "2rem", height: "2rem" }}
        href={link.github}
        target="_blank"
        rel="noreferrer"
      >
        <i className="pi pi-github"></i>
      </a>
    </div>
  );
}
