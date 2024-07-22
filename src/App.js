//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Products} from './components/Products';
import ProductDetails from './components/ProductDetails';
import UpdateUser from './components/UpdateUser';
//import contents from './content';
import AddUser from './components/AddUser.js';
import ViewUser from './components/ViewUser';
import EmpDetails from './components/EmpDetails';
function App() {
  return (
      //<Products />
      <BrowserRouter>
           <Routes>
              <Route path="/getAllEmp" element={<ViewUser />} exact={true} />
               <Route path="/update/:id" element={<UpdateUser />} exact={true} /> 
              <Route path="/addEmp" element={<AddUser/>} exact={true} />
              <Route path="/" element={< Products/>} />
              {/*<Route path="/productDetail/:id" element={<ProductDetails />} />*/}
              <Route path="/update/:id" element={<UpdateUser/>} exact={true} />
              <Route path="/view" element={<EmpDetails />} exact={true} />
            </Routes>

      </BrowserRouter>
  );
}

export default App;
