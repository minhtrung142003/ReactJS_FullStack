
import axios from "axios";
import React, { useState } from "react";
import styles from './OrderForm.module.css';

const FormCart = ({ totalPrice, clearCartAfterOrder }) => {
  const [orderData, setOrderData] = useState({
    address: "",
    email: "",
    fullname: "",
    note: "",
    order_date: new Date().toISOString(),
    phone_number: "",
    status: 0,
    total_money: totalPrice,
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData({
      ...orderData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/api/orderss", orderData)
      .then(response => {
        console.log(response.data);
        alert("Order placed successfully!");

        clearCartAfterOrder();

      })
      .catch(error => {
        console.error(error);
        alert("Failed to place order. Please try again.");
      });
  };

  return (
    <div className={styles['order-form-container']}>
      <h2 className={styles['order-form-title']}>Đơn đặt hàng</h2>
      <form className={styles['order-form']} onSubmit={handleSubmit}>
        <label className={styles['form-label']}>Họ và tên:</label>
        <input className={styles['form-input']} type="text" name="fullname" value={orderData.fullname} onChange={handleInputChange} required />

        <label className={styles['form-label']}>Email:</label>
        <input className={styles['form-input']} type="email" name="email" value={orderData.email} onChange={handleInputChange} required />

        <label className={styles['form-label']}>Địa chỉ:</label>
        <input className={styles['form-input']} type="text" name="address" value={orderData.address} onChange={handleInputChange} required />

        <label className={styles['form-label']}>Số điện thoại:</label>
        <input className={styles['form-input']} type="text" name="phone_number" value={orderData.phone_number} onChange={handleInputChange} required />

        <label className={styles['form-label']}>Ghi chú:</label>
        <textarea className={styles['form-textarea']} name="note" value={orderData.note} onChange={handleInputChange} />

        <label className={styles['form-label']}>Ngày đặt hàng:</label>
        <input className={styles['form-input']} type="text" name="order_date" value={orderData.order_date} onChange={handleInputChange} readOnly />

        <label className={styles['form-label']}>Tổng số tiền:</label>
        <input className={styles['form-input']} type="number" name="total_money" value={totalPrice} readOnly />

        <label className={styles['form-label']}>Trạng thái:</label>
        <select className={styles['form-select']} name="status" value={orderData.status} onChange={handleInputChange} required>
          <option value={0}>
            Chưa giải quyết </option>
          <option value={1}>Xử lý</option>
          <option value={2}>Đã vận chuyển</option>
          {/* Thêm các tình trạng khác nếu cần */}
        </select>

        <button className={styles['form-button']} type="submit">Đặt Hàng</button>
      </form>
    </div>
  );
};

export default FormCart;
