package com.minhtrung.backend.service.impl;

import com.minhtrung.backend.service.CategoryService;

import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.minhtrung.backend.entity.Category;
import com.minhtrung.backend.repository.CategoryRepository;
import java.util.Optional;

@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private CategoryRepository categoryRepository;

    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }
    @Override
    public Category getCategoryById(Long categoryId) {
        Optional<Category> optionalCatgory = categoryRepository.findById(categoryId);
        return optionalCatgory.get();
    }
    @Override
    public List<Category> getAllCategories(){
        return categoryRepository.findAll();
    }
    @Override
    public Category updateCategory(Category category){
        Category existingCategory = categoryRepository.findById(category.getId()).get();
        existingCategory.setName(category.getName());
         existingCategory.setIsHome(category.getIsHome());
        Category updatedCategory = categoryRepository.save(existingCategory);
        return updatedCategory;
    }

    @Override
    public void deleteCategory(Long categoryId){
        categoryRepository.deleteById(categoryId);
    }
}
