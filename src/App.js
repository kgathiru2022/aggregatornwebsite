// import logo from './logo.svg';
import './App.css';
import Footer from './component/footer/Footer';
import Product from './component/product/Product';
import Nav from './component/navbar/Nav';
function App() {
  return (
<div>
  <div className='sticky z-10 top-0'>
  <Nav/>
  </div>
  <Product/>
  <div className='bg-gray-200  bottom-0  '>
    <Footer/>
  </div>
</div>
  );
}

export default App;
