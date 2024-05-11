package org.bshg.taxe38.zsecurity.permissions.resources;
import org.bshg.taxe38.zsecurity.permissions.PermissionResource;

public enum TypeLocale38DetailPermission implements PermissionResource {
    CREATE(create),
    READ(read),
    EDIT(edit),
    DELETE(delete),
    ;

    private final String value;

    TypeLocale38DetailPermission(String action) {
        this.value = authority(action);
    }

    @Override
    public String resource() {
        return "typeLocale38Detail";
    }

    @Override
    public String authority() {
        return value;
    }
}
