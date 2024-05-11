package org.bshg.taxe38.zsecurity.permissions.resources;
import org.bshg.taxe38.zsecurity.permissions.PermissionResource;

public enum TrimPermission implements PermissionResource {
    CREATE(create),
    READ(read),
    EDIT(edit),
    DELETE(delete),
    ;

    private final String value;

    TrimPermission(String action) {
        this.value = authority(action);
    }

    @Override
    public String resource() {
        return "trim";
    }

    @Override
    public String authority() {
        return value;
    }
}
