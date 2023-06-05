import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Switch} from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import login from './components/login';
import {useState} from "react"
import cart from './components/cart';
import Register from './components/Register';
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:id" component={Product}/>
      <Route exact path="/login" component={login} handler={setIsAuth}/>
      <Route path='/Cart' component={cart} />
      <Route path='/Register' component={Register} />
    </Switch>
   
   
   </>
  );
}

export default App;
