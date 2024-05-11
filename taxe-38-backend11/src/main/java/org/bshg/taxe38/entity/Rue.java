package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="rue")
@SequenceGenerator(name = "rue_seq", sequenceName = "rue_seq", allocationSize = 1)
public class Rue {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rue_seq")
private Long id;
private String code;
private String libelle;
@ManyToOne(fetch = FetchType.LAZY)
private Quartier quartier;
public Rue() {
}
public Rue(Long id, String label) {
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
public Quartier getQuartier() {
return quartier;
}
public void setQuartier(Quartier value) {
this.quartier = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof Rue rue) {
return rue.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}