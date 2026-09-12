import styles from "./Footer.module.css";
import {
  ORG_NAME,
  ORG_LEGAL_NAME,
  ORG_CNPJ,
  SITE_TAGLINE,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  PHONE_DISPLAY,
  PHONE_TEL,
  VISIT_HOURS_LABEL,
} from "../lib/site-config";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.column}>
          <h3>{ORG_NAME}</h3>
          <p>{ORG_LEGAL_NAME}</p>
          <p>CNPJ: {ORG_CNPJ}</p>
          <p>{SITE_TAGLINE}.</p>
        </div>

        <div className={styles.column}>
          <h3>Contato</h3>
          <p>Endereço: {ADDRESS_LINE_1}</p>
          <p>{ADDRESS_LINE_2}</p>
          <a href={`tel:${PHONE_TEL}`} className={styles.phoneLink}>
            Telefone: {PHONE_DISPLAY}
          </a>
        </div>

        <div className={styles.column}>
          <h3>Horário de Visitas</h3>
          <p>{VISIT_HOURS_LABEL}</p>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} {ORG_LEGAL_NAME}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
