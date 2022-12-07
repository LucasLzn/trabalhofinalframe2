import axios from 'axios';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Item.module.css";
import { FiStar } from "react-icons/fi";
import Link from 'next/link';

function Produto({ produto = {} }) {

  return <div className={styles.wholepage}>

    <Navbar />
    
    <main className={styles.product}>
      <div className={styles.header}>
        <h1 className={styles.title}>{produto.title}</h1>
        <p className={styles.description}>{produto.description}</p>
      </div>
      <div className={styles.imgBackground}>
        <img className={styles.img} src={produto.image} alt={produto.title} />
      </div>
      <div className={styles.details}>
        <p className={styles.price}>R$ {produto.price}</p>
        <p className={styles.quantity}>Quantidade de Itens Disponível: <span>{produto.rating.count}</span></p>
        <p className={styles.rate}>Avaliações: <FiStar /><span>{produto.rating.rate}</span></p>
      </div>
      <Link className={styles.cta} href="/produto/thx" as="/compra">Comprar</Link>
    </main>
    
    <Footer />

  </div>
}

export async function getStaticProps(context) {
  const response = await axios.get(
    'https://fakestoreapi.com/products/' + context.params.id
  );

  const produto = await response.data;

  return {
    props: { produto },
  }


}

export async function getStaticPaths() {
  const response = await axios.get(
    'https://fakestoreapi.com/products'
  );

  const products = await response.data;
  const paths = products.map((produto) => {
    return { params: { id: String(produto.id) } }
  })
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export default Produto;