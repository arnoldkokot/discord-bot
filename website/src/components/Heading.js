export default function Heading({ children, className }) {
  return (
    <div className={`font-bold text-2xl text-900 text-center ${className}`}>
      {children}
    </div>
  );
}
