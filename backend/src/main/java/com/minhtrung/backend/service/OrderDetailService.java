package com.minhtrung.backend.service;


import com.minhtrung.backend.entity.OrderDetail;
import java.util.List;
public interface OrderDetailService {
    public OrderDetail createOrderDetail(OrderDetail orderDetail);
    public OrderDetail getOrderDetailById(Long orderDetailId);  
    public List<OrderDetail> getAllOrderDetails();
    public OrderDetail updateOrderDetail(OrderDetail orderDetail);
    public void deleteOrderDetail(Long orderDetailId);
}
