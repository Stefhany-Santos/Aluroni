/* eslint-disable react/react-in-jsx-scope */
import Menu from "components/Menu";
import cardapio from "../../data/cardapio.json";

import styles from "./inicio.module.scss";
import stylesTema from "styles/tema.module.scss";
import nossaCasa from "assets/nossa_casa.png";

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={stylesTema.titulo}>Recomendações da cozinha</h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recomendado__botao}>Ver mais</button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}>Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasa} alt="Cada do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua Vargueiro, 233 <br /> <br /> Vila Maria - SP
        </div>
      </div>
    </section>
  );
}
