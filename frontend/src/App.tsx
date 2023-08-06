import './App.css';
import { sampleProducts } from './data';

function App() {
  return (
    <div>
      <header></header>
      <main>
        {sampleProducts.map((product) => (
          <li key={product.slug}>
            <img className="product-image" src={product.image} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </li>
        ))}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
