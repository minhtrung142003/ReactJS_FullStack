package com.minhtrung.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.minhtrung.backend.repository.UserRepository;
import com.minhtrung.backend.entity.User;
import com.minhtrung.backend.service.UserService;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;
    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long userId){
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser.get();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(User user){
        User existingUser = userRepository.findById(user.getId()).get();
        existingUser.setFullname(user.getFullname());
        existingUser.setEmail(user.getEmail());
        existingUser.setPhone_number(user.getPhone_number());
        existingUser.setAddress(user.getAddress());
        existingUser.setPassword(user.getPassword());
        existingUser.setCreated_at(user.getCreated_at());
        existingUser.setUpdated_at(user.getUpdated_at());
        existingUser.setDeleted(user.getDeleted());
        existingUser.setTokens(user.getTokens());
       existingUser.setRole(user.getRole());

        User updateUser = userRepository.save(existingUser);
        return updateUser;
    }

    @Override
    public void deleteUser(Long userId){
        userRepository.deleteById(userId);
    }

    // đăng ký
    public void registerUser(User user) {
        if (userRepository.existsById(user.getId())) {
            throw new RuntimeException("Người dùng đã tồn tại"); // Ném ngoại lệ nếu người dùng đã tồn tại
        }
        
        if (user.getFullname() == null || user.getFullname().isEmpty()) {
            throw new RuntimeException("Tên đăng nhập không hợp lệ"); // Ném ngoại lệ nếu tên đăng nhập không hợp lệ
        }
        
        // Thỏa mãn các ràng buộc và điều kiện, tiến hành đăng ký
        userRepository.save(user);
    }

}