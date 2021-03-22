import React from "react";
import { Link, withRouter } from 'react-router-dom'
//logo
import logo from '../assets/Logo_ML.png'

// Nav Component
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText:""
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }
    handleChange(e) {
        this.setState({searchText : e.target.value})
    }
    handleSearch() {
        //making the search
        this.props.history.push('/items?search='+this.state.searchText.toString())
        
    }
    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          this.handleSearch()
        }
      }
    
    render(){
        return(
            <div className='navbar'> 
                <div className='navbar-logo'>
                    <Link to='/'>
                    <img src={logo} alt=""/>
                    </Link>
                </div>
                <div className='navbar-searchinput'>

                    <input type='text' id="searchInput" className='input' onKeyDown={this.handleKeyDown} onChange={this.handleChange} placeholder='Nunca dejes de buscar'/>
                    <div className='navbar-searchButton' onClick={this.handleSearch}>
                </div>

                </div>
    
    
            </div>
        )
    }
}
export default withRouter(Nav);