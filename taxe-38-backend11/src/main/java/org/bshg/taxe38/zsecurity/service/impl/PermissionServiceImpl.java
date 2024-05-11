package org.bshg.taxe38.zsecurity.service.impl;

import org.bshg.taxe38.zsecurity.entity.Permission;
import org.bshg.taxe38.zsecurity.dao.PermissionDao;
import org.bshg.taxe38.zsecurity.service.facade.PermissionService;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class PermissionServiceImpl implements PermissionService {
    private final PermissionDao permissionDao;

    public PermissionServiceImpl(PermissionDao permissionDao) {
        this.permissionDao = permissionDao;
    }

    @Override
    public Permission save(Permission permission) {
        Permission perm = permissionDao.findByName(permission.getName());
        return perm == null ? permissionDao.save(permission) : perm;
    }
}