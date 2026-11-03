import { perfil } from './data/perfil';
import Cabecalho from './components/Cabecalho';
import Apresentacao from './components/Apresentacao';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Rodape from './components/Rodape';

export default function App() {
  return (
    <>
      <Cabecalho nome={perfil.nome} />
      <main>
        <Apresentacao perfil={perfil} />
        <Projetos projetos={perfil.projetos} />
        <Contato links={perfil.links} />
      </main>
      <Rodape nome={perfil.nome} />
    </>
  );
}
