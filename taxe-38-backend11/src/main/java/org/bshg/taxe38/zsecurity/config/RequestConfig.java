package org.bshg.taxe38.zsecurity.config;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.bshg.taxe38.zsecurity.permissions.resources.*;
import org.bshg.taxe38.zsecurity.permissions.RoleEnum;
import static org.springframework.http.HttpMethod.*;
public class RequestConfig {
private RequestConfig() {}
private static HttpSecurity http;
public static void set(HttpSecurity http) throws Exception {
if (RequestConfig.http == null) RequestConfig.http = http;
redevableAuthorizeHttpRequests();
localeAuthorizeHttpRequests();
rueAuthorizeHttpRequests();
quartierAuthorizeHttpRequests();
secteurAuthorizeHttpRequests();
villeAuthorizeHttpRequests();
categorieLocaleAuthorizeHttpRequests();
taxe38AuthorizeHttpRequests();
trimAuthorizeHttpRequests();
locale38DetailAuthorizeHttpRequests();
tauxTaxe38AuthorizeHttpRequests();
taxe38DetailAuthorizeHttpRequests();
typeLocale38DetailAuthorizeHttpRequests();
notificationRetardPremierNiveauAuthorizeHttpRequests();
notificationRetardDeuxiemeNiveauAuthorizeHttpRequests();
notificationRetardDeuxiemeNiveauDetailAuthorizeHttpRequests();
notificationRetardDeuxiemeNiveauDetailType38AuthorizeHttpRequests();
notificationRetardTroisiemeNiveauAuthorizeHttpRequests();
appUserAuthorizeHttpRequests();
roleAuthorizeHttpRequests();
defaultAuthorizeHttpRequests();
}
private static void appUserAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/app-user/**").hasAnyAuthority(UserPermission.READ.authority())
.requestMatchers(POST, "/api/app-user").permitAll()
.requestMatchers(PUT, "/api/app-user/**").hasAnyAuthority(UserPermission.EDIT.authority())
.requestMatchers(PUT, "/api/app-user/**").hasAnyAuthority(UserPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/app-user/**").hasAnyAuthority(UserPermission.DELETE.authority())
.requestMatchers("/api/app-user/**").hasAnyRole(RoleEnum.ADMIN.name())
);
}
private static void roleAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/app-role/**").hasAnyAuthority(RolePermission.READ.authority())
.requestMatchers(POST, "/api/app-role/**").hasAnyAuthority(RolePermission.CREATE.authority())
.requestMatchers(PUT, "/api/app-role/**").hasAnyAuthority(RolePermission.EDIT.authority())
.requestMatchers(DELETE, "/api/app-role/**").hasAnyAuthority(RolePermission.DELETE.authority())
.requestMatchers("/api/app-role/**").hasAnyRole(RoleEnum.ADMIN.name())
);
}
private static void redevableAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/redevable/**").hasAnyAuthority(RedevablePermission.READ.authority())
.requestMatchers(POST, "/api/redevable/**").hasAnyAuthority(RedevablePermission.CREATE.authority())
.requestMatchers(PUT, "/api/redevable/**").hasAnyAuthority(RedevablePermission.EDIT.authority())
.requestMatchers(DELETE, "/api/redevable/**").hasAnyAuthority(RedevablePermission.DELETE.authority())
.requestMatchers("/api/redevable/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void localeAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/locale/**").hasAnyAuthority(LocalePermission.READ.authority())
.requestMatchers(POST, "/api/locale/**").hasAnyAuthority(LocalePermission.CREATE.authority())
.requestMatchers(PUT, "/api/locale/**").hasAnyAuthority(LocalePermission.EDIT.authority())
.requestMatchers(DELETE, "/api/locale/**").hasAnyAuthority(LocalePermission.DELETE.authority())
.requestMatchers("/api/locale/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void rueAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/rue/**").hasAnyAuthority(RuePermission.READ.authority())
.requestMatchers(POST, "/api/rue/**").hasAnyAuthority(RuePermission.CREATE.authority())
.requestMatchers(PUT, "/api/rue/**").hasAnyAuthority(RuePermission.EDIT.authority())
.requestMatchers(DELETE, "/api/rue/**").hasAnyAuthority(RuePermission.DELETE.authority())
.requestMatchers("/api/rue/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void quartierAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/quartier/**").hasAnyAuthority(QuartierPermission.READ.authority())
.requestMatchers(POST, "/api/quartier/**").hasAnyAuthority(QuartierPermission.CREATE.authority())
.requestMatchers(PUT, "/api/quartier/**").hasAnyAuthority(QuartierPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/quartier/**").hasAnyAuthority(QuartierPermission.DELETE.authority())
.requestMatchers("/api/quartier/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void secteurAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/secteur/**").hasAnyAuthority(SecteurPermission.READ.authority())
.requestMatchers(POST, "/api/secteur/**").hasAnyAuthority(SecteurPermission.CREATE.authority())
.requestMatchers(PUT, "/api/secteur/**").hasAnyAuthority(SecteurPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/secteur/**").hasAnyAuthority(SecteurPermission.DELETE.authority())
.requestMatchers("/api/secteur/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void villeAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/ville/**").hasAnyAuthority(VillePermission.READ.authority())
.requestMatchers(POST, "/api/ville/**").hasAnyAuthority(VillePermission.CREATE.authority())
.requestMatchers(PUT, "/api/ville/**").hasAnyAuthority(VillePermission.EDIT.authority())
.requestMatchers(DELETE, "/api/ville/**").hasAnyAuthority(VillePermission.DELETE.authority())
.requestMatchers("/api/ville/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void categorieLocaleAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/categorielocale/**").hasAnyAuthority(CategorieLocalePermission.READ.authority())
.requestMatchers(POST, "/api/categorielocale/**").hasAnyAuthority(CategorieLocalePermission.CREATE.authority())
.requestMatchers(PUT, "/api/categorielocale/**").hasAnyAuthority(CategorieLocalePermission.EDIT.authority())
.requestMatchers(DELETE, "/api/categorielocale/**").hasAnyAuthority(CategorieLocalePermission.DELETE.authority())
.requestMatchers("/api/categorielocale/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void taxe38AuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/taxe38/**").hasAnyAuthority(Taxe38Permission.READ.authority())
.requestMatchers(POST, "/api/taxe38/**").hasAnyAuthority(Taxe38Permission.CREATE.authority())
.requestMatchers(PUT, "/api/taxe38/**").hasAnyAuthority(Taxe38Permission.EDIT.authority())
.requestMatchers(DELETE, "/api/taxe38/**").hasAnyAuthority(Taxe38Permission.DELETE.authority())
.requestMatchers("/api/taxe38/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void trimAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/trim/**").hasAnyAuthority(TrimPermission.READ.authority())
.requestMatchers(POST, "/api/trim/**").hasAnyAuthority(TrimPermission.CREATE.authority())
.requestMatchers(PUT, "/api/trim/**").hasAnyAuthority(TrimPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/trim/**").hasAnyAuthority(TrimPermission.DELETE.authority())
.requestMatchers("/api/trim/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void locale38DetailAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/locale38detail/**").hasAnyAuthority(Locale38DetailPermission.READ.authority())
.requestMatchers(POST, "/api/locale38detail/**").hasAnyAuthority(Locale38DetailPermission.CREATE.authority())
.requestMatchers(PUT, "/api/locale38detail/**").hasAnyAuthority(Locale38DetailPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/locale38detail/**").hasAnyAuthority(Locale38DetailPermission.DELETE.authority())
.requestMatchers("/api/locale38detail/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void tauxTaxe38AuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/tauxtaxe38/**").hasAnyAuthority(TauxTaxe38Permission.READ.authority())
.requestMatchers(POST, "/api/tauxtaxe38/**").hasAnyAuthority(TauxTaxe38Permission.CREATE.authority())
.requestMatchers(PUT, "/api/tauxtaxe38/**").hasAnyAuthority(TauxTaxe38Permission.EDIT.authority())
.requestMatchers(DELETE, "/api/tauxtaxe38/**").hasAnyAuthority(TauxTaxe38Permission.DELETE.authority())
.requestMatchers("/api/tauxtaxe38/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void taxe38DetailAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/taxe38detail/**").hasAnyAuthority(Taxe38DetailPermission.READ.authority())
.requestMatchers(POST, "/api/taxe38detail/**").hasAnyAuthority(Taxe38DetailPermission.CREATE.authority())
.requestMatchers(PUT, "/api/taxe38detail/**").hasAnyAuthority(Taxe38DetailPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/taxe38detail/**").hasAnyAuthority(Taxe38DetailPermission.DELETE.authority())
.requestMatchers("/api/taxe38detail/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void typeLocale38DetailAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/typelocale38detail/**").hasAnyAuthority(TypeLocale38DetailPermission.READ.authority())
.requestMatchers(POST, "/api/typelocale38detail/**").hasAnyAuthority(TypeLocale38DetailPermission.CREATE.authority())
.requestMatchers(PUT, "/api/typelocale38detail/**").hasAnyAuthority(TypeLocale38DetailPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/typelocale38detail/**").hasAnyAuthority(TypeLocale38DetailPermission.DELETE.authority())
.requestMatchers("/api/typelocale38detail/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void notificationRetardPremierNiveauAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/notificationretardpremierniveau/**").hasAnyAuthority(NotificationRetardPremierNiveauPermission.READ.authority())
.requestMatchers(POST, "/api/notificationretardpremierniveau/**").hasAnyAuthority(NotificationRetardPremierNiveauPermission.CREATE.authority())
.requestMatchers(PUT, "/api/notificationretardpremierniveau/**").hasAnyAuthority(NotificationRetardPremierNiveauPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/notificationretardpremierniveau/**").hasAnyAuthority(NotificationRetardPremierNiveauPermission.DELETE.authority())
.requestMatchers("/api/notificationretardpremierniveau/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void notificationRetardDeuxiemeNiveauAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/notificationretarddeuxiemeniveau/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauPermission.READ.authority())
.requestMatchers(POST, "/api/notificationretarddeuxiemeniveau/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauPermission.CREATE.authority())
.requestMatchers(PUT, "/api/notificationretarddeuxiemeniveau/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/notificationretarddeuxiemeniveau/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauPermission.DELETE.authority())
.requestMatchers("/api/notificationretarddeuxiemeniveau/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void notificationRetardDeuxiemeNiveauDetailAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/notificationretarddeuxiemeniveaudetail/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauDetailPermission.READ.authority())
.requestMatchers(POST, "/api/notificationretarddeuxiemeniveaudetail/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauDetailPermission.CREATE.authority())
.requestMatchers(PUT, "/api/notificationretarddeuxiemeniveaudetail/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauDetailPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/notificationretarddeuxiemeniveaudetail/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauDetailPermission.DELETE.authority())
.requestMatchers("/api/notificationretarddeuxiemeniveaudetail/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void notificationRetardDeuxiemeNiveauDetailType38AuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/notificationretarddeuxiemeniveaudetailtype38/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauDetailType38Permission.READ.authority())
.requestMatchers(POST, "/api/notificationretarddeuxiemeniveaudetailtype38/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauDetailType38Permission.CREATE.authority())
.requestMatchers(PUT, "/api/notificationretarddeuxiemeniveaudetailtype38/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauDetailType38Permission.EDIT.authority())
.requestMatchers(DELETE, "/api/notificationretarddeuxiemeniveaudetailtype38/**").hasAnyAuthority(NotificationRetardDeuxiemeNiveauDetailType38Permission.DELETE.authority())
.requestMatchers("/api/notificationretarddeuxiemeniveaudetailtype38/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void notificationRetardTroisiemeNiveauAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers(GET, "/api/notificationretardtroisiemeniveau/**").hasAnyAuthority(NotificationRetardTroisiemeNiveauPermission.READ.authority())
.requestMatchers(POST, "/api/notificationretardtroisiemeniveau/**").hasAnyAuthority(NotificationRetardTroisiemeNiveauPermission.CREATE.authority())
.requestMatchers(PUT, "/api/notificationretardtroisiemeniveau/**").hasAnyAuthority(NotificationRetardTroisiemeNiveauPermission.EDIT.authority())
.requestMatchers(DELETE, "/api/notificationretardtroisiemeniveau/**").hasAnyAuthority(NotificationRetardTroisiemeNiveauPermission.DELETE.authority())
.requestMatchers("/api/notificationretardtroisiemeniveau/**").hasAnyRole(RoleEnum.ADMIN.name(),RoleEnum.USER.name())
);
}
private static void defaultAuthorizeHttpRequests() throws Exception {
http.authorizeHttpRequests(auth -> auth
.requestMatchers("/login").permitAll()
.requestMatchers("/api/login").permitAll()
.requestMatchers("/api/**").authenticated()
.anyRequest().authenticated());
}
}