package org.bshg.taxe38.ws.dto;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class RueDto {
private Long id;
private String code;
private String libelle;
private QuartierDto quartier;
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
public QuartierDto getQuartier() {
return quartier;
}
public void setQuartier(QuartierDto value) {
this.quartier = value;
}
}