
import Home from "./components/Home";

import Login from "./components/Login";
import Register from "./components/Register";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import FinishOrder from "./components/FinishOrder";

const App=()=>{
  return(<>
  <Navbar/>
<Routes>
  <Route path='home' element={<Home />} />
  <Route path='login' element={<Login />} />
  <Route path='register' element={<Register />}/>
  <Route path='cart' element={<Cart />}/>
  <Route path='finishOrder' element={<FinishOrder />}/>
  <Route path='*' element={<Home />} />
  <Route path='' element={<Home />} />
</Routes>
  </>) 
}
export default App;