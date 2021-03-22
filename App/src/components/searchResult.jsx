import React from "react";
import { withRouter } from "react-router";
// components
import GridProduct from './gridProduct';
class SearchResult extends React.Component {  
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        this.getProducts = this.getProducts.bind(this)
    }
    componentDidMount() {
        this.getProducts()
        
    }
    componentDidUpdate(prevProps) {
        if(prevProps.search !== this.props.search) {
            this.getProducts();
        }
        
    }
    getProducts = () => {
        let search = this.props.search
        fetch("http://localhost:5000/api/items?q="+search)
        .then(response => response.text())
        .then(result => {
            let results = JSON.parse(result)
            Object.values(results).map((items, i) => {
                if(i == 2) {
                    this.setState({products:items})
                }
            })
        })
        .catch(error => console.log('error', error));

    }
    render() {
        return(
            <div className="grid">
                {this.state.products.map((product,i) => {
                    return <GridProduct product={product} key={i}/>
                })}
            </div>
        )
    }
}
export default withRouter(SearchResult) ;