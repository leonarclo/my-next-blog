import Image from "next/image";
import styles from "./page.module.scss";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.texts}>
        <h1>O melhor design para seu produto digital</h1>
        <p>
          Tornando real a sua ideia. Nós reunímos as melhores equipes da
          indústria tecnológica.
        </p>
        <Button>Sobre nosso trabalho</Button>
      </div>
      <div className={styles.imgWrapper}>
        <Image src="/hero.png" alt="" fill />
      </div>
    </main>
  );
}
