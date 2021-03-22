//import router
import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link,
  useLocation,
  withRouter
  // Redirect
} from 'react-router-dom';

// Components 
import SearchResult from '../components/searchResult';
//Buscar los parametros que la url actual pueda proporcionar
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

//main page
const MainPage = () =>  {
  let query = useQuery();
    return(
      <div className="searchResultPage">

        <SearchResult search={query.get("search")}/>
      </div>
    ) 
    
}
export default withRouter(MainPage)
