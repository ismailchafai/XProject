package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="quartier")
@SequenceGenerator(name = "quartier_seq", sequenceName = "quartier_seq", allocationSize = 1)
public class Quartier {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "quartier_seq")
private Long id;
private String code;
private String libelle;
@ManyToOne(fetch = FetchType.LAZY)
private Secteur secteur;
public Quartier() {
}
public Quartier(Long id, String label) {
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
public Secteur getSecteur() {
return secteur;
}
public void setSecteur(Secteur value) {
this.secteur = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof Quartier quartier) {
return quartier.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}