import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={`container ${styles.container}`}>
          <div className={styles.content}>
            <h1 className={styles.title}>Lar Espírita Maria de Nazaré</h1>
            <p className={styles.subtitle}>
              Acolhendo com Amor e Caridade desde 1973. Hospital especializado e dedicado ao amparo e cuidado.
            </p>
            <div className={styles.ctaGroup}>
              <a href="#ajudar" className={`${styles.btn} ${styles.btnPrimary}`}>Como Ajudar</a>
              <a href="#contato" className={`${styles.btn} ${styles.btnSecondary}`}>Fazer uma Visita</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
