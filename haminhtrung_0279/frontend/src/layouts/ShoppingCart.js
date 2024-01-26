import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // để lấy thông tin địa chỉ URL 
import Content1Cart from "../pages/shopping-cart/Content1Cart";
import FormCart from "../pages/shopping-cart/FormCart";

const ShoppingCart = () => {
  const location = useLocation();
  const cartItemsFromState = location.state && location.state.cartItems ? location.state.cartItems : [];


  // useEffect để cập nhật giỏ hàng từ localStorage khi component được tạo
  useEffect(() => {
    const initialCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(initialCartItems);
  }, []);
  //  Nhận vào ID của sản phẩm cần xóa.
  // Tìm chỉ mục của sản phẩm trong mảng cartItems và loại bỏ nó.
  // Cập nhật state và lưu vào localStorage để giữ giỏ hàng sau các thay đổi.
  const handleRemoveFromCart = (productId) => {
    const itemIndex = cartItems.findIndex(item => item && item.id === productId);
    if (itemIndex !== -1) {
      // Tạo bản sao của mảng cartItems và loại bỏ sản phẩm tại chỉ mục itemIndex
      const updatedCartItems = [...cartItems];
      updatedCartItems.splice(itemIndex, 1);
      // Cập nhật state và lưu vào localStorage sử dụng giá trị mới nhất của state
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      window.location.reload();
    }
  };  
  //   Nhận vào ID của sản phẩm và số lượng mới.
  // Cập nhật số lượng sản phẩm trong giỏ hàng và lưu vào localStorage.
  // Cập nhật state giỏ hàng để gợi nhớ trạng thái mới.

  const handleUpdateQuantity = (productId, newQuantity) => {
    // Cập nhật số lượng sản phẩm trong giỏ hàng
    const updatedCartItems = cartItems.map(item => {
      if (item && item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    // Cập nhật giỏ hàng trong localStorage
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    // Cập nhật state giỏ hàng
    setCartItems(updatedCartItems);
  };

  // State để lưu trữ giỏ hàng
  const [cartItems, setCartItems] = useState(cartItemsFromState);

  const clearCartAfterOrder = () => {
    // Xóa giỏ hàng sau khi đặt đơn hàng
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };
  // hàm khi mua hàng xong sẽ câp nhật lại trang cart : (important)

  return (
    <div className="container">
      <Content1Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onUpdateQuantity={handleUpdateQuantity} clearCartAfterOrder={clearCartAfterOrder} />
      <FormCart clearCartAfterOrder={clearCartAfterOrder} />
      {/* ... */}
    </div>
  );  
};

export default ShoppingCart;
