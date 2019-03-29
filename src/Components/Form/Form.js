import React, {Component} from 'react'


class Form extends Component{
    constructor(){
        super()
        this.state={
            productname: '',
            price: 0,
            imgurl:''
        }
    }


    handleChange = (e) => {
        console.log(e.target.value)
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleAddClick = () =>{
        let item = this.state
        {this.props.createProduct(item)}
        this.setState=({
            productname: '',
            price: 0,
            imgurl: '',
        })
        
    }
    
    handleCancel = () =>{
        
        this.setState({
            productname: '',
            price: 0,
            imgurl: '',
        })
    }




    render(){
        
        let {productname, price, imgurl} = this.state

        return(
            <div className="formContainer">
                <div className= "formImg">
                    <img src="https://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg" alt="nopic"/>
                </div>

                <div className= "formInputs">
                    Image URL:
                    <input name="imgurl"
                        onChange={this.handleChange}
                        type="text"
                        value={imgurl}
                        />
                    Product Name:
                    <input name="productname"
                        onChange={this.handleChange}
                        type="text"
                        value={productname}
                        
                        />
                    Price:
                    <input name="price"
                        onChange={this.handleChange}
                        type="number"
                        value={price}
                    />

                </div>

                <div className="formButtons">
                    <button onClick={this.handleCancel}>
                        Cancel
                    </button>
                    <button onClick={this.handleAddClick}>
                        Add to inventory
                    </button>
                </div>
                
            </div>
        )
    }
}

export default Form