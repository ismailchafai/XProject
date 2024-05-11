package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.NotificationRetardPremierNiveau;
import org.bshg.taxe38.ws.dto.NotificationRetardPremierNiveauDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class NotificationRetardPremierNiveauConverter {
@Autowired private LocaleConverter localeConverter;
@Autowired private RedevableConverter redevableConverter;
private boolean locale = true;
private boolean redevable = true;
protected void configure(boolean value) {
}
public final NotificationRetardPremierNiveauDto toDto(NotificationRetardPremierNiveau item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final NotificationRetardPremierNiveau toItem(NotificationRetardPremierNiveauDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<NotificationRetardPremierNiveau> toItem(List<NotificationRetardPremierNiveauDto> dtos) {
if (dtos == null) return null;
List<NotificationRetardPremierNiveau> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<NotificationRetardPremierNiveauDto> toDto(List<NotificationRetardPremierNiveau> items) {
if (items == null) return null;
List<NotificationRetardPremierNiveauDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected NotificationRetardPremierNiveau convertToItem(NotificationRetardPremierNiveauDto dto) {
var item = new NotificationRetardPremierNiveau();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setLocale(localeConverter.toItem(dto.getLocale()));
item.setRedevable(redevableConverter.toItem(dto.getRedevable()));
item.setAnne(dto.getAnne());
item.setMontantBase(dto.getMontantBase());
return item;
}
protected NotificationRetardPremierNiveauDto convertToDto(NotificationRetardPremierNiveau item) {
var dto = new NotificationRetardPremierNiveauDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setLocale(locale? localeConverter.toDto(item.getLocale()): null);
dto.setRedevable(redevable? redevableConverter.toDto(item.getRedevable()): null);
dto.setAnne(item.getAnne());
dto.setMontantBase(item.getMontantBase());
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