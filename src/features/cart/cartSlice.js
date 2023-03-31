import {createSlice} from '@reduxjs/toolkit';
import cartItems
 from '../../cartItems';
const initialState = {
    cartItems: cartItems,
    amount: 0,
    total: 0,
    isloading: false,
};


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearBag: (state) => {
            state.cartItems = []; 
            state.amount = 0;
            state.total = 0;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItems.find((item) => item.id === itemId);
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
            
            
            state.total = (state.total - (item.price * item.amount));
            state.amount = state.amount - item.amount;
            

        },
        increase: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItems.find((item) => item.id === itemId);
            item.amount = item.amount + 1;
            state.amount = state.amount + 1;
            state.total = state.total + item.price;
        },
        decrease: (state, action) => {
            const itemId = action.payload;
            const item = state.cartItems.find((item) => item.id === itemId);
            if(item.amount > 0 && state.total - item.price >= 0){
                item.amount = item.amount - 1;
                state.amount = state.amount - 1;
                state.total -= item.price;
            }else{
                alert('You cannot decrease the amount');
            }
            
        },

    }
});

export const {clearBag, removeItem, increase,decrease} = cartSlice.actions;
export default cartSlice.reducer;