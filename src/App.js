import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import PaymentSuccess from './components/PaymentSuccess';
import User from './components/User'
import AddUser from './components/AddUser'
import Login from './components/Login'
import EditUser from './components/EditUser';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/total" component={Checkout}/>
                    <Route path="/payment" component={Payment}/>
                    <Route path="/success" component={PaymentSuccess}/>
                    <Route path="/user" exact component={User} />
                    <Route path="/user/add" component={AddUser}/>
                    <Route path="/user/edit/:id" component={EditUser}/>
                    <Route path="/login" component={Login}/>
                </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
