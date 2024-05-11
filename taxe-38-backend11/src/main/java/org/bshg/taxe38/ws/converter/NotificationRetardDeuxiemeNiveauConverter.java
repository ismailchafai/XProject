package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveau;
import org.bshg.taxe38.ws.dto.NotificationRetardDeuxiemeNiveauDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class NotificationRetardDeuxiemeNiveauConverter {
@Autowired private LocaleConverter localeConverter;
@Autowired private RedevableConverter redevableConverter;
private boolean locale = true;
private boolean redevable = true;
protected void configure(boolean value) {
}
public final NotificationRetardDeuxiemeNiveauDto toDto(NotificationRetardDeuxiemeNiveau item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final NotificationRetardDeuxiemeNiveau toItem(NotificationRetardDeuxiemeNiveauDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<NotificationRetardDeuxiemeNiveau> toItem(List<NotificationRetardDeuxiemeNiveauDto> dtos) {
if (dtos == null) return null;
List<NotificationRetardDeuxiemeNiveau> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<NotificationRetardDeuxiemeNiveauDto> toDto(List<NotificationRetardDeuxiemeNiveau> items) {
if (items == null) return null;
List<NotificationRetardDeuxiemeNiveauDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected NotificationRetardDeuxiemeNiveau convertToItem(NotificationRetardDeuxiemeNiveauDto dto) {
var item = new NotificationRetardDeuxiemeNiveau();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setLocale(localeConverter.toItem(dto.getLocale()));
item.setRedevable(redevableConverter.toItem(dto.getRedevable()));
item.setAnne(dto.getAnne());
item.setMontantBase(dto.getMontantBase());
item.setMontantRetardPremierMois(dto.getMontantRetardPremierMois());
item.setMontantRetardAutreMois(dto.getMontantRetardAutreMois());
item.setMontantTotal(dto.getMontantTotal());
return item;
}
protected NotificationRetardDeuxiemeNiveauDto convertToDto(NotificationRetardDeuxiemeNiveau item) {
var dto = new NotificationRetardDeuxiemeNiveauDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setLocale(locale? localeConverter.toDto(item.getLocale()): null);
dto.setRedevable(redevable? redevableConverter.toDto(item.getRedevable()): null);
dto.setAnne(item.getAnne());
dto.setMontantBase(item.getMontantBase());
dto.setMontantRetardPremierMois(item.getMontantRetardPremierMois());
dto.setMontantRetardAutreMois(item.getMontantRetardAutreMois());
dto.setMontantTotal(item.getMontantTotal());
return dto;
}
public void setLocale(boolean value) {
this.locale = value;
}
public void setRedevable(boolean value) {
this.redevable = value;
}
public void setLocaleConverter(LocaleConverter value) {
this.localeConverter = value;
}
public LocaleConverter getLocaleConverter() {
return localeConverter;
}
public void setRedevableConverter(RedevableConverter value) {
this.redevableConverter = value;
}
public RedevableConverter getRedevableConverter() {
return redevableConverter;
}
}