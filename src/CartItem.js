import React from 'react'

const CartItem = (props) =>{
    

       
        return(
            <div className="cartItem">
                <div className="cartLeft">
                    <img 
                    style={styles.images} 
                    src={props.product.img}
                    alt='productmage'
                    ></img>
                </div>
                <div className="cartRight">
                    <div style={{fontSize:25}}>{props.product.title}</div>
                    <div style={{color:'#777'}}>Rs. {props.product.price}</div>
                    <div style={{color:'#777'}}>Qty: {props.product.quantity}</div>
                    <div className="actions">
                        <img 
                            alt="increase quantity" 
                            className="actionIcons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992651.svg"
                            // onClick={this.increaseQty.bind(this)}
                            onClick={() => props.OnIncreaseQty(props.product)}
                            
                        /> 
                        <img 
                            alt="decrease quantity" 
                            className="actionIcons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/992/992683.svg"
                            onClick={() => props.OnDecreaseQty(props.product)}
                        />
                        <img 
                            alt="delete product" 
                            className="actionIcons" 
                            src="https://www.flaticon.com/svg/static/icons/svg/3096/3096687.svg"
                            onClick={() => props.OnDeleteProduct(props.product)}
                        />
                    </div>
                </div> 
            </div>
        );
    }
const styles = {
    images : {
        height:110,
        width:110,
        borderRadius:4
    }
} 

export default CartItem;