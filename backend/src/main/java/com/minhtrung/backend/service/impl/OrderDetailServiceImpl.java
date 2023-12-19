package com.minhtrung.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.minhtrung.backend.repository.OrderDetailRepository;
import com.minhtrung.backend.entity.OrderDetail;
import com.minhtrung.backend.service.OrderDetailService;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrderDetailServiceImpl implements OrderDetailService{

    private OrderDetailRepository orderdetailRepository;
    @Override
    public OrderDetail createOrderDetail(OrderDetail orderdetail) {
        return orderdetailRepository.save(orderdetail);
    }

    @Override
    public OrderDetail getOrderDetailById(Long orderdetailId){
        Optional<OrderDetail> optionalOrderDetail = orderdetailRepository.findById(orderdetailId);
        return optionalOrderDetail.get();
    }

    @Override
    public List<OrderDetail> getAllOrderDetails() {
        return orderdetailRepository.findAll();
    }

    @Override
    public OrderDetail updateOrderDetail(OrderDetail orderdetail){
        OrderDetail existingOrderDetail = orderdetailRepository.findById(orderdetail.getId()).get();
        existingOrderDetail.setPrice(orderdetail.getPrice());
        existingOrderDetail.setNum(orderdetail.getNum());
        existingOrderDetail.setTotal_money(orderdetail.getTotal_money());
        OrderDetail updateOrderDetail = orderdetailRepository.save(existingOrderDetail);
        return updateOrderDetail;
    }

    @Override
    public void deleteOrderDetail(Long orderdetailId){
        orderdetailRepository.deleteById(orderdetailId);
    }

}