import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
class App extends React.Component { 
  constructor() {
    super();
    this.state = {
        products:[
            {
                title: 'Redmi',
                price:'9000',
                quantity:1,
                id:1,
                img:'https://alllearndatabucketv2.s3.amazonaws.com/courseVideo/paul-blenkhorn-sensoryarthouse-6_e0KqpKkYw-unsplash.jpg'
            },
            {
                title: 'Laptop',
                price:'78000',
                quantity:2,
                id:2,
                img:'https://alllearndatabucketv2.s3.amazonaws.com/courseVideo/paul-blenkhorn-sensoryarthouse-6_e0KqpKkYw-unsplash.jpg'
            },
            {
                title: 'Play Station',
                price:'40000',
                quantity:1,
                id:3,
                img:'https://alllearndatabucketv2.s3.amazonaws.com/courseVideo/paul-blenkhorn-sensoryarthouse-6_e0KqpKkYw-unsplash.jpg'
            }

        ]
    }
}

handleIncreaseQty = (product) => {
    console.log('Increase qty of :'+product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].quantity +=1;

    this.setState({
        products: products
    });
}

handleDecreaseQty = (product) => {
    console.log('decrease quantity of product',product);
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].quantity>0){
    products[index].quantity -= 1;
    }
    this.setState({
        products: products
    });
} 
deleteProduct = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    products.splice(index,1);
    this.setState({
        products:products
    });
}

getProductCount = (product) => {
  const {products} = this.state;
  var count = 0;
  products.forEach((product) =>{
    count += product.quantity;
  });
  return count;
}

totalPrice = (product) => {
  const {products} = this.state;
  let totalPrice = 0;
  products.map((product) => {
    
    totalPrice =  totalPrice + parseFloat(product.price) * parseFloat(product.quantity);
    
  });
  return totalPrice;
}
render(){
  const {products} = this.state;
  // alert('inside App.js:'+products);
  return (
    <div className="App">
      <Navbar totalProdCount={this.getProductCount()}/>
      <Cart 
      products = {products}
      OnIncreaseQty={this.handleIncreaseQty}
      OnDecreaseQty={this.handleDecreaseQty}
      OnDeleteProduct={this.deleteProduct}
      />
      <div style={{fontSize:20, padding:10}}>Total:{this.totalPrice()}</div>
    </div>
  );
}
}

export default App;
