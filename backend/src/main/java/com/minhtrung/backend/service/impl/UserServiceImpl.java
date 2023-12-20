package com.minhtrung.backend.service.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import com.minhtrung.backend.repository.UserRepository;
import com.minhtrung.backend.dto.UserDto;
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
        existingUser.setUsername(user.getUsername());
        existingUser.setPassword(user.getPassword());
        existingUser.setToken(user.getToken());
        existingUser.setRole(user.getRole());
       existingUser.setOrders(user.getOrders());
      
        User updateUser = userRepository.save(existingUser);
        return updateUser;
    }

    @Override
    public void deleteUser(Long userId){
        userRepository.deleteById(userId);
    }

    // đăng ký
   @Override
    public User registerUser(UserDto userDto) {
        User newUser = new User(userDto.getFullname(), userDto.getUsername(), userDto.getPassword());
        return userRepository.save(newUser);
    }

    @Override
    public boolean loginUser(UserDto userDto) {
        User userInDb = userRepository.findByUsername(userDto.getUsername());
        return userInDb != null && userInDb.getPassword().equals(userDto.getPassword());
    }

}