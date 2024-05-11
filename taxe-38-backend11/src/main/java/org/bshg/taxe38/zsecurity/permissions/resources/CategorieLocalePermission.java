package org.bshg.taxe38.zsecurity.permissions.resources;
import org.bshg.taxe38.zsecurity.permissions.PermissionResource;

public enum CategorieLocalePermission implements PermissionResource {
    CREATE(create),
    READ(read),
    EDIT(edit),
    DELETE(delete),
    ;

    private final String value;

    CategorieLocalePermission(String action) {
        this.value = authority(action);
    }

    @Override
    public String resource() {
        return "categorieLocale";
    }

    @Override
    public String authority() {
        return value;
    }
}
