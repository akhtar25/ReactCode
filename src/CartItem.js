import React from 'react'

class CartItem extends React.Component{
    
    increaseQty() {
        // console.log('this.state',this.state);
        // this.state.quantity = this.state.quantity + 1; 
        // set state form 1
        // this.setState({
        //     quantity: this.state.quantity + 1
        // });

        // set state form 2 if previous state required use this
        this.setState((prevState) => {
            return{
                quantity: prevState.quantity + 1
            }
        });
    }

    decreaseQty(){
        const {quantity} = this.state;
        if(quantity===0){
            return;
        }
        this.setState({
            quantity:this.state.quantity - 1
            
        });
    }

    render(){
        return(
            <div className="cartItem">
                <div className="cartLeft">
                    <img 
                    style={styles.images} 
                    src={this.props.product.img}
                    alt='product image'
                    ></img>
                </div>
                <div className="cartRight">
                    <div style={{fontSize:25}}>{this.props.product.title}</div>
                    <div style={{color:'#777'}}>Rs. {this.props.product.price}</div>
                    <div style={{color:'#777'}}>Qty: {this.props.product.quantity}</div>
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
                            onClick={this.decreaseQty.bind(this)}
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