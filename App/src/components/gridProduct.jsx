import React from "react";
import { Link } from "react-router-dom";

class GridProduct extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <Link to={`/items/${this.props.product.id}`}>
                <div className="gridProduct">
                    <div className="gridProduct-image">
                        <img src={this.props.product.picture} alt="" />
                    </div>
                    <div className="gridProduct-info">
                        <div className="price">
                            $ {this.props.product.price.amount}
                            {this.props.product.free_shipping &&
                            <span className="cucarda-Free-shipping"></span>
                            }
                        </div>
                        <div className="title">
                            {this.props.product.title}
                        </div>
                    </div>
                    <div className="gridProduct-adress">
                        {this.props.product.adress}
                    </div>


                </div>
            </Link>

        )
    }
}
export default GridProduct;