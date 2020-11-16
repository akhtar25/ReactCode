import React from 'react'
import CartItem from './CartItem'

class Cart extends React.Component{
    constructor() {
        super();
        this.state = {
            products:[
                {
                    title: 'Redmi',
                    price:'9,000',
                    quantity:1,
                    id:1,
                    img:'https://alllearndatabucketv2.s3.amazonaws.com/courseVideo/paul-blenkhorn-sensoryarthouse-6_e0KqpKkYw-unsplash.jpg'
                },
                {
                    title: 'Laptop',
                    price:'78,000',
                    quantity:2,
                    id:2,
                    img:'https://alllearndatabucketv2.s3.amazonaws.com/courseVideo/paul-blenkhorn-sensoryarthouse-6_e0KqpKkYw-unsplash.jpg'
                },
                {
                    title: 'Play Station',
                    price:'40,000',
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
    render(){
        return(
            <div className="cart">
                {this.state.products.map((product) => {
                    return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    OnIncreaseQty={this.handleIncreaseQty}
                    OnDecreaseQty={this.handleDecreaseQty}
                    OnDeleteProduct={this.deleteProduct}
                    />
                    )
                })}
            </div>
        );
    }
}

export default Cart;