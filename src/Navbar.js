import React from 'react'

const Navbar = (props) => {
        
    return(
        <div style={styles.nav}>
            <div>
            <img style={styles.iconStyle} src="https://ddo0fzhfvians.cloudfront.net/uploads/icons/png/14353561371543238919-64.png" alt="cartImage" />
    <span style={styles.itemNo}>{props.totalProdCount}</span>
            </div>
        </div>
    );
}

const styles = {
    nav:{
        backgroundColor:'#4267b2',
        height:70
        
    },
    iconStyle:{
        height:50,
        marginRight:20,
        paddingTop:15,
        float:'right'
    },
    itemNo:{
        color:'blue',
        fontSize:20,
        float:'right',
        marginRight:-60,
        paddingTop:1,
        paddingBpttom:1,
        paddingLeft:4,
        paddingRight:4,
        borderRadius:'50%',
        backgroundColor:'white'
    }
}



export default Navbar;