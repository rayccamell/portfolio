export default function Secao({ id, titulo, children }) {
  return (
    <section id={id} className="secao" aria-labelledby={`${id}-titulo`}>
      <div className="container">
        <h2 id={`${id}-titulo`}>{titulo}</h2>
        {children}
      </div>
    </section>
  );
}
