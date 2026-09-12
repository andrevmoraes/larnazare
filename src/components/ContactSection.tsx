import styles from "./ContactSection.module.css";
import { IconPin, IconPhone, IconClock } from "./icons";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  MAPS_LINK,
  MAPS_EMBED_SRC,
  PHONE_DISPLAY,
  PHONE_TEL,
  VISIT_HOURS_LABEL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "../lib/site-config";

export default function ContactSection() {
  return (
    <section id="contato" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.badge}>Contato e Localização</span>
          <h2 className={styles.title}>Fale Conosco</h2>
          <p className={styles.subtitle}>
            Estamos de portas abertas para receber sua visita, tirar dúvidas ou conversar sobre como você pode nos ajudar.
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.icon}><IconPin /></div>
              <div>
                <h3>Endereço</h3>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  <p>{ADDRESS_LINE_1}</p>
                  <p>{ADDRESS_LINE_2}</p>
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}><IconPhone /></div>
              <div>
                <h3>Telefone</h3>
                <a href={`tel:${PHONE_TEL}`} className={styles.infoLink}>
                  <p>{PHONE_DISPLAY}</p>
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}><IconClock /></div>
              <div>
                <h3>Horário de Visitas</h3>
                <p>{VISIT_HOURS_LABEL}</p>
              </div>
            </div>

            <div className={styles.socials}>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>Instagram</a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={styles.socialBtn}>Facebook</a>
            </div>
          </div>

          <div className={styles.map}>
            <iframe
              src={MAPS_EMBED_SRC}
              title="Localização do Lar Espírita Maria de Nazaré no mapa"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapFrame}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
