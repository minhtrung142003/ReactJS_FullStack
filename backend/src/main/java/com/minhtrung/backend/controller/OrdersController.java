package com.minhtrung.backend.controller;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.minhtrung.backend.service.OrdersService;

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

import com.minhtrung.backend.entity.Orders;
// import com.minhtrung.backend.repository.OrdersRepository;

@RestController
@AllArgsConstructor
@RequestMapping("api/orderss")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")

public class OrdersController {
    private OrdersService ordersService;

    // create orders REST API
    @PostMapping
    public ResponseEntity<Orders> createOrders(@RequestBody Orders orders){
        Orders savedOrders = ordersService.createOrders(orders);
        return new ResponseEntity<>(savedOrders, HttpStatus.CREATED);
    }

    // GET CATEGORY BY id REST API
    // http://localhost:8080/api/orderss/1
    @GetMapping("{id}")
    public ResponseEntity<Orders> getOrdersById(@PathVariable("id") Long ordersId) {
        Orders Orders = ordersService.getOrdersById(ordersId);
        return new ResponseEntity<>(Orders, HttpStatus.OK);
    } 

    // get all orders REST API
     // http://localhost:8080/api/orderss
    @GetMapping
    public ResponseEntity<List<Orders>> getAllOrders() {
               List<Orders> Orders = ordersService.getAllOrderss();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + Orders.size() +"/" + Orders.size());

        return ResponseEntity.ok().headers(headers).body(Orders);
    }
    

    // update Orders REST API
    @PutMapping("{id}")
         // http://localhost:8080/api/orderss/1
    public ResponseEntity<Orders> updateOrders(@PathVariable("id") Long ordersId, @RequestBody Orders Orders) {
        Orders.setId(ordersId);
        Orders updateOrders = ordersService.updateOrders(Orders);
        return new ResponseEntity<>(updateOrders, HttpStatus.OK);
    }
    // delete orders REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteOrders(@PathVariable("id") Long ordersId) {
        ordersService.deleteOrders(ordersId);
        return new ResponseEntity<>("Orders successfully deleted!", HttpStatus.OK);
    }
}
