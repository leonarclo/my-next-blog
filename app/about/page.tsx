import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/components/button/Button";
import Link from "next/link";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
        />
        <div className={styles.textImgWrapper}>
          <h2>Digital Storytelling</h2>
          <h3>Criando experiências digitais premiadas</h3>
        </div>
      </div>
      <div className={styles.textSection}>
        <div className={styles.sobreNos}>
          <h2>Quem somos nós?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            dolorum beatae aspernatur suscipit magnam laudantium dolore
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
            laudantium nisi dignissimos tenetur veritatis illum! Illum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            sit, sequi explicabo nostrum molestias fuga odit dicta tenetur
          </p>
        </div>
        <div className={styles.oqueFazemos}>
          <h2>O que fazemos?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            dolorum beatae aspernatur suscipit magnam laudantium dolore iusto
            cupiditate rerum quis, commodi itaque aliquam voluptatibus pariatur
            delectus voluptatem ab. Harum, laboriosam?
          </p>
          <ul>
            <li>Ilustrações criativas</li>
            <li>Websites dinâmicos</li>
          </ul>
          <Link href="/contact">
            <Button>Contato</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
