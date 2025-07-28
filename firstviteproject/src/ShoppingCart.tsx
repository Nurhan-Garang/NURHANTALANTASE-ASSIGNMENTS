
import React, {useState}from 'react';

const ShoppingCart = () => {

    const[cartCount,setCartCount]=useState<number>(0);

    const addItem=()=>{
        setCartCount(cartCount+1);
    };

    const removeItem=()=>{
        if(cartCount>0){
            setCartCount(cartCount-1);
        }
    };

    return(
        <div style={styles.container}>
            <h2>Shopping Cart</h2>
            <p>You have<strong>{cartCount}</strong>items in cart</p>
            <button style={styles.button}onClick={addItem}>Add Item</button>
            <button
            style={{...styles.button,background:cartCount===0? '#ccc':'#e74c3c'}}
            onClick={removeItem}
            disabled={cartCount === 0}
            >
                Remove Item
            </button>
        </div>
    );
};

const styles ={
    container:{
        padding:'20px',
        textAlign:'center'as const,
        fontFamily:'Arial',
        backgroundColor:'#f4f4f4',
        maxwidth:'400px',
        margin:'auto',
        borderRadius:'10px',
        boxshadow:'0 0 10px rgba(0,0,0.1)'
    },
    button:{
        padding:'10px 20px',
        margin:'10px',
        fontSize:'16px',
        border:'none',
        borderRadius:'15px',
        cusor:'pointer'as const,
        backgroundColor:'#2ecc71',
        color:'white',
    }
};
export default ShoppingCart;