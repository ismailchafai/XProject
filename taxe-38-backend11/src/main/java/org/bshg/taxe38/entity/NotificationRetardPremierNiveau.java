package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="notificationretardpremierniveau")
@SequenceGenerator(name = "notificationretardpremierniveau_seq", sequenceName = "notificationretardpremierniveau_seq", allocationSize = 1)
public class NotificationRetardPremierNiveau {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "notificationretardpremierniveau_seq")
private Long id;
private String code;
@ManyToOne(fetch = FetchType.LAZY)
private Locale locale;
@ManyToOne(fetch = FetchType.LAZY)
private Redevable redevable;
private int anne;
private double montantBase;
public NotificationRetardPremierNiveau() {
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
public Locale getLocale() {
return locale;
}
public void setLocale(Locale value) {
this.locale = value;
}
public Redevable getRedevable() {
return redevable;
}
public void setRedevable(Redevable value) {
this.redevable = value;
}
public int getAnne() {
return anne;
}
public void setAnne(int value) {
this.anne = value;
}
public double getMontantBase() {
return montantBase;
}
public void setMontantBase(double value) {
this.montantBase = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof NotificationRetardPremierNiveau notificationRetardPremierNiveau) {
return notificationRetardPremierNiveau.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}