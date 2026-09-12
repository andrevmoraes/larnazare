import styles from "./AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          <div className={styles.placeholderImage}>
            {/* Imagem a ser substituída por foto real */}
            <span className={styles.imageText}>Desde 1973</span>
          </div>
        </div>
        <div className={styles.content}>
          <span className={styles.badge}>Nossa História</span>
          <h2 className={styles.title}>Mais de 50 anos de dedicação e amparo</h2>
          <p className={styles.text}>
            O Lar Espírita Maria de Nazaré nasceu de um ideal de amor e caridade. A instituição começou a tomar forma com os espíritas de Mogi Mirim em 1951, mas foi em 1971, com a iniciativa de <strong>Juca Andrade</strong>, que a obra foi retomada.
          </p>
          <p className={styles.text}>
            Com muito esforço e apoio da população, o prédio ficou pronto em 1973. Juca Andrade liderou o processo com tanto amor e dedicação que logo passou a ser chamado carinhosamente de &ldquo;Vô Juca&rdquo; pelas primeiras crianças atendidas.
          </p>
          <p className={styles.text}>
            Hoje, sob gestão da Associação Espírita Jesus e Caridade, a instituição se consolidou como um hospital especializado em cuidados prolongados para pacientes com necessidades neurológicas.
          </p>
        </div>
      </div>
    </section>
  );
}
