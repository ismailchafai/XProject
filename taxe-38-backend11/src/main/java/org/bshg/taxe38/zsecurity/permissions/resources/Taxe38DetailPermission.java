package org.bshg.taxe38.zsecurity.permissions.resources;
import org.bshg.taxe38.zsecurity.permissions.PermissionResource;

public enum Taxe38DetailPermission implements PermissionResource {
    CREATE(create),
    READ(read),
    EDIT(edit),
    DELETE(delete),
    ;

    private final String value;

    Taxe38DetailPermission(String action) {
        this.value = authority(action);
    }

    @Override
    public String resource() {
        return "taxe38Detail";
    }

    @Override
    public String authority() {
        return value;
    }
}
