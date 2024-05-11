package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="locale38detail")
@SequenceGenerator(name = "locale38detail_seq", sequenceName = "locale38detail_seq", allocationSize = 1)
public class Locale38Detail {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "locale38detail_seq")
private Long id;
private String code;
private double superficie;
@ManyToOne(fetch = FetchType.LAZY)
private TypeLocale38Detail typeLocale38Detail;
private boolean active;
public Locale38Detail() {
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
public double getSuperficie() {
return superficie;
}
public void setSuperficie(double value) {
this.superficie = value;
}
public TypeLocale38Detail getTypeLocale38Detail() {
return typeLocale38Detail;
}
public void setTypeLocale38Detail(TypeLocale38Detail value) {
this.typeLocale38Detail = value;
}
public boolean isActive() {
return active;
}
public void setActive(boolean value) {
this.active = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof Locale38Detail locale38Detail) {
return locale38Detail.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}