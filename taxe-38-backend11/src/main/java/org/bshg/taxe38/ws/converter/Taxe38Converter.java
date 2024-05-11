package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.Taxe38;
import org.bshg.taxe38.ws.dto.Taxe38Dto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class Taxe38Converter {
@Autowired private LocaleConverter localeConverter;
@Autowired private TrimConverter trimConverter;
@Autowired private Taxe38DetailConverter taxe38DetailConverter;
@Autowired private RedevableConverter redevableConverter;
private boolean redevable = true;
private boolean locale = true;
private boolean trim = true;
private boolean taxe38Details = true;
protected void configure(boolean value) {
this.taxe38DetailConverter.setTaxe38(value);
}
public final Taxe38Dto toDto(Taxe38 item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final Taxe38 toItem(Taxe38Dto d) {
return d != null ? convertToItem(d) : null;
}
public final List<Taxe38> toItem(List<Taxe38Dto> dtos) {
if (dtos == null) return null;
List<Taxe38> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<Taxe38Dto> toDto(List<Taxe38> items) {
if (items == null) return null;
List<Taxe38Dto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected Taxe38 convertToItem(Taxe38Dto dto) {
var item = new Taxe38();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setRedevable(redevableConverter.toItem(dto.getRedevable()));
item.setLocale(localeConverter.toItem(dto.getLocale()));
item.setAnne(dto.getAnne());
item.setTrim(trimConverter.toItem(dto.getTrim()));
item.setDatePresentaion(dto.getDatePresentaion());
item.setNombreMoisRetard(dto.getNombreMoisRetard());
item.setMontantBase(dto.getMontantBase());
item.setMontantRetardPremeirMois(dto.getMontantRetardPremeirMois());
item.setMontantTotal(dto.getMontantTotal());
item.setTaxe38Details(taxe38DetailConverter.toItem(dto.getTaxe38Details()));
return item;
}
protected Taxe38Dto convertToDto(Taxe38 item) {
var dto = new Taxe38Dto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setRedevable(redevable? redevableConverter.toDto(item.getRedevable()): null);
dto.setLocale(locale? localeConverter.toDto(item.getLocale()): null);
dto.setAnne(item.getAnne());
dto.setTrim(trim? trimConverter.toDto(item.getTrim()): null);
dto.setDatePresentaion(item.getDatePresentaion());
dto.setNombreMoisRetard(item.getNombreMoisRetard());
dto.setMontantBase(item.getMontantBase());
dto.setMontantRetardPremeirMois(item.getMontantRetardPremeirMois());
dto.setMontantTotal(item.getMontantTotal());
dto.setTaxe38Details(taxe38Details? taxe38DetailConverter.toDto(item.getTaxe38Details()): null);
return dto;
}
public void setRedevable(boolean value) {
this.redevable = value;
}
public void setLocale(boolean value) {
this.locale = value;
}
public void setTrim(boolean value) {
this.trim = value;
}
public void setTaxe38Details(boolean value) {
this.taxe38Details = value;
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
public void setTaxe38DetailConverter(Taxe38DetailConverter value) {
this.taxe38DetailConverter = value;
}
public Taxe38DetailConverter getTaxe38DetailConverter() {
return taxe38DetailConverter;
}
public void setRedevableConverter(RedevableConverter value) {
this.redevableConverter = value;
}
public RedevableConverter getRedevableConverter() {
return redevableConverter;
}
}