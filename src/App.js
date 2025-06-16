import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar1 from './Component/Navbar1';
import Section2 from './Component/Section2';
import Categoty from './Category/Categoty';
import Productdetail from './Category/Productdetail';
import Productdetail1 from './Category/Productdetail1';
// import Section1 from './Component/Section1';
import Cart from './Category/Cart';
import CustomerDetail from './Component/CustomerDetail';
import LastPage from './Component/LastPage';
import Mainpage from './Component/Mainpage';
import Payment from './Component/Payment';
import Qr from './Component/Qr';
import Supplier from './Component/Supplier';
import Newsroom from './Component/Newsroom';
import Signin from './Firebase/Signin';
import Login from './Firebase/Login';

function App() {
  return (
    <div className="App">
        <Navbar1/>
       <Routes>

       <Route path="/" element={<Mainpage/>}/>x 
        <Route path="/" element={<Section2/>}/>
        <Route path="/" element={<Section2/>}/>
        <Route path="/:type" element={<Categoty/>}/>
        <Route path="/Category/:type/:id" element={<Productdetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/mult/:id" element={<Productdetail1/>}/>
        <Route path='Howtopay' element={<Payment/>}/>
        <Route path='/Qr' element={<Qr/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/customerdetail" element={<CustomerDetail/>}/>
        <Route path='/end' element={<LastPage/>}/>
        <Route path='/supplier' element={<Supplier/>}/>
        <Route path='/newsroom' element={<Newsroom/>}/>



       </Routes>

        

    </div>
  );
}

export default App;
