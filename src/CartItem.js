import React from 'react'

class CartItem extends React.Component{
    constructor() {
        super();
        this.state = {
            title: 'Redmi',
            price:'100,000',
            quantity:1,
            img:'https://alllearndatabucketv2.s3.amazonaws.com/courseVideo/paul-blenkhorn-sensoryarthouse-6_e0KqpKkYw-unsplash.jpg'
        }
    }
    increaseQty() {
        console.log('this.state',this.state.quantity);
        this.state.quantity += this.state.quantity;
    }
    render(){
        return(
            <div className="cartItem">
                <div className="cartLeft">
                    <img 
                    style={styles.images} 
                    src={this.state.img}
                    ></img>
                </div>
                <div className="cartRight">
                    <div style={{fontSize:25}}>{this.state.title}</div>
                    <div style={{color:'#777'}}>Rs. {this.state.price}</div>
                    <div style={{color:'#777'}}>Qty: {this.state.quantity}</div>
                    <div className="actions">
                        <img 
                            alt="increase quantity" 
                            className="actionIcons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                            onClick={this.increaseQty.bind(this)}
                        /> 
                        <img 
                            alt="decrease quantity" 
                            className="actionIcons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"
                        />
                        <img 
                            alt="delete product" 
                            className="actionIcons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/3096/3096687.svg"
                        />
                    </div>
                </div> 
            </div>
        );
    }
}

const styles = {
    images : {
        height:110,
        width:110,
        borderRadius:4
    }
} 

export default CartItem;