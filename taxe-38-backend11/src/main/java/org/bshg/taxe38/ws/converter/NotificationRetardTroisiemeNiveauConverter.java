package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.NotificationRetardTroisiemeNiveau;
import org.bshg.taxe38.ws.dto.NotificationRetardTroisiemeNiveauDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class NotificationRetardTroisiemeNiveauConverter {
@Autowired private LocaleConverter localeConverter;
@Autowired private TrimConverter trimConverter;
@Autowired private RedevableConverter redevableConverter;
private boolean locale = true;
private boolean redevable = true;
private boolean trim = true;
protected void configure(boolean value) {
}
public final NotificationRetardTroisiemeNiveauDto toDto(NotificationRetardTroisiemeNiveau item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final NotificationRetardTroisiemeNiveau toItem(NotificationRetardTroisiemeNiveauDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<NotificationRetardTroisiemeNiveau> toItem(List<NotificationRetardTroisiemeNiveauDto> dtos) {
if (dtos == null) return null;
List<NotificationRetardTroisiemeNiveau> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<NotificationRetardTroisiemeNiveauDto> toDto(List<NotificationRetardTroisiemeNiveau> items) {
if (items == null) return null;
List<NotificationRetardTroisiemeNiveauDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected NotificationRetardTroisiemeNiveau convertToItem(NotificationRetardTroisiemeNiveauDto dto) {
var item = new NotificationRetardTroisiemeNiveau();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setLocale(localeConverter.toItem(dto.getLocale()));
item.setRedevable(redevableConverter.toItem(dto.getRedevable()));
item.setAnne(dto.getAnne());
item.setTrim(trimConverter.toItem(dto.getTrim()));
return item;
}
protected NotificationRetardTroisiemeNiveauDto convertToDto(NotificationRetardTroisiemeNiveau item) {
var dto = new NotificationRetardTroisiemeNiveauDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setLocale(locale? localeConverter.toDto(item.getLocale()): null);
dto.setRedevable(redevable? redevableConverter.toDto(item.getRedevable()): null);
dto.setAnne(item.getAnne());
dto.setTrim(trim? trimConverter.toDto(item.getTrim()): null);
return dto;
}
public void setLocale(boolean value) {
this.locale = value;
}
public void setRedevable(boolean value) {
this.redevable = value;
}
public void setTrim(boolean value) {
this.trim = value;
}
public void setLocaleConverter(LocaleConverter value) {
this.localeConverter = value;
}
public LocaleConverter getLocaleConverter() {
return localeConverter;
}
public void setTrimConverter(TrimConverter value) {
this.trimConverter = value;
}
public TrimConverter getTrimConverter() {
return trimConverter;
}
public void setRedevableConverter(RedevableConverter value) {
this.redevableConverter = value;
}
public RedevableConverter getRedevableConverter() {
return redevableConverter;
}
}