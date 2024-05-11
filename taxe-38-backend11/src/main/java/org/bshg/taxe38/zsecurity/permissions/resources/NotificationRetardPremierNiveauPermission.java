package org.bshg.taxe38.zsecurity.permissions.resources;
import org.bshg.taxe38.zsecurity.permissions.PermissionResource;

public enum NotificationRetardPremierNiveauPermission implements PermissionResource {
    CREATE(create),
    READ(read),
    EDIT(edit),
    DELETE(delete),
    ;

    private final String value;

    NotificationRetardPremierNiveauPermission(String action) {
        this.value = authority(action);
    }

    @Override
    public String resource() {
        return "notificationRetardPremierNiveau";
    }

    @Override
    public String authority() {
        return value;
    }
}
