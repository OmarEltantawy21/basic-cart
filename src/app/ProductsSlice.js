import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState={
    product:[]
};



export const fetchProducts=createAsyncThunk("productSlice/fetchProducts",async()=>{
    const res=await fetch("https://fakestoreapi.com/products");
    const data=res.json();
    return data;
})

const ProductsSlice=createSlice({
    
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            return action.payload;
        });
    },
});

// export const {} =ProductsSlice.actions;
export default ProductsSlice.reducer;
