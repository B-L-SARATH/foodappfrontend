import { createSlice } from "@reduxjs/toolkit";

let response = localStorage.getItem("cartitems");
let cartitems = response ? (JSON.parse(response)) : [];
const Cartslice = createSlice({
  name: "cart",
  initialState: cartitems,
  reducers: {
    add(state, action) {
      state.push(action.payload);
      let cartitems = [...state];
      localStorage.setItem("cartitems", JSON.stringify(cartitems));
    },
    remove(state, action) {
      let newstate = [...state];
      newstate.splice(action.payload, 1);
      localStorage.setItem("cartitems", JSON.stringify(newstate));
      return newstate;
    },
    update(state, action) {
      const { index, qty, price } = action.payload;
      const updatedItem = state[index];
      if (updatedItem) {
        updatedItem.qty = parseInt(updatedItem.qty) + parseInt(qty);
        updatedItem.price = parseInt(updatedItem.price) + parseInt(price);
      }
      localStorage.setItem("cartitems", JSON.stringify([...state]));
    },
    clear(state, action) {
      let emp = [];
      localStorage.setItem("cartitems", JSON.stringify(emp));

      return emp;
    },
  },
});

export default Cartslice.reducer;
export const { add, remove, update, clear } = Cartslice.actions;
