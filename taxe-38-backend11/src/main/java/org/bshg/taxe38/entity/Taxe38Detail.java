package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="taxe38detail")
@SequenceGenerator(name = "taxe38detail_seq", sequenceName = "taxe38detail_seq", allocationSize = 1)
public class Taxe38Detail {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "taxe38detail_seq")
private Long id;
private String code;
private double montantParMetreCarre;
@ManyToOne(fetch = FetchType.LAZY)
private Locale38Detail locale38Detail;
@ManyToOne(fetch = FetchType.LAZY)
private TauxTaxe38 tauxTaxe38;
private double montantBase;
private double montantRetardPremierMois;
private double montantRetardAutreMois;
@ManyToOne(fetch = FetchType.LAZY)
private Taxe38 taxe38;
public Taxe38Detail() {
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
public double getMontantParMetreCarre() {
return montantParMetreCarre;
}
public void setMontantParMetreCarre(double value) {
this.montantParMetreCarre = value;
}
public Locale38Detail getLocale38Detail() {
return locale38Detail;
}
public void setLocale38Detail(Locale38Detail value) {
this.locale38Detail = value;
}
public TauxTaxe38 getTauxTaxe38() {
return tauxTaxe38;
}
public void setTauxTaxe38(TauxTaxe38 value) {
this.tauxTaxe38 = value;
}
public double getMontantBase() {
return montantBase;
}
public void setMontantBase(double value) {
this.montantBase = value;
}
public double getMontantRetardPremierMois() {
return montantRetardPremierMois;
}
public void setMontantRetardPremierMois(double value) {
this.montantRetardPremierMois = value;
}
public double getMontantRetardAutreMois() {
return montantRetardAutreMois;
}
public void setMontantRetardAutreMois(double value) {
this.montantRetardAutreMois = value;
}
public Taxe38 getTaxe38() {
return taxe38;
}
public void setTaxe38(Taxe38 value) {
this.taxe38 = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof Taxe38Detail taxe38Detail) {
return taxe38Detail.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}