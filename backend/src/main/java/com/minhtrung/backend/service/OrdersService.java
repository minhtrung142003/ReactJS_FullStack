package com.minhtrung.backend.service;


import com.minhtrung.backend.entity.Orders;
import java.util.List;
public interface OrdersService {
    public Orders createOrders(Orders Orders);
    public Orders getOrdersById(Long OrdersId);  
    public List<Orders> getAllOrderss();
    public Orders updateOrders(Orders Orders);
    public void deleteOrders(Long OrdersId);
}
