package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="locale")
@SequenceGenerator(name = "locale_seq", sequenceName = "locale_seq", allocationSize = 1)
public class Locale {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "locale_seq")
private Long id;
private String code;
private String complementAdresse;
@ManyToOne(fetch = FetchType.LAZY)
private Rue rue;
@ManyToOne(fetch = FetchType.LAZY)
private Redevable redevable;
@ManyToOne(fetch = FetchType.LAZY)
private CategorieLocale categorieLocale;
public Locale() {
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
public String getComplementAdresse() {
return complementAdresse;
}
public void setComplementAdresse(String value) {
this.complementAdresse = value;
}
public Rue getRue() {
return rue;
}
public void setRue(Rue value) {
this.rue = value;
}
public Redevable getRedevable() {
return redevable;
}
public void setRedevable(Redevable value) {
this.redevable = value;
}
public CategorieLocale getCategorieLocale() {
return categorieLocale;
}
public void setCategorieLocale(CategorieLocale value) {
this.categorieLocale = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof Locale locale) {
return locale.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}