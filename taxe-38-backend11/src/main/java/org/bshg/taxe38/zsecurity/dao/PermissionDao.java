package org.bshg.taxe38.zsecurity.dao;

import org.bshg.taxe38.zsecurity.entity.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface PermissionDao extends JpaRepository<Permission, Long> {
    Permission findByName(String name);
}