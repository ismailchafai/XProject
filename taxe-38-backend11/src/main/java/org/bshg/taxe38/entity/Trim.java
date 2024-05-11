package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="trim")
@SequenceGenerator(name = "trim_seq", sequenceName = "trim_seq", allocationSize = 1)
public class Trim {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "trim_seq")
private Long id;
private int numero;
private String libelle;
public Trim() {
}
public Trim(Long id, String label) {
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
public int getNumero() {
return numero;
}
public void setNumero(int value) {
this.numero = value;
}
public String getLibelle() {
return libelle;
}
public void setLibelle(String value) {
this.libelle = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof Trim trim) {
return trim.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}