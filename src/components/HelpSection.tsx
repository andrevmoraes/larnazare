"use client";

import { useState } from "react";
import styles from "./HelpSection.module.css";
import { ORG_CNPJ } from "../lib/site-config";

const PIX_KEY = ORG_CNPJ;

export default function HelpSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="ajudar" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.badge}>Como Ajudar</span>
          <h2 className={styles.title}>Faça parte desta obra de amor</h2>
          <p className={styles.subtitle}>
            &ldquo;Se já podes sentir o hálito do amor do Cristo nos teus sentimentos, transforma-o em serviço ao teu próximo de maneira voluntária.&rdquo;
          </p>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Trabalho Voluntário</h3>
            <p>
              A sua doação de tempo é valiosa. Servir enriquece de vida e amadurece sentimentos. Venha nos visitar para entender como você pode contribuir com o bem-estar dos nossos pacientes através de atividades diversas.
            </p>
            <a href="#contato" className={styles.btn}>Entre em Contato</a>
          </div>

          <div className={styles.card}>
            <h3>Doações</h3>
            <p>
              O Lar funciona com apoio financeiro do Poder Público e da população. Sua contribuição financeira nos ajuda a manter a estrutura 24h e o atendimento especializado multiprofissional.
            </p>
            <div className={styles.pixBox}>
              <strong>Chave PIX (CNPJ):</strong>
              <p>{PIX_KEY}</p>
              <button
                type="button"
                className={styles.copyBtn}
                onClick={handleCopyPix}
              >
                {copied ? "Chave copiada ✓" : "Copiar chave PIX"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
