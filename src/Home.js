import { useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([
    { title: 'Datamation', address: '', id: 1 },
    { title: 'Retro', address: '', id: 2 },
    { title: 'Eight', address: '', id: 3 }
  ])

  return (
    <div className="home">
      {products.map(product => (
        <div className="products-preview" key={product.id} >
          <p>{ pruduct.id }</p>
          //gif address
          <h5>{ product.title }</h5>
          
        </div>
      ))}
    </div>
  );
}
 
export default Home;
