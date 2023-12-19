package com.minhtrung.backend.service;


import com.minhtrung.backend.entity.Role;
import java.util.List;
public interface RoleService {
    public Role createRole(Role Role);
    public Role getRoleById(Long RoleId);  
    public List<Role> getAllRoles();
    public Role updateRole(Role Role);
    public void deleteRole(Long RoleId);
}
