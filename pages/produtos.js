import React from 'react';
import axios from 'axios';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Link from 'next/link';


function Produtos({products}){

    return (

        <div>
        <Navbar/>
            {products.map((produto) => (
                <div key={produto.id}>

                    <div> 
                        <Link href='/produto/[id]' as={`/produto/${produto.id}`}> 
                            <p> {produto.title} </p> 
                        </Link>  
                    </div>
                    
                </div> 
            ))}
        </div>

    )


}

export async function getStaticProps(context) {
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );

    const data = await response.data;

    return{
        props: {products:data},
    }
}

export default Produtos;