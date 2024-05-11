package org.bshg.taxe38.zsecurity.permissions.resources;
import org.bshg.taxe38.zsecurity.permissions.PermissionResource;

public enum NotificationRetardTroisiemeNiveauPermission implements PermissionResource {
    CREATE(create),
    READ(read),
    EDIT(edit),
    DELETE(delete),
    ;

    private final String value;

    NotificationRetardTroisiemeNiveauPermission(String action) {
        this.value = authority(action);
    }

    @Override
    public String resource() {
        return "notificationRetardTroisiemeNiveau";
    }

    @Override
    public String authority() {
        return value;
    }
}
