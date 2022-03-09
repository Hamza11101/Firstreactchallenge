
import './App.css';
import Product from './components/Product';
import products from "./Product.json"
import styled from 'styled-components';


function App() {
  return (
   <Appframe className="App">
     {products.map((product,index)=>(
       <Product product={product} key={index}></Product>
     )
     )}

   </Appframe>
  );
}
const Appframe=styled.div`
text-align:center;
display:flex;`;

export default App;
