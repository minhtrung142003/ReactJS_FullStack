import React from "react";
import SectionContent1 from "../pages/detailproduct/SectionContent1";
import SectionContent2 from "../pages/detailproduct/SectionContent2";
import SectionSubscribe from "../pages/detailproduct/SectionSubscribe";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function DetailProduct() { 
    const navigate = useNavigate();
   const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || []; 
   const [cartItems, setCartItems] = useState(initialCartItems); // cartItems đại diện cho ds sp trong giỏ hàng

 //  localStorage là một bộ nhớ cục bộ trong trình duyệt được sử dụng để lưu trữ dữ liệu.

   useEffect(() => { // lưu trữ  giỏ hàng vào localstorage mỗi khi cartItem change
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
   }, [cartItems]);

   return (
      <div className="container">
    
      <SectionContent1  setCartItems={setCartItems} cartItems={cartItems} />
          
            <SectionContent2/>
            <SectionSubscribe/>
      </div>
   );
}
export default DetailProduct;