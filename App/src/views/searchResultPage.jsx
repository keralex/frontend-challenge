//import router
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link,
  useLocation
  // Redirect
} from 'react-router-dom';

// Components 
import SearchResult from '../components/searchResult';
import Nav from '../components/nav';
//Buscar los parametros que la url actual pueda proporcionar
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

//main page
const MainPage = () =>  {
  let query = useQuery();
    return <Router>
        <SearchResult search={query.get("search")}/>
    </Router>
}
export default MainPage;
