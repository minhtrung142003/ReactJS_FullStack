package com.minhtrung.backend.controller;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.minhtrung.backend.service.CategoryService;

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

import com.minhtrung.backend.entity.Category;
import org.springframework.http.HttpHeaders;
// import com.minhtrung.backend.repository.CategoryRepository;

@RestController
@AllArgsConstructor
@RequestMapping("api/categories")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")
public class CategoryController {
    private CategoryService categoryService;

    // create category REST API
    @PostMapping
    public ResponseEntity<Category> createCategory(@RequestBody Category category){
        Category savedCategory = categoryService.createCategory(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }

    // GET CATEGORY BY id REST API
    // http://localhost:8080/api/Categories/1
    @GetMapping("{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long categoryId) {
        Category Category = categoryService.getCategoryById(categoryId);
        return new ResponseEntity<>(Category, HttpStatus.OK);
    } 

    // get all category REST API
     // http://localhost:8080/api/Categories
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> Categories = categoryService.getAllCategories();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + Categories.size() +"/" + Categories.size());

        return ResponseEntity.ok().headers(headers).body(Categories);
    }

    // update Category REST API
    @PutMapping("{id}")
         // http://localhost:8080/api/Categories/1
    public ResponseEntity<Category> updateCategory(@PathVariable("id") Long categoryId, @RequestBody Category Category) {
        Category.setId(categoryId);
        Category updateCategory = categoryService.updateCategory(Category);
        return new ResponseEntity<>(updateCategory, HttpStatus.OK);
    }
    // delete category REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long categoryId) {
        categoryService.deleteCategory(categoryId);
        return new ResponseEntity<>("Category successfully deleted!", HttpStatus.OK);
    }
}
