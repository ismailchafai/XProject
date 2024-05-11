package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="notificationretarddeuxiemeniveaudetailtype38")
@SequenceGenerator(name = "notificationretarddeuxiemeniveaudetailtype38_seq", sequenceName = "notificationretarddeuxiemeniveaudetailtype38_seq", allocationSize = 1)
public class NotificationRetardDeuxiemeNiveauDetailType38 {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "notificationretarddeuxiemeniveaudetailtype38_seq")
private Long id;
private String code;
@ManyToOne(fetch = FetchType.LAZY)
private TypeLocale38Detail typeLocale38;
private double montantBase;
private double montantRetardPremierMois;
private double montantRetardAutreMois;
private double montantTotal;
public NotificationRetardDeuxiemeNiveauDetailType38() {
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
public TypeLocale38Detail getTypeLocale38() {
return typeLocale38;
}
public void setTypeLocale38(TypeLocale38Detail value) {
this.typeLocale38 = value;
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
if (object instanceof NotificationRetardDeuxiemeNiveauDetailType38 notificationRetardDeuxiemeNiveauDetailType38) {
return notificationRetardDeuxiemeNiveauDetailType38.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}