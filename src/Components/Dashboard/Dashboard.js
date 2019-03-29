import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
    
    render(){
        return(
            <div>
                {this.props.inventory.map((item)=>{
                    return <Product
                                key={item.product_id} 
                                item={item}
                                
                            />
                })}
                
            </div>
        )
    }
}

export default Dashboard