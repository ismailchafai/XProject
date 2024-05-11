package org.bshg.taxe38.ws.dto;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Locale38DetailDto {
private Long id;
private String code;
private double superficie;
private TypeLocale38DetailDto typeLocale38Detail;
private boolean active;
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
public double getSuperficie() {
return superficie;
}
public void setSuperficie(double value) {
this.superficie = value;
}
public TypeLocale38DetailDto getTypeLocale38Detail() {
return typeLocale38Detail;
}
public void setTypeLocale38Detail(TypeLocale38DetailDto value) {
this.typeLocale38Detail = value;
}
public boolean isActive() {
return active;
}
public void setActive(boolean value) {
this.active = value;
}
}