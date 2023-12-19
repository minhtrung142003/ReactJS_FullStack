package com.minhtrung.backend.controller;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.minhtrung.backend.service.OrderDetailService;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minhtrung.backend.entity.OrderDetail;
// import com.minhtrung.backend.repository.OrderDetailRepository;

@RestController
@AllArgsConstructor
@RequestMapping("api/orderdetails")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")

public class OrderDetailController {
    private OrderDetailService orderdetailService;

    // create orderdetail REST API
    @PostMapping
    public ResponseEntity<OrderDetail> createOrderDetail(@RequestBody OrderDetail orderdetail){
        OrderDetail savedOrderDetail = orderdetailService.createOrderDetail(orderdetail);
        return new ResponseEntity<>(savedOrderDetail, HttpStatus.CREATED);
    }

    // GET CATEGORY BY id REST API
    // http://localhost:8080/api/orderdetails/1
    @GetMapping("{id}")
    public ResponseEntity<OrderDetail> getOrderDetailById(@PathVariable("id") Long orderdetailId) {
        OrderDetail OrderDetail = orderdetailService.getOrderDetailById(orderdetailId);
        return new ResponseEntity<>(OrderDetail, HttpStatus.OK);
    } 

    // get all orderdetail REST API
     // http://localhost:8080/api/orderdetails
    @GetMapping
    public ResponseEntity<List<OrderDetail>> getAllOrderDetail() {
        List<OrderDetail> orderdetails = orderdetailService.getAllOrderDetails();
           HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + orderdetails.size() +"/" + orderdetails.size());

        return ResponseEntity.ok().headers(headers).body(orderdetails);
    }

    // update OrderDetail REST API
    @PutMapping("{id}")
         // http://localhost:8080/api/orderdetails/1
    public ResponseEntity<OrderDetail> updateOrderDetail(@PathVariable("id") Long orderdetailId, @RequestBody OrderDetail OrderDetail) {
        OrderDetail.setId(orderdetailId);
        OrderDetail updateOrderDetail = orderdetailService.updateOrderDetail(OrderDetail);
        return new ResponseEntity<>(updateOrderDetail, HttpStatus.OK);
    }
    // delete orderdetail REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrderDetail(@PathVariable("id") Long orderdetailId) {
        orderdetailService.deleteOrderDetail(orderdetailId);
        return new ResponseEntity<>("OrderDetail successfully deleted!", HttpStatus.OK);
    }
}
