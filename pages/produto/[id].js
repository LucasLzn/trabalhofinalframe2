import axios from 'axios';


function Produto({produto = {}}){

    return <div> 

        <p> {produto.id} </p>
        <p> {produto.title} </p>
        <div> 
            <img src={produto.image}></img> 
        </div> 
        <p> {produto.description} </p>
        <p> {produto.count} </p>
        

    </div>
}

export async function getStaticProps(context){
    const response = await axios.get(
        'https://fakestoreapi.com/products/' + context.params.id
    );

    const produto = await response.data;

    return{
        props: {produto},
    }

    
}

export async function getStaticPaths() {
    const response = await axios.get(
        'https://fakestoreapi.com/products'
    );

    const products = await response.data;
    const paths = products.map((produto) => {
        return {params: {id: String(produto.id)}}
    })
    return {
      paths,
      fallback: false, // can also be true or 'blocking'
    }
  }

export default Produto;