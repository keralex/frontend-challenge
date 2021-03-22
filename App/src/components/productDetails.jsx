import React from 'react'

class ProductDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title:null,
            condition:null,
            description:null,
            price:null,
            solds:null, 
            image:null

        }
        this.getProduct = this.getProduct.bind(this)
    }
    getProduct = () => {
        fetch("http://localhost:5000/api/items/"+this.props.productId)
        .then(response => response.text())
        .then(result => {
            let product = JSON.parse(result).item
            this.setState({
                title:product.title,
                condition:product.condition,
                description:product.description,
                price:product.price.amount,
                solds:product.sold_quantity, 
                image:product.picture

            })
            console.log(this.state)
        })
        .catch(error => console.log('error', error));
    }
    componentDidMount() {
        this.getProduct()
    }
    render() {
        return(
            <div className="productDetails">
                <div className="productDetails-image">
                    <img src={this.state.image} alt=""/>
                </div>
                <div className="productDetails-info">
                    <p className="condition">{this.state.condition} - <span>{this.state.solds} vendidos</span></p>
                    <h1 className="title">{this.state.title}</h1>
                    <div className="price">$ {this.state.price}</div>
                    <div className="buyButton">
                        <button>Comprar</button>
                    </div>
                </div>
                <div className="productDetails-description">
                    <h4>Descripción del producto</h4>
                    <p>{this.state.description}</p>
                </div>
            </div>
        )
    }
}
export default ProductDetails