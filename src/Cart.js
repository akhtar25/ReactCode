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
    render(){
        return(
            <div className="cart">
                {this.state.products.map((product) => {
                    return (
                    <CartItem product={product} key={product.id}/>
                    )
                })}
            </div>
        );
    }
}

export default Cart;