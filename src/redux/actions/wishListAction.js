export const addToWishList = (item)=>{
    return{
        type:"ADDTOWISHLIST",
        playload: item
    };
};

export const deleteFromWishList  = (item)=>{
    return{
        type:"DELETEFROMWISHLIST",
        playload: item
    };
};