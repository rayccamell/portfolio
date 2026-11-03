export default function Rodape({ nome }) {
  return (
    <footer className="rodape">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {nome}.
        </p>
      </div>
    </footer>
  );
}
