export default function FButton({ children, onClick }) {
  return (
    <>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
}
