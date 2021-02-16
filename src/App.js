
import './App.css';
import {Switch, Route} from "react-router-dom";
import { Contact } from './Contact';
import {About} from "./About"
import {Error} from "./Error"
import Navbar from "./Navbar"
import Search from './Search';

const App=()=> {
  return (
   <>
    <Navbar/>
   <Switch>
     <Route exact path="/" component={Contact}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/search" component={Search}/>
     <Route component={Error}/>
     
   </Switch>
   </>
  );
}

export default App;
