import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Header from './components/Header'
import ShopScreen from './components/ShopScreen/ShopScreen';
import ProductScreen from './components/ProductScreen/ProductScreen';
import CartScreen from './components/CartScreen/CartScreen';

function App() {
    return (
        <Router>
        <Header/>
            <Switch>
            <Route path="/product/:id">
                <ProductScreen/>
            </Route>
            <Route path="/store">
                <CartScreen/>
            </Route>
            <Route path="/">
                <ShopScreen/>
            </Route>
            </Switch>
        </Router>    
  );
}

export default App;
