import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Fashion from './components/Fashion';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Laptops, {image,title,price} from './components/Laptops';
import Watch from './components/Watch';
import Shoes from './components/Shoes';
import Contact from './components/Contact';
import Details from './components/Details';

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/Laptops"><Laptops /></Route>
        <Route exact path="/Watch"><Watch /></Route>
        <Route exact path="/Shoes"><Shoes /></Route>
        <Route exact path="/Fashion"><Fashion /></Route>
        <Route exact path="/Contact"><Contact /></Route>
        <Route exact path="/Laptops/:id"><Details /></Route>
        <Route exact path="/Watch/:id"><Details /></Route>
        <Route exact path="/Fashion/:id"><Details /></Route>
        <Route exact path="/Shoes/:id"><Details /></Route>
      </Switch>
      <Footer />
    </Router>
    </>
  )
}

export default App;

