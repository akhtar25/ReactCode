import React from 'react'

class CartItem extends React.Component{
    render(){
        return(
            <div className="cartItem">
                <div className="cartLeft">
                    <img style={styles.images} src="https://alllearndatabucketv2.s3.amazonaws.com/courseVideo/paul-blenkhorn-sensoryarthouse-6_e0KqpKkYw-unsplash.jpg"></img>
                </div>
                <div className="cartRight">
                    <div style={{fontSize:25}}>Phone</div>
                    <div style={{color:'#777'}}>Rs. 999</div>
                    <div style={{color:'#777'}}>Qty: 1</div>
                    <div className="actions">

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