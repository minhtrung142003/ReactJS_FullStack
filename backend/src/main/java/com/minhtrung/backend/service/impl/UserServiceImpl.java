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

     @Override
    public User registerUser(UserDto userDto) {
        User newUser = new User(userDto.getFullname(), userDto.getEmail(), userDto.getPassword());
        return userRepository.save(newUser);
    }

        @Override
        public boolean loginUser(UserDto userDto) {
            User userInDb = userRepository.findByFullname(userDto.getFullname());
            return userInDb != null && userInDb.getPassword().equals(userDto.getPassword());
        }

}