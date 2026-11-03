import Secao from './Secao';
import { IconeSeta } from './Icones';

export default function Projetos({ projetos }) {
  return (
    <Secao id="projetos" titulo="Projetos">
      <p className="secao-nota">Projetos de estudo, direto do meu GitHub.</p>
      <ul className="cartoes">
        {projetos.map((projeto) => (
          <li key={projeto.nome} className="cartao">
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
            <span className="pilula pilula-pequena">{projeto.linguagem}</span>
            <a className="cartao-link" href={projeto.link} target="_blank" rel="noopener noreferrer">
              Ver no GitHub <IconeSeta />
            </a>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
