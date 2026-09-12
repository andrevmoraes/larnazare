import styles from "./StructureSection.module.css";
import { IconHospital, IconClock, IconUsers, IconHeart } from "./icons";

export default function StructureSection() {
  return (
    <section id="estrutura" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.badge}>Estrutura e Atendimento</span>
          <h2 className={styles.title}>Atendimento Humanizado 24h</h2>
          <p className={styles.subtitle}>
            Oferecemos uma estrutura hospitalar completa, focada no amparo e na qualidade de vida dos nossos pacientes.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}><IconHospital /></div>
            <h3>Hospital Especializado</h3>
            <p>
              Em convênio com o Sistema Único de Saúde (SUS), a entidade é enquadrada pelo Ministério da Saúde como Hospital especializado.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}><IconClock /></div>
            <h3>Assistência Ininterrupta</h3>
            <p>
              Funcionamos 24 horas por dia, oferecendo atenção ininterrupta aos pacientes com enfermidades neurológicas e necessidades prolongadas.
            </p>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}><IconUsers /></div>
            <h3>Equipe Multiprofissional</h3>
            <p>
              Contamos com dezenas de profissionais dedicados, entre médicos, enfermeiros, e terapeutas para cobrir toda a gama de necessidades especiais.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}><IconHeart /></div>
            <h3>Acolhimento Integral</h3>
            <p>
              Atualmente abrigamos cerca de 60 pacientes de diferentes faixas etárias, proporcionando amor, dignidade e respeito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
