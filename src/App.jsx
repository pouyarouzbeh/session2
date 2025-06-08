// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
import ProductList from "./components/ProductList";
import './App.css';

 const products = [
    { id: 1, title: "ماگ ری‌اکت", price: 120000},
    { id: 2, title: "کیف لپ‌تاپ", price: 450000 },
    { id: 3, title: "استیکر",    price: 40000  },
    { id: 4, title: "دفترچه",     price: 80000  },
  ];

function App() {
  return (
    <>
      {/* <Header/>
      <Main/>
      <Footer/> */}
    <div>
      <h1>فروشگاه محصولات</h1>
      <ProductList items={products} />
    </div>
    </>
  );
}

export default App;
