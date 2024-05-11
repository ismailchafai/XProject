package org.bshg.taxe38.zsecurity.permissions.resources;
import org.bshg.taxe38.zsecurity.permissions.PermissionResource;

public enum NotificationRetardDeuxiemeNiveauDetailType38Permission implements PermissionResource {
    CREATE(create),
    READ(read),
    EDIT(edit),
    DELETE(delete),
    ;

    private final String value;

    NotificationRetardDeuxiemeNiveauDetailType38Permission(String action) {
        this.value = authority(action);
    }

    @Override
    public String resource() {
        return "notificationRetardDeuxiemeNiveauDetailType38";
    }

    @Override
    public String authority() {
        return value;
    }
}
