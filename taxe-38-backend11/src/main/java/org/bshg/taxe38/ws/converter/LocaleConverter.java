package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.ws.dto.LocaleDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class LocaleConverter {
@Autowired private RueConverter rueConverter;
@Autowired private RedevableConverter redevableConverter;
@Autowired private CategorieLocaleConverter categorieLocaleConverter;
private boolean rue = true;
private boolean redevable = true;
private boolean categorieLocale = true;
protected void configure(boolean value) {
}
public final LocaleDto toDto(Locale item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final Locale toItem(LocaleDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<Locale> toItem(List<LocaleDto> dtos) {
if (dtos == null) return null;
List<Locale> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<LocaleDto> toDto(List<Locale> items) {
if (items == null) return null;
List<LocaleDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected Locale convertToItem(LocaleDto dto) {
var item = new Locale();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setComplementAdresse(dto.getComplementAdresse());
item.setRue(rueConverter.toItem(dto.getRue()));
item.setRedevable(redevableConverter.toItem(dto.getRedevable()));
item.setCategorieLocale(categorieLocaleConverter.toItem(dto.getCategorieLocale()));
return item;
}
protected LocaleDto convertToDto(Locale item) {
var dto = new LocaleDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setComplementAdresse(item.getComplementAdresse());
dto.setRue(rue? rueConverter.toDto(item.getRue()): null);
dto.setRedevable(redevable? redevableConverter.toDto(item.getRedevable()): null);
dto.setCategorieLocale(categorieLocale? categorieLocaleConverter.toDto(item.getCategorieLocale()): null);
return dto;
}
public void setRue(boolean value) {
this.rue = value;
}
public void setRedevable(boolean value) {
this.redevable = value;
}
public void setCategorieLocale(boolean value) {
this.categorieLocale = value;
}
public void setRueConverter(RueConverter value) {
this.rueConverter = value;
}
public RueConverter getRueConverter() {
return rueConverter;
}
public void setRedevableConverter(RedevableConverter value) {
this.redevableConverter = value;
}
public RedevableConverter getRedevableConverter() {
return redevableConverter;
}
public void setCategorieLocaleConverter(CategorieLocaleConverter value) {
this.categorieLocaleConverter = value;
}
public CategorieLocaleConverter getCategorieLocaleConverter() {
return categorieLocaleConverter;
}
}