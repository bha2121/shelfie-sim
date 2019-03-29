import React, {Component} from 'react'


class Product extends Component{





    render(){
        return(
            <div>
                <img src={this.props.item.imgurl} alt='' height='200' width='200'/>
                {this.props.item.productname}
                {this.props.item.price}
            </div>

            
        )
    }
}

export default Product