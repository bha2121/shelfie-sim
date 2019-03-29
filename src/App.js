import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'



class App extends Component {
  constructor(){
    super()
      this.state= {
        inventory: [
          // {productName: "swag",
          //   price: 50,
          //   imgurl: "https://media.sssports.com/215x215/media/catalog/product/8/4/845840058480_1.jpg"
          // },
          // {productName: "Lebron",
          //   price: 550,
          //   imgurl: "https://media.sssports.com/215x215/media/catalog/product/8/4/845840058480_1.jpg"
          // }
        ]
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res =>{
        console.log('comp res data',res.data)
        this.setState({
            inventory: res.data
        })
    })
    .catch(err => console.log('Component DID NOT mount', err))
}


createProduct = (product) =>{
    axios.post(`/api/product`, product).then(res => {
        this.setState({
            inventory: res.data
        })
    }).catch(err => {
        console.log('an error ocurred while adding a shoe:', err)
    })
}



// updateProduct = (product) => {
//     axios.put(`/api/product/${product.id}`, product).then(res => {
//         this.setState({
//             inventory: res.data
//         })
//     })
//     .catch(err => console.log('UPDATE NOT WORKING', err))
// }



// deleteProduct = (id) => {
//     axios.delete(`/api/product/${id}`).then(res => {
//         this.setState({
//             inventory: res.data
//         })
//     })
//     .catch(err => console.log('DELETE NOT WORKING', err))
// }













  render() {
    const {inventory} = this.state
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <section>
          <div className="rightSection">
            <Dashboard inventory={inventory}
                        deleteProduct = {this.deleteProduct}/>
          </div> 

          <div className="leftSection">
                        
          <Form createProduct = {this.createProduct}
                deleteProduct = {this.deleteProduct}
                updateProduct = {this.updateProduct}/>
          </div>

        </section>
        
      </div>
    );
  }
}

export default App;
