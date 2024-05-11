package org.bshg.taxe38.zsecurity.permissions.resources;
import org.bshg.taxe38.zsecurity.permissions.PermissionResource;

public enum SecteurPermission implements PermissionResource {
    CREATE(create),
    READ(read),
    EDIT(edit),
    DELETE(delete),
    ;

    private final String value;

    SecteurPermission(String action) {
        this.value = authority(action);
    }

    @Override
    public String resource() {
        return "secteur";
    }

    @Override
    public String authority() {
        return value;
    }
}
