package org.bshg.taxe38.ws.dto;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class NotificationRetardDeuxiemeNiveauDetailDto {
private Long id;
private String code;
private TrimDto trim;
private double montantBase;
private double montantRetardPremierMois;
private double montantRetardAutreMois;
private double montantTotal;
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
public TrimDto getTrim() {
return trim;
}
public void setTrim(TrimDto value) {
this.trim = value;
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
public double getMontantTotal() {
return montantTotal;
}
public void setMontantTotal(double value) {
this.montantTotal = value;
}
}