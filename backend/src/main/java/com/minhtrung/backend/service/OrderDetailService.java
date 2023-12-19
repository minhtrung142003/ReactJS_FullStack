package com.minhtrung.backend.service;


import com.minhtrung.backend.entity.OrderDetail;
import java.util.List;
public interface OrderDetailService {
    public OrderDetail createOrderDetail(OrderDetail OrderDetail);
    public OrderDetail getOrderDetailById(Long OrderDetailId);  
    public List<OrderDetail> getAllOrderDetails();
    public OrderDetail updateOrderDetail(OrderDetail OrderDetail);
    public void deleteOrderDetail(Long OrderDetailId);
}
