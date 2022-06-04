export default function Container({ children, className, style }) {
  return (
    <div className={className} style={style}>
      <div style={{ maxWidth: "1500px" }} className="mx-auto px-3">
        {children}
      </div>
    </div>
  );
}
