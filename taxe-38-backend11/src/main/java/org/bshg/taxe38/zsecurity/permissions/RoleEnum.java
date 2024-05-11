package org.bshg.taxe38.zsecurity.permissions;
import org.bshg.taxe38.zsecurity.entity.Permission;
import org.bshg.taxe38.zsecurity.entity.Role;
import org.bshg.taxe38.zsecurity.permissions.resources.*;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;
public enum RoleEnum {
ADMIN(
UserPermission.values(),
RolePermission.values(),
RedevablePermission.values(),
LocalePermission.values(),
RuePermission.values(),
QuartierPermission.values(),
SecteurPermission.values(),
VillePermission.values(),
CategorieLocalePermission.values(),
Taxe38Permission.values(),
TrimPermission.values(),
Locale38DetailPermission.values(),
TauxTaxe38Permission.values(),
Taxe38DetailPermission.values(),
TypeLocale38DetailPermission.values(),
NotificationRetardPremierNiveauPermission.values(),
NotificationRetardDeuxiemeNiveauPermission.values(),
NotificationRetardDeuxiemeNiveauDetailPermission.values(),
NotificationRetardDeuxiemeNiveauDetailType38Permission.values(),
NotificationRetardTroisiemeNiveauPermission.values()
),
USER(
RedevablePermission.values(),
LocalePermission.values(),
RuePermission.values(),
QuartierPermission.values(),
SecteurPermission.values(),
VillePermission.values(),
CategorieLocalePermission.values(),
Taxe38Permission.values(),
TrimPermission.values(),
Locale38DetailPermission.values(),
TauxTaxe38Permission.values(),
Taxe38DetailPermission.values(),
TypeLocale38DetailPermission.values(),
NotificationRetardPremierNiveauPermission.values(),
NotificationRetardDeuxiemeNiveauPermission.values(),
NotificationRetardDeuxiemeNiveauDetailPermission.values(),
NotificationRetardDeuxiemeNiveauDetailType38Permission.values(),
NotificationRetardTroisiemeNiveauPermission.values()
),
;
private Set<PermissionResource> permissions = null;
RoleEnum() {}
RoleEnum(Object... permissionsList) {
this.permissions = Arrays.stream(permissionsList)
.flatMap(o -> {
if (o instanceof PermissionResource[]) {
return Arrays.stream((PermissionResource[]) o);
} else if (o instanceof PermissionResource) {
return Arrays.stream(new PermissionResource[]{(PermissionResource) o});
} else {
throw new IllegalArgumentException("Unsupported type in permissionsList");
}
}).collect(Collectors.toUnmodifiableSet());
}
public Set<PermissionResource> getPermissions() {
return permissions;
}
public Role getRole() {
var result = new Role();
result.setName(this.name());
result.setPermissions(
this.getPermissions().stream()
.map(p -> new Permission(p.authority()))
.collect(Collectors.toSet())
);
return result;
}
}