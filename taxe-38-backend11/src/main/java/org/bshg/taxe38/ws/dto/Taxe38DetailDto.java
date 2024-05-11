package org.bshg.taxe38.ws.dto;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Taxe38DetailDto {
private Long id;
private String code;
private double montantParMetreCarre;
private Locale38DetailDto locale38Detail;
private TauxTaxe38Dto tauxTaxe38;
private double montantBase;
private double montantRetardPremierMois;
private double montantRetardAutreMois;
private Taxe38Dto taxe38;
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
public Locale38DetailDto getLocale38Detail() {
return locale38Detail;
}
public void setLocale38Detail(Locale38DetailDto value) {
this.locale38Detail = value;
}
public TauxTaxe38Dto getTauxTaxe38() {
return tauxTaxe38;
}
public void setTauxTaxe38(TauxTaxe38Dto value) {
this.tauxTaxe38 = value;
}
public double getMontantBase() {
return montantBase;
}
public void setMontantBase(double value) {
this.montantBase = value;
}
public double getMontantRetardPremierMois() {
return montantRetardPremierMois;
}
public void setMontantRetardPremierMois(double value) {
this.montantRetardPremierMois = value;
}
public double getMontantRetardAutreMois() {
return montantRetardAutreMois;
}
public void setMontantRetardAutreMois(double value) {
this.montantRetardAutreMois = value;
}
public Taxe38Dto getTaxe38() {
return taxe38;
}
public void setTaxe38(Taxe38Dto value) {
this.taxe38 = value;
}
}