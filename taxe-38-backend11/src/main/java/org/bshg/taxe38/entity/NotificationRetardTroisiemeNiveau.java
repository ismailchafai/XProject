package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="notificationretardtroisiemeniveau")
@SequenceGenerator(name = "notificationretardtroisiemeniveau_seq", sequenceName = "notificationretardtroisiemeniveau_seq", allocationSize = 1)
public class NotificationRetardTroisiemeNiveau {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "notificationretardtroisiemeniveau_seq")
private Long id;
private String code;
@ManyToOne(fetch = FetchType.LAZY)
private Locale locale;
@ManyToOne(fetch = FetchType.LAZY)
private Redevable redevable;
private int anne;
@ManyToOne(fetch = FetchType.LAZY)
private Trim trim;
public NotificationRetardTroisiemeNiveau() {
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
public Trim getTrim() {
return trim;
}
public void setTrim(Trim value) {
this.trim = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof NotificationRetardTroisiemeNiveau notificationRetardTroisiemeNiveau) {
return notificationRetardTroisiemeNiveau.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}