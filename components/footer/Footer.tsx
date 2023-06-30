import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.copy}>
        2023, Leonardo. Todos os direitos reservados.
      </div>
      <div className={styles.socialIcons}>
        <Image src="/1.png" alt="Facebook Icon" width={20} height={20} />
        <Image src="/2.png" alt="Instagram Icon" width={20} height={20} />
        <Image src="/3.png" alt="Twitter Icon" width={20} height={20} />
        <Image src="/4.png" alt="Youtuber Icon" width={20} height={20} />
      </div>
    </div>
  );
}

export default Footer;
