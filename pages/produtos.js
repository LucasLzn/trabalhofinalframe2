import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Produtos.module.css';
import Navbar from '../components/Navbar';
import Link from 'next/link';


function Produtos({ products }) {

  return (

    <div>
      <main className={styles.page}>
        <Navbar />
        <h1 className={styles.title}>Produtos</h1>
        <div className={styles.list}>
          {products.map((produto) => (
            <div key={produto.id} className={styles.item}>

              <Link href='/produto/[id]' as={`/produto/${produto.id}`}>
                <div className={styles.imgBackground}>
                  <img className={styles.img} src={produto.image} alt={produto.title} />
                </div>
                <p className={styles.itemTitle}>{produto.title}</p>
                <p className={styles.itemPrice}>R$ {produto.price}</p>
              </Link>

            </div>
          ))}
        </div>
      </main>
    </div>

  )


}

export async function getStaticProps(context) {
  const response = await axios.get(
    'https://fakestoreapi.com/products'
  );

  const data = await response.data;

  return {
    props: { products: data },
  }
}

export default Produtos;