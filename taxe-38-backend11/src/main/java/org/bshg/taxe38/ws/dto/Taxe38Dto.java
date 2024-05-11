package org.bshg.taxe38.ws.dto;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Taxe38Dto {
private Long id;
private String code;
private RedevableDto redevable;
private LocaleDto locale;
private int anne;
private TrimDto trim;
private LocalDateTime datePresentaion;
private int nombreMoisRetard;
private double montantBase;
private double montantRetardPremeirMois;
private double montantTotal;
private List<Taxe38DetailDto> taxe38Details;
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
public RedevableDto getRedevable() {
return redevable;
}
public void setRedevable(RedevableDto value) {
this.redevable = value;
}
public LocaleDto getLocale() {
return locale;
}
public void setLocale(LocaleDto value) {
this.locale = value;
}
public int getAnne() {
return anne;
}
public void setAnne(int value) {
this.anne = value;
}
public TrimDto getTrim() {
return trim;
}
public void setTrim(TrimDto value) {
this.trim = value;
}
public LocalDateTime getDatePresentaion() {
return datePresentaion;
}
public void setDatePresentaion(LocalDateTime value) {
this.datePresentaion = value;
}
public int getNombreMoisRetard() {
return nombreMoisRetard;
}
public void setNombreMoisRetard(int value) {
this.nombreMoisRetard = value;
}
public double getMontantBase() {
return montantBase;
}
public void setMontantBase(double value) {
this.montantBase = value;
}
public double getMontantRetardPremeirMois() {
return montantRetardPremeirMois;
}
public void setMontantRetardPremeirMois(double value) {
this.montantRetardPremeirMois = value;
}
public double getMontantTotal() {
return montantTotal;
}
public void setMontantTotal(double value) {
this.montantTotal = value;
}
public List<Taxe38DetailDto> getTaxe38Details() {
return taxe38Details;
}
public void setTaxe38Details(List<Taxe38DetailDto> value) {
this.taxe38Details = value;
}
}