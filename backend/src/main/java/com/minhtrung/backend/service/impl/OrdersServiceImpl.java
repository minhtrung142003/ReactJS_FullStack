package com.minhtrung.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.minhtrung.backend.repository.OrdersRepository;
import com.minhtrung.backend.entity.Orders;
import com.minhtrung.backend.service.OrdersService;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrdersServiceImpl implements OrdersService{

    private OrdersRepository ordersRepository;
    @Override
    public Orders createOrders(Orders orders) {
        return ordersRepository.save(orders);
    }

    @Override
    public Orders getOrdersById(Long ordersId){
        Optional<Orders> optionalOrders = ordersRepository.findById(ordersId);
        return optionalOrders.get();
    }

    @Override
    public List<Orders> getAllOrderss() {
        return ordersRepository.findAll();
    }

    @Override
    public Orders updateOrders(Orders orders){
        Orders existingOrders = ordersRepository.findById(orders.getId()).get();
        existingOrders.setFullname(orders.getFullname());
        existingOrders.setEmail(orders.getEmail());
        existingOrders.setPhone_number(orders.getPhone_number());
        existingOrders.setAddress(orders.getAddress());
        existingOrders.setNote(orders.getNote());
         existingOrders.setOrder_date(orders.getOrder_date());
        existingOrders.setStatus(orders.getStatus());
        existingOrders.setTotal_money(orders.getTotal_money());
        Orders updateOrders = ordersRepository.save(existingOrders);
        return updateOrders;
    }

    @Override
    public void deleteOrders(Long ordersId){
        ordersRepository.deleteById(ordersId);
    }

}