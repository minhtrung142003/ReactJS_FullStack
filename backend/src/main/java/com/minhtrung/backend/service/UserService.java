package com.minhtrung.backend.service;


import com.minhtrung.backend.dto.UserDto;
import com.minhtrung.backend.entity.User;
import java.util.List;
public interface UserService {
    public User createUser(User User);
    public User getUserById(Long UserId);  
    public List<User> getAllUsers();
    public User updateUser(User User);
    public void deleteUser(Long UserId);

      User registerUser(UserDto userDto);
    boolean loginUser(UserDto userDto);
}
