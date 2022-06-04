import { link } from "../content";

export default function Footer() {
  return (
    <div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap">
      <div className="mr-1">Created & Maintained by Arnold Kokot</div>
      <a
        className="flex align-items-center no-underline justify-content-center border-circle text-100 hover:bg-bluegray-700 cursor-pointer transition-colors transition-duration-150"
        style={{ width: "2rem", height: "2rem" }}
        href={link.author}
        target="_blank"
        rel="noreferrer"
      >
        <i className="pi pi-external-link"></i>
      </a>
    </div>
  );
}
