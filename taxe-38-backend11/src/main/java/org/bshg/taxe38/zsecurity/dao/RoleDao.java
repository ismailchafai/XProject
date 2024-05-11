package org.bshg.taxe38.zsecurity.dao;

import org.bshg.taxe38.zsecurity.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Set;

@Repository
public interface RoleDao extends JpaRepository<Role,Long> {
    Role findByName(String name);
    int deleteByName(String name);
    Set<Role> findAllByUsersUsername(String username);
}
