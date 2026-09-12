"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#estrutura", label: "Estrutura" },
  { href: "#ajudar", label: "Como Ajudar" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoText}>Lar Maria de Nazaré</span>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={styles.menuIcon} data-open={isOpen} />
        </button>
      </div>
    </header>
  );
}
