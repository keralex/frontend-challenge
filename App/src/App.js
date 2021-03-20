import { Component } from 'react';
import './Sass/App.scss';
//import router
// eslint-disable-next-line
import {
  BrowserRouter as Router, 
  Route, 
  // Switch, 
  // Link,
  // Redirect
} from 'react-router-dom';

// views 
import searchResultPage from "./views/searchResultPage"
// components 
// Components 
import Nav from './components/nav';

class App extends Component {
  render() {
    return <Router>
      <Nav/>
      <Route path="/"  component = {searchResultPage}/>
    </Router>
  }
}
export default App;
