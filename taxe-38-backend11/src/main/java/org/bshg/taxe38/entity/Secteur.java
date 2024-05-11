package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="secteur")
@SequenceGenerator(name = "secteur_seq", sequenceName = "secteur_seq", allocationSize = 1)
public class Secteur {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "secteur_seq")
private Long id;
private String code;
private String libelle;
@ManyToOne(fetch = FetchType.LAZY)
private Ville ville;
public Secteur() {
}
public Secteur(Long id, String label) {
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
public Ville getVille() {
return ville;
}
public void setVille(Ville value) {
this.ville = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof Secteur secteur) {
return secteur.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}