import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:localStorage.getItem("cart")?
    JSON.parse(localStorage.getItem("cart"))
    :[],
};
const CartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const findProduct=state.cart.find((product)=>product.id === action.payload.id);
            if(findProduct){
                findProduct.quantity += 1;
            }else{
                const productClone={...action.payload,quantity:1}
                state.cart.push(productClone);
            }
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        deleteFromCart:(state,action)=>{
            state.cart=state.cart.filter((p)=>p.id !== action.payload);
            localStorage.setItem("cart",JSON.stringify(state.cart));
        },
        clearCart:(state)=>{
            state.cart=[];
        }
    }
});

export const {addToCart,deleteFromCart,clearCart}=CartSlice.actions;
export default CartSlice.reducer;
