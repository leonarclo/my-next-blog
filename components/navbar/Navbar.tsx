import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfólio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Sobre",
    url: "/about",
  },
  {
    id: 5,
    title: "Contato",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

function Navbar() {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        merdapostagens
      </Link>
      <ul className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logoutButton}>Log out</button>
      </ul>
    </nav>
  );
}

export default Navbar;
