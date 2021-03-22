import { Component } from 'react';
import './Sass/App.scss';
//import router
// eslint-disable-next-line
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  withRouter
  // Link,
  // Redirect
} from 'react-router-dom';

// views 
import searchResultPage from "./views/searchResultPage"
import ProductPage from './views/productPage';
// Components 
import Nav from './components/nav';

class App extends Component {
  render() {
    return <Router>
      <Nav/>
      <Switch>
        <Route exact path='/items/:productId' component = {ProductPage}/>
        <Route  exact path="/"  component = {withRouter(searchResultPage)}/>
        <Route  path="/items"  component = {withRouter(searchResultPage)}/>

      </Switch>
    </Router>
  }
}
export default App;
