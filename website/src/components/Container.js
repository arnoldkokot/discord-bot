export default function Container({ children }) {
  return (
    <div>
      <div style={{ maxWidth: "1500px" }} className="mx-auto py-8">
        {children}
      </div>
    </div>
  );
}
