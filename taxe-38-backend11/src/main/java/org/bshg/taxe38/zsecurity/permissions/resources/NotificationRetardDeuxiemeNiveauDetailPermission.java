package org.bshg.taxe38.zsecurity.permissions.resources;
import org.bshg.taxe38.zsecurity.permissions.PermissionResource;

public enum NotificationRetardDeuxiemeNiveauDetailPermission implements PermissionResource {
    CREATE(create),
    READ(read),
    EDIT(edit),
    DELETE(delete),
    ;

    private final String value;

    NotificationRetardDeuxiemeNiveauDetailPermission(String action) {
        this.value = authority(action);
    }

    @Override
    public String resource() {
        return "notificationRetardDeuxiemeNiveauDetail";
    }

    @Override
    public String authority() {
        return value;
    }
}
