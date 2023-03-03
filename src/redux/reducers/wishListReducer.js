const inititalState = [];


const wishListReducer = (state = inititalState, action) => {

    
    switch (action.type) {
        case "ADDTOWISHLIST": {
            if (state.find(e => e == action.playload)){
                state.find(e => e == action.playload).quantity+=1;
                return[...state];
            }
            action.playload.stock = action.playload.qty;
            action.playload.quantity = 1;
            return [...state, action.playload]
        }
        case "DELETEFROMWISHLIST": {
            return [...state.filter(e => e != action.playload)]
        }
        // case "ADDQTY": {
        //     if(state[action.playload].quantity < state[action.playload].stock){
        //         state[action.playload].quantity+=1;
        //     }
            
        //     return[...state]
        // }
       
        // case "DECREASEQTY": {
        //     if(state[action.playload].quantity>1){
        //         state[action.playload].quantity-=1;
        //     }
           
        //     return[...state]
        // }
    }
    return state;
}
export default wishListReducer;