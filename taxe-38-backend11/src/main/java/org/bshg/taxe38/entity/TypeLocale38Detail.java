package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="typelocale38detail")
@SequenceGenerator(name = "typelocale38detail_seq", sequenceName = "typelocale38detail_seq", allocationSize = 1)
public class TypeLocale38Detail {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "typelocale38detail_seq")
private Long id;
private String code;
private String libelle;
public TypeLocale38Detail() {
}
public TypeLocale38Detail(Long id, String label) {
// constructor to get optimized fields
this.id = id;
this.libelle = label;
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
public String getLibelle() {
return libelle;
}
public void setLibelle(String value) {
this.libelle = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof TypeLocale38Detail typeLocale38Detail) {
return typeLocale38Detail.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}