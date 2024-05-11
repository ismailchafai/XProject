package org.bshg.taxe38.ws.dto;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TauxTaxe38Dto {
private Long id;
private String code;
private double montantParMetreCarre;
private LocalDateTime dateMin;
private LocalDateTime dateMax;
private double pourcentagePremierRetard;
private double pourcentageAutreMoisRetard;
private TypeLocale38DetailDto typeLocale38Detail;
private CategorieLocaleDto categorieLocale;
public Long getId() {
return id;
}
public void setId(Long id) {
this.id = id;
}
public String getCode() {
return code;
}
public void setCode(String value) {
this.code = value;
}
public double getMontantParMetreCarre() {
return montantParMetreCarre;
}
public void setMontantParMetreCarre(double value) {
this.montantParMetreCarre = value;
}
public LocalDateTime getDateMin() {
return dateMin;
}
public void setDateMin(LocalDateTime value) {
this.dateMin = value;
}
public LocalDateTime getDateMax() {
return dateMax;
}
public void setDateMax(LocalDateTime value) {
this.dateMax = value;
}
public double getPourcentagePremierRetard() {
return pourcentagePremierRetard;
}
public void setPourcentagePremierRetard(double value) {
this.pourcentagePremierRetard = value;
}
public double getPourcentageAutreMoisRetard() {
return pourcentageAutreMoisRetard;
}
public void setPourcentageAutreMoisRetard(double value) {
this.pourcentageAutreMoisRetard = value;
}
public TypeLocale38DetailDto getTypeLocale38Detail() {
return typeLocale38Detail;
}
public void setTypeLocale38Detail(TypeLocale38DetailDto value) {
this.typeLocale38Detail = value;
}
public CategorieLocaleDto getCategorieLocale() {
return categorieLocale;
}
public void setCategorieLocale(CategorieLocaleDto value) {
this.categorieLocale = value;
}
}