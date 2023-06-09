/*import { createSlice } from '@reduxjs/toolkit'
const cart = [];

const handleCart = createSlice ( {
    name:'handle',
    cart,
    reducers:{
         ADDITEM:(state=cart,action)=>{
            const product=action.payload;
            //Check if Product is Already Exist
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                //Increase the Quantity
                return state.map((x) =>
                    x.id === product.id ?
                        { ...x, qty: x.qty + 1 } : x
                )
            }
            else {
                const product = action.payload;
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
        },
         DELITEM :(state=cart,action)=>{
            const product=action.payload;
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id);
            }
            else {
                return state.map((x) =>
                    x.id === product.id ?
                        { ...x, qty: x.qty - 1 }
                        : x
                )
            }
        },
        
    },
})
export const {ADDITEM , DELITEM}=handleCart.actions
export default handleCart.reducer*/