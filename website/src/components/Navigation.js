import { Avatar } from "primereact/avatar";
import content from "../content";

export default function Navigation() {
  return (
    <div className="bg-bluegray-900 text-gray-100 py-3 px-8 flex justify-content-between align-items-center flex-wrap fixed top-0 right-0 left-0">
      <div className="font-bold mr-8 flex align-items-center">
        <a href="/" className="flex align-items-center">
          <Avatar image="assets/images/nav.png" className="mr-3" />
          Daiji
        </a>
      </div>
      <a
        className="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150"
        style={{ width: "2rem", height: "2rem" }}
        href={content.link.github}
        target="_blank"
        rel="noreferrer"
      >
        <i className="pi pi-github"></i>
      </a>
    </div>
  );
}
