package com.minhtrung.backend.service;


import com.minhtrung.backend.dto.UserDto;
import com.minhtrung.backend.entity.User;
import java.util.List;
public interface UserService {
    public User createUser(User user);
    public User getUserById(Long userId);  
    public List<User> getAllUsers();
    public User updateUser(User user);
    public void deleteUser(Long userId);
    User registerUser(UserDto userDto);
    boolean loginUser(UserDto userDto);
}
