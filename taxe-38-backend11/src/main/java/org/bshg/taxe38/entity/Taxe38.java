package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="taxe38")
@SequenceGenerator(name = "taxe38_seq", sequenceName = "taxe38_seq", allocationSize = 1)
public class Taxe38 {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "taxe38_seq")
private Long id;
private String code;
@ManyToOne(fetch = FetchType.LAZY)
private Redevable redevable;
@ManyToOne(fetch = FetchType.LAZY)
private Locale locale;
private int anne;
@ManyToOne(fetch = FetchType.LAZY)
private Trim trim;
private LocalDateTime datePresentaion;
private int nombreMoisRetard;
private double montantBase;
private double montantRetardPremeirMois;
private double montantTotal;
@OneToMany(mappedBy = "taxe38")
private List<Taxe38Detail> taxe38Details;
public Taxe38() {
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
public Redevable getRedevable() {
return redevable;
}
public void setRedevable(Redevable value) {
this.redevable = value;
}
public Locale getLocale() {
return locale;
}
public void setLocale(Locale value) {
this.locale = value;
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
public LocalDateTime getDatePresentaion() {
return datePresentaion;
}
public void setDatePresentaion(LocalDateTime value) {
this.datePresentaion = value;
}
public int getNombreMoisRetard() {
return nombreMoisRetard;
}
public void setNombreMoisRetard(int value) {
this.nombreMoisRetard = value;
}
public double getMontantBase() {
return montantBase;
}
public void setMontantBase(double value) {
this.montantBase = value;
}
public double getMontantRetardPremeirMois() {
return montantRetardPremeirMois;
}
public void setMontantRetardPremeirMois(double value) {
this.montantRetardPremeirMois = value;
}
public double getMontantTotal() {
return montantTotal;
}
public void setMontantTotal(double value) {
this.montantTotal = value;
}
public List<Taxe38Detail> getTaxe38Details() {
return taxe38Details;
}
public void setTaxe38Details(List<Taxe38Detail> value) {
this.taxe38Details = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof Taxe38 taxe38) {
return taxe38.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}