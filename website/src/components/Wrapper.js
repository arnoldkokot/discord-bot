export default function Wrapper({ children }) {
  return (
    <div className="flex flex-column justify-content-between gap-8 pb-8">
      {children}
    </div>
  );
}
