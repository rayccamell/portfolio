const LINKS = [
  { rotulo: 'Projetos', destino: '#projetos' },
  { rotulo: 'Contato', destino: '#contato' },
];

function iniciais(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0].toUpperCase())
    .join('');
}

export default function Cabecalho({ nome }) {
  return (
    <header className="cabecalho">
      <div className="container cabecalho-interno">
        <a href="#inicio" className="marca" aria-label={`${nome}, voltar ao início`}>
          <span className="marca-sigla">{iniciais(nome)}</span>
          <span className="marca-nome">{nome}</span>
        </a>
        <nav aria-label="Principal">
          <ul className="menu">
            {LINKS.map((link) => (
              <li key={link.destino}>
                <a href={link.destino}>{link.rotulo}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
