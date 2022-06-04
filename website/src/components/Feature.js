export default function Feature({ title, description, icon }) {
  return (
    <div className="col-12 md:col-4 mb-4 px-5">
      <span
        className="p-3 shadow-2 mb-3 inline-block"
        style={{ borderRadius: "10px" }}
      >
        <i className={`pi text-4xl text-primary ${icon}`}></i>
      </span>
      <div className="text-900 mb-3 font-medium">{title}</div>
      <span className="text-700 text-sm line-height-3">{description}</span>
    </div>
  );
}
