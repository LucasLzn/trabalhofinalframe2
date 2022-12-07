import React from "react";
import styles from "../../styles/Compra.module.css";

export default function Thanks() {
  return (
  <div className={styles.page} onLoad={Giving()}>
    <p>Aguarde enquanto processamos seu pedido...</p>
  </div>
  )
}

export function Giving() {
  setTimeout(() => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
  }, 3000);
}