package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="notificationretarddeuxiemeniveaudetail")
@SequenceGenerator(name = "notificationretarddeuxiemeniveaudetail_seq", sequenceName = "notificationretarddeuxiemeniveaudetail_seq", allocationSize = 1)
public class NotificationRetardDeuxiemeNiveauDetail {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "notificationretarddeuxiemeniveaudetail_seq")
private Long id;
private String code;
@ManyToOne(fetch = FetchType.LAZY)
private Trim trim;
private double montantBase;
private double montantRetardPremierMois;
private double montantRetardAutreMois;
private double montantTotal;
public NotificationRetardDeuxiemeNiveauDetail() {
}
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
public Trim getTrim() {
return trim;
}
public void setTrim(Trim value) {
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
@Override
public boolean equals(Object object) {
if (object instanceof NotificationRetardDeuxiemeNiveauDetail notificationRetardDeuxiemeNiveauDetail) {
return notificationRetardDeuxiemeNiveauDetail.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}