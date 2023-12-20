package com.minhtrung.backend.service;


import com.minhtrung.backend.entity.Orders;
import java.util.List;
public interface OrdersService {
    public Orders createOrders(Orders orders);
    public Orders getOrdersById(Long ordersId);  
    public List<Orders> getAllOrderss();
    public Orders updateOrders(Orders orders);
    public void deleteOrders(Long ordersId);
}
