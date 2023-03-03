import { combineReducers} from "redux";
import wishListReducer from "./wishListReducer";
import accessoriesReducer from "./accessoriesReducer";
import cartReducer from "./cartReducer";
import mapReducer from './mapReducer';
import napkingReducer from "./napkingReducer";

const allReducers = combineReducers({
    cartReducer : cartReducer,
    mapReducer : mapReducer,
    napkingReducer : napkingReducer,
    accessoriesReducer: accessoriesReducer,
    wishListReducer : wishListReducer
    
});

export default allReducers;