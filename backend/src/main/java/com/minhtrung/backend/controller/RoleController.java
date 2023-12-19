package com.minhtrung.backend.controller;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.minhtrung.backend.service.RoleService;

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

import com.minhtrung.backend.entity.Role;
// import com.minhtrung.backend.repository.RoleRepository;

@RestController
@AllArgsConstructor
@RequestMapping("api/roles")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders = "Content-Range")

public class RoleController {
    private RoleService roleService;

    // create role REST API
    @PostMapping
    public ResponseEntity<Role> createRole(@RequestBody Role role){
        Role savedRole = roleService.createRole(role);
        return new ResponseEntity<>(savedRole, HttpStatus.CREATED);
    }

    // GET CATEGORY BY id REST API
    // http://localhost:8080/api/roles/1
    @GetMapping("{id}")
    public ResponseEntity<Role> getRoleById(@PathVariable("id") Long roleId) {
        Role Role = roleService.getRoleById(roleId);
        return new ResponseEntity<>(Role, HttpStatus.OK);
    } 

    // get all role REST API
     // http://localhost:8080/api/roles
    @GetMapping
    public ResponseEntity<List<Role>> getAllRole() {
        List<Role> roles = roleService.getAllRoles();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "items 0-" + roles.size() +"/" + roles.size());

        return ResponseEntity.ok().headers(headers).body(roles);
    }

    // update Role REST API
    @PutMapping("{id}")
         // http://localhost:8080/api/roles/1
    public ResponseEntity<Role> updateRole(@PathVariable("id") Long roleId, @RequestBody Role Role) {
        Role.setId(roleId);
        Role updateRole = roleService.updateRole(Role);
        return new ResponseEntity<>(updateRole, HttpStatus.OK);
    }
    // delete role REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteRole(@PathVariable("id") Long roleId) {
        roleService.deleteRole(roleId);
        return new ResponseEntity<>("Role successfully deleted!", HttpStatus.OK);
    }
}
