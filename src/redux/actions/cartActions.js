export const addToCart = (item)=>{
    return{
        type:"ADDTOCART",
        playload: item
    };
};

export const deleteFromCart  = (item)=>{
    return{
        type:"DELETEFROMCART",
        playload: item
    };
};

export const  addQty = (item)=>{
    return{
        type:"ADDQTY",
        playload: item
    };
};

export const  decreaseQty = (item)=>{
    return{
        type:"DECREASEQTY",
        playload: item
    };
};