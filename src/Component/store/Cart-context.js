import React from "react";

const Context=React.createContext({
    item:[],
    totalAmount:0,
    addCart:(item)=>{},
    removeCart:(id)=>{}
})
export default Context;