import styles from "./styles.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg"; // importando com SVGR

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
}
