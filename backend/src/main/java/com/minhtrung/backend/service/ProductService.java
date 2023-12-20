package com.minhtrung.backend.service;


import com.minhtrung.backend.entity.Product;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
// import org.springframework.data.jpa.repository.Query;
public interface ProductService {
    public Product createProduct(Product product);
    public Product getProductById(Long productId);  
    public Page<Product> getAllProducts(Pageable pageable);
    public Product updateProduct(Product product);
    public void deleteProduct(Long productId);
    public List<Product> getProductsByCondition(String title, Long category);
    public List<Product> getLatestProductsInCategory(Long categoryId,  int pageSize);
    public Page<Product> getProductsByCategoryId(Long categoryId, Pageable pageable);
    

//     @Query("SELECT p FROM Product p WHERE p.category.id = :categoryId ORDER BY p.created_at DESC")
// List<Product> findLatestProductsInCategory(Long categoryId, Pageable pageable);
}
