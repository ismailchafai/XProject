package org.bshg.taxe38.ws.dto;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class LocaleDto {
private Long id;
private String code;
private String complementAdresse;
private RueDto rue;
private RedevableDto redevable;
private CategorieLocaleDto categorieLocale;
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
public String getComplementAdresse() {
return complementAdresse;
}
public void setComplementAdresse(String value) {
this.complementAdresse = value;
}
public RueDto getRue() {
return rue;
}
public void setRue(RueDto value) {
this.rue = value;
}
public RedevableDto getRedevable() {
return redevable;
}
public void setRedevable(RedevableDto value) {
this.redevable = value;
}
public CategorieLocaleDto getCategorieLocale() {
return categorieLocale;
}
public void setCategorieLocale(CategorieLocaleDto value) {
this.categorieLocale = value;
}
}