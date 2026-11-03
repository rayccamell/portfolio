import { IconeGithub, IconeLinkedin } from './Icones';

export default function Apresentacao({ perfil }) {
  const { nome, cargo, local, apresentacao, links } = perfil;
  const sigla = nome
    .split(' ')
    .slice(0, 2)
    .map((parte) => parte[0])
    .join('');

  return (
    <section id="inicio" className="apresentacao">
      <div className="container apresentacao-grade">
        <div>
          <h1>{nome}</h1>
          <p className="apresentacao-cargo">
            {cargo}
            {local && <span className="apresentacao-local"> · {local}</span>}
          </p>
          <p className="apresentacao-texto">{apresentacao}</p>
          <div className="acoes">
            <a className="botao botao-principal" href="#projetos">
              Ver projetos
            </a>
            <a className="botao botao-secundario" href={links.github} target="_blank" rel="noopener noreferrer">
              <IconeGithub /> GitHub
            </a>
            <a className="botao botao-secundario" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <IconeLinkedin /> LinkedIn
            </a>
          </div>
        </div>
        <div className="monograma" aria-hidden="true">
          {sigla}
        </div>
      </div>
    </section>
  );
}
