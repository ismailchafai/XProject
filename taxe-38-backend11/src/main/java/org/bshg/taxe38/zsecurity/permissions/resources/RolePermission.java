package org.bshg.taxe38.zsecurity.permissions.resources;
import org.bshg.taxe38.zsecurity.permissions.PermissionResource;

public enum RolePermission implements PermissionResource {
    CREATE(create),
    READ(read),
    EDIT(edit),
    DELETE(delete),
    ;

    private final String value;

    RolePermission(String action) {
        this.value = authority(action);
    }

    @Override
    public String resource() {
        return "client";
    }

    @Override
    public String authority() {
        return value;
    }
}
