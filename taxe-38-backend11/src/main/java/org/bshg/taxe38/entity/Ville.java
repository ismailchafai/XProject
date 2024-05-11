package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="ville")
@SequenceGenerator(name = "ville_seq", sequenceName = "ville_seq", allocationSize = 1)
public class Ville {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ville_seq")
private Long id;
private String code;
private String libelle;
public Ville() {
}
public Ville(Long id, String label) {
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
if (object instanceof Ville ville) {
return ville.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}