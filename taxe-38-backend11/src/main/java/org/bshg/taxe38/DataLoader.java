package org.bshg.taxe38;
import org.bshg.taxe38.zsecurity.entity.AppUser;
import org.bshg.taxe38.zsecurity.entity.Role;
import org.bshg.taxe38.zsecurity.service.facade.AppUserService;
import org.bshg.taxe38.zsecurity.service.facade.RoleService;
import org.bshg.taxe38.zsecurity.permissions.RoleEnum;
import org.bshg.taxe38.services.facade.RedevableService;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.services.facade.LocaleService;
import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.services.facade.RueService;
import org.bshg.taxe38.entity.Rue;
import org.bshg.taxe38.services.facade.QuartierService;
import org.bshg.taxe38.entity.Quartier;
import org.bshg.taxe38.services.facade.SecteurService;
import org.bshg.taxe38.entity.Secteur;
import org.bshg.taxe38.services.facade.VilleService;
import org.bshg.taxe38.entity.Ville;
import org.bshg.taxe38.services.facade.CategorieLocaleService;
import org.bshg.taxe38.entity.CategorieLocale;
import org.bshg.taxe38.services.facade.Taxe38Service;
import org.bshg.taxe38.entity.Taxe38;
import org.bshg.taxe38.services.facade.TrimService;
import org.bshg.taxe38.entity.Trim;
import org.bshg.taxe38.services.facade.Locale38DetailService;
import org.bshg.taxe38.entity.Locale38Detail;
import org.bshg.taxe38.services.facade.TauxTaxe38Service;
import org.bshg.taxe38.entity.TauxTaxe38;
import org.bshg.taxe38.services.facade.Taxe38DetailService;
import org.bshg.taxe38.entity.Taxe38Detail;
import org.bshg.taxe38.services.facade.TypeLocale38DetailService;
import org.bshg.taxe38.entity.TypeLocale38Detail;
import org.bshg.taxe38.services.facade.NotificationRetardPremierNiveauService;
import org.bshg.taxe38.entity.NotificationRetardPremierNiveau;
import org.bshg.taxe38.services.facade.NotificationRetardDeuxiemeNiveauService;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveau;
import org.bshg.taxe38.services.facade.NotificationRetardDeuxiemeNiveauDetailService;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetail;
import org.bshg.taxe38.services.facade.NotificationRetardDeuxiemeNiveauDetailType38Service;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetailType38;
import org.bshg.taxe38.services.facade.NotificationRetardTroisiemeNiveauService;
import org.bshg.taxe38.entity.NotificationRetardTroisiemeNiveau;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import java.util.ArrayList;
import java.util.List;
@Component
public class DataLoader implements ApplicationRunner {
@Value("${app.data-loader.load}")
private boolean load;
@Override
public void run(ApplicationArguments args) throws Exception {
if (load) {
System.out.println("Data Loading...");
generatePermission();
generateAdminAccount();
generateUserAccount();
generateRedevable();
generateLocale();
generateRue();
generateQuartier();
generateSecteur();
generateVille();
generateCategorieLocale();
generateTaxe38();
generateTrim();
generateLocale38Detail();
generateTauxTaxe38();
generateTaxe38Detail();
generateTypeLocale38Detail();
generateNotificationRetardPremierNiveau();
generateNotificationRetardDeuxiemeNiveau();
generateNotificationRetardDeuxiemeNiveauDetail();
generateNotificationRetardDeuxiemeNiveauDetailType38();
generateNotificationRetardTroisiemeNiveau();
System.out.println("Data Loaded!");
}
}
private void generatePermission() {
for (RoleEnum role : RoleEnum.values()) {
var roleEntity = role.getRole();
roleService.save(roleEntity);
}
}
private void generateAdminAccount() {
AppUser user = new AppUser("admin");
user.setPassword("123456");
Role role = new Role();
role.setName(RoleEnum.ADMIN.name());
user.setRoles(new ArrayList<>());
user.getRoles().add(role);
appUserService.save(user);
System.out.println("One Account For ADMIN role is created: 'admin' :: '123456'");
}
private void generateUserAccount() {
AppUser user = new AppUser("user");
user.setPassword("123456");
Role role = new Role();
role.setName(RoleEnum.USER.name());
user.setRoles(new ArrayList<>());
user.getRoles().add(role);
appUserService.save(user);
System.out.println("One Account For USER role is created: 'user' :: '123456'");
}
private void generateRedevable() {
//for (int i = 0; i < 50; i++) {
//Redevable item = new Redevable();
//item.setCin("cin " + i);
//item.setFirstName("firstName " + i);
//item.setLastName("lastName " + i);
//item.setUsername("Redevable " + i);
//item.setUsername("password " + i);
//
//item.setPassword(appUserService.cryptPassword("Redevable " + i));
//List<Role> savedRoles = roleService.save(item.getRoles());
//item.setRoles(savedRoles);
//redevableService.create(item);
//}
//System.out.println("Data For Redevable Generated!");
}
private void generateLocale() {
//for (int i = 0; i < 50; i++) {
//Locale item = new Locale();
//item.setCode("code " + i);
//item.setComplementAdresse("complementAdresse " + i);
//localeService.create(item);
//}
//System.out.println("Data For Locale Generated!");
}
private void generateRue() {
//for (int i = 0; i < 50; i++) {
//Rue item = new Rue();
//item.setCode("code " + i);
//item.setLibelle("libelle " + i);
//rueService.create(item);
//}
//System.out.println("Data For Rue Generated!");
}
private void generateQuartier() {
//for (int i = 0; i < 50; i++) {
//Quartier item = new Quartier();
//item.setCode("code " + i);
//item.setLibelle("libelle " + i);
//quartierService.create(item);
//}
//System.out.println("Data For Quartier Generated!");
}
private void generateSecteur() {
//for (int i = 0; i < 50; i++) {
//Secteur item = new Secteur();
//item.setCode("code " + i);
//item.setLibelle("libelle " + i);
//secteurService.create(item);
//}
//System.out.println("Data For Secteur Generated!");
}
private void generateVille() {
//for (int i = 0; i < 50; i++) {
//Ville item = new Ville();
//item.setCode("code " + i);
//item.setLibelle("libelle " + i);
//villeService.create(item);
//}
//System.out.println("Data For Ville Generated!");
}
private void generateCategorieLocale() {
//for (int i = 0; i < 50; i++) {
//CategorieLocale item = new CategorieLocale();
//item.setCode("code " + i);
//item.setLibelle("libelle " + i);
//categorieLocaleService.create(item);
//}
//System.out.println("Data For CategorieLocale Generated!");
}
private void generateTaxe38() {
//for (int i = 0; i < 50; i++) {
//Taxe38 item = new Taxe38();
//item.setCode("code " + i);
//taxe38Service.create(item);
//}
//System.out.println("Data For Taxe38 Generated!");
}
private void generateTrim() {
//for (int i = 0; i < 50; i++) {
//Trim item = new Trim();
//item.setLibelle("libelle " + i);
//trimService.create(item);
//}
//System.out.println("Data For Trim Generated!");
}
private void generateLocale38Detail() {
//for (int i = 0; i < 50; i++) {
//Locale38Detail item = new Locale38Detail();
//item.setCode("code " + i);
//locale38DetailService.create(item);
//}
//System.out.println("Data For Locale38Detail Generated!");
}
private void generateTauxTaxe38() {
//for (int i = 0; i < 50; i++) {
//TauxTaxe38 item = new TauxTaxe38();
//item.setCode("code " + i);
//tauxTaxe38Service.create(item);
//}
//System.out.println("Data For TauxTaxe38 Generated!");
}
private void generateTaxe38Detail() {
//for (int i = 0; i < 50; i++) {
//Taxe38Detail item = new Taxe38Detail();
//item.setCode("code " + i);
//taxe38DetailService.create(item);
//}
//System.out.println("Data For Taxe38Detail Generated!");
}
private void generateTypeLocale38Detail() {
//for (int i = 0; i < 50; i++) {
//TypeLocale38Detail item = new TypeLocale38Detail();
//item.setCode("code " + i);
//item.setLibelle("libelle " + i);
//typeLocale38DetailService.create(item);
//}
//System.out.println("Data For TypeLocale38Detail Generated!");
}
private void generateNotificationRetardPremierNiveau() {
//for (int i = 0; i < 50; i++) {
//NotificationRetardPremierNiveau item = new NotificationRetardPremierNiveau();
//item.setCode("code " + i);
//notificationRetardPremierNiveauService.create(item);
//}
//System.out.println("Data For NotificationRetardPremierNiveau Generated!");
}
private void generateNotificationRetardDeuxiemeNiveau() {
//for (int i = 0; i < 50; i++) {
//NotificationRetardDeuxiemeNiveau item = new NotificationRetardDeuxiemeNiveau();
//item.setCode("code " + i);
//notificationRetardDeuxiemeNiveauService.create(item);
//}
//System.out.println("Data For NotificationRetardDeuxiemeNiveau Generated!");
}
private void generateNotificationRetardDeuxiemeNiveauDetail() {
//for (int i = 0; i < 50; i++) {
//NotificationRetardDeuxiemeNiveauDetail item = new NotificationRetardDeuxiemeNiveauDetail();
//item.setCode("code " + i);
//notificationRetardDeuxiemeNiveauDetailService.create(item);
//}
//System.out.println("Data For NotificationRetardDeuxiemeNiveauDetail Generated!");
}
private void generateNotificationRetardDeuxiemeNiveauDetailType38() {
//for (int i = 0; i < 50; i++) {
//NotificationRetardDeuxiemeNiveauDetailType38 item = new NotificationRetardDeuxiemeNiveauDetailType38();
//item.setCode("code " + i);
//notificationRetardDeuxiemeNiveauDetailType38Service.create(item);
//}
//System.out.println("Data For NotificationRetardDeuxiemeNiveauDetailType38 Generated!");
}
private void generateNotificationRetardTroisiemeNiveau() {
//for (int i = 0; i < 50; i++) {
//NotificationRetardTroisiemeNiveau item = new NotificationRetardTroisiemeNiveau();
//item.setCode("code " + i);
//notificationRetardTroisiemeNiveauService.create(item);
//}
//System.out.println("Data For NotificationRetardTroisiemeNiveau Generated!");
}
@Autowired private RedevableService redevableService;
@Autowired private LocaleService localeService;
@Autowired private RueService rueService;
@Autowired private QuartierService quartierService;
@Autowired private SecteurService secteurService;
@Autowired private VilleService villeService;
@Autowired private CategorieLocaleService categorieLocaleService;
@Autowired private Taxe38Service taxe38Service;
@Autowired private TrimService trimService;
@Autowired private Locale38DetailService locale38DetailService;
@Autowired private TauxTaxe38Service tauxTaxe38Service;
@Autowired private Taxe38DetailService taxe38DetailService;
@Autowired private TypeLocale38DetailService typeLocale38DetailService;
@Autowired private NotificationRetardPremierNiveauService notificationRetardPremierNiveauService;
@Autowired private NotificationRetardDeuxiemeNiveauService notificationRetardDeuxiemeNiveauService;
@Autowired private NotificationRetardDeuxiemeNiveauDetailService notificationRetardDeuxiemeNiveauDetailService;
@Autowired private NotificationRetardDeuxiemeNiveauDetailType38Service notificationRetardDeuxiemeNiveauDetailType38Service;
@Autowired private NotificationRetardTroisiemeNiveauService notificationRetardTroisiemeNiveauService;
@Autowired private AppUserService appUserService;
@Autowired private RoleService roleService;
}
