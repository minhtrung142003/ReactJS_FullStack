package com.minhtrung.backend.controller;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpHeaders;
import org.springframework.data.domain.Pageable;
import com.minhtrung.backend.entity.Product;
import com.minhtrung.backend.service.ProductService;
import java.util.List;

// import com.minhtrung.backend.repository.ProductRepository;

@RestController
@AllArgsConstructor
@RequestMapping("api/products")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")

public class ProductController {
    private ProductService productService;

    // create product REST API
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product){
        Product savedProduct = productService.createProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    // GET product BY id REST API
    // http://localhost:8080/api/Categories/1
    @GetMapping("{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long productId) {
        Product Product = productService.getProductById(productId);
        return new ResponseEntity<>(Product, HttpStatus.OK);
    } 

    // get all product REST API
     // http://localhost:8080/api/product
     @GetMapping
     public ResponseEntity<List<Product>>getAllProducts(
         @RequestParam(defaultValue = "0") Integer page,
         @RequestParam(defaultValue = "10") Integer size,
         @RequestParam(required = false) Long categoryId
     ){
        Pageable pageable = PageRequest.of(page, size);
        Page<Product> products;
        if (categoryId != null) {
        products = productService.getProductsByCategoryId(categoryId, pageable);

        } else {

        products = productService.getAllProducts(pageable);

        }
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items " + pageable.getOffset() + "-" + (pageable.getOffset() + products.getSize()) +
        "/" + products.getTotalElements());
        return ResponseEntity.ok().headers(headers).body(products.getContent());
    }

    // update Product REST API
    @PutMapping("{id}")
         // http://localhost:8080/api/Categories/1
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long productId, @RequestBody Product Product) {
        Product.setId(productId);
        Product updatedProduct = productService.updateProduct(Product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }
    // delete product REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>("Product successfully deleted!", HttpStatus.OK);
    }

    // product new
    @GetMapping("/getlatest")
        public ResponseEntity<List<Product>> getProductsNew(
        @RequestParam(name = "categoryid", required = false) Long category,
        @RequestParam(name = "pagesize", required = false, defaultValue = "5") int pagesize
    ) {
    List<Product> products = productService.getLatestProductsInCategory(category, pagesize);
    return ResponseEntity.ok(products);
    }
}
