import Secao from './Secao';
import { IconeEmail, IconeGithub, IconeLinkedin } from './Icones';

export default function Contato({ links }) {
  return (
    <Secao id="contato" titulo="Contato">
      <div className="acoes acoes-sem-margem">
        <a className="botao botao-principal" href={`mailto:${links.email}`}>
          <IconeEmail /> {links.email}
        </a>
        <a className="botao botao-secundario" href={links.linkedin} target="_blank" rel="noopener noreferrer">
          <IconeLinkedin /> LinkedIn
        </a>
        <a className="botao botao-secundario" href={links.github} target="_blank" rel="noopener noreferrer">
          <IconeGithub /> GitHub
        </a>
      </div>
    </Secao>
  );
}
