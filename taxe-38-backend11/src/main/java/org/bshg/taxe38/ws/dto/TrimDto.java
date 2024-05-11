package org.bshg.taxe38.ws.dto;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TrimDto {
private Long id;
private int numero;
private String libelle;
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
}