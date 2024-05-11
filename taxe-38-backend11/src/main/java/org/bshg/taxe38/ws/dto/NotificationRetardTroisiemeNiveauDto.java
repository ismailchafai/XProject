package org.bshg.taxe38.ws.dto;
import com.fasterxml.jackson.annotation.JsonInclude;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.List;
@JsonInclude(JsonInclude.Include.NON_NULL)
public class NotificationRetardTroisiemeNiveauDto {
private Long id;
private String code;
private LocaleDto locale;
private RedevableDto redevable;
private int anne;
private TrimDto trim;
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
public LocaleDto getLocale() {
return locale;
}
public void setLocale(LocaleDto value) {
this.locale = value;
}
public RedevableDto getRedevable() {
return redevable;
}
public void setRedevable(RedevableDto value) {
this.redevable = value;
}
public int getAnne() {
return anne;
}
public void setAnne(int value) {
this.anne = value;
}
public TrimDto getTrim() {
return trim;
}
public void setTrim(TrimDto value) {
this.trim = value;
}
}