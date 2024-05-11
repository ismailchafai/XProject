package org.bshg.taxe38.entity;
import jakarta.persistence.*;
import java.time.*;
import java.util.*;
@Entity
@Table(name="tauxtaxe38")
@SequenceGenerator(name = "tauxtaxe38_seq", sequenceName = "tauxtaxe38_seq", allocationSize = 1)
public class TauxTaxe38 {
@Id
@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "tauxtaxe38_seq")
private Long id;
private String code;
private double montantParMetreCarre;
private LocalDateTime dateMin;
private LocalDateTime dateMax;
private double pourcentagePremierRetard;
private double pourcentageAutreMoisRetard;
@ManyToOne(fetch = FetchType.LAZY)
private TypeLocale38Detail typeLocale38Detail;
@ManyToOne(fetch = FetchType.LAZY)
private CategorieLocale categorieLocale;
public TauxTaxe38() {
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
public LocalDateTime getDateMin() {
return dateMin;
}
public void setDateMin(LocalDateTime value) {
this.dateMin = value;
}
public LocalDateTime getDateMax() {
return dateMax;
}
public void setDateMax(LocalDateTime value) {
this.dateMax = value;
}
public double getPourcentagePremierRetard() {
return pourcentagePremierRetard;
}
public void setPourcentagePremierRetard(double value) {
this.pourcentagePremierRetard = value;
}
public double getPourcentageAutreMoisRetard() {
return pourcentageAutreMoisRetard;
}
public void setPourcentageAutreMoisRetard(double value) {
this.pourcentageAutreMoisRetard = value;
}
public TypeLocale38Detail getTypeLocale38Detail() {
return typeLocale38Detail;
}
public void setTypeLocale38Detail(TypeLocale38Detail value) {
this.typeLocale38Detail = value;
}
public CategorieLocale getCategorieLocale() {
return categorieLocale;
}
public void setCategorieLocale(CategorieLocale value) {
this.categorieLocale = value;
}
@Override
public boolean equals(Object object) {
if (object instanceof TauxTaxe38 tauxTaxe38) {
return tauxTaxe38.getId().equals(this.getId());
}
return false;
}
@Override
public int hashCode() {return (id == null) ? 0 : id.hashCode();}
}