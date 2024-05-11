package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.Taxe38Detail;
import org.bshg.taxe38.ws.dto.Taxe38DetailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class Taxe38DetailConverter {
@Autowired private Locale38DetailConverter locale38DetailConverter;
@Autowired private Taxe38Converter taxe38Converter;
@Autowired private TauxTaxe38Converter tauxTaxe38Converter;
private boolean locale38Detail = true;
private boolean tauxTaxe38 = true;
private boolean taxe38 = true;
protected void configure(boolean value) {
this.taxe38Converter.setTaxe38Details(value);
}
public final Taxe38DetailDto toDto(Taxe38Detail item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final Taxe38Detail toItem(Taxe38DetailDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<Taxe38Detail> toItem(List<Taxe38DetailDto> dtos) {
if (dtos == null) return null;
List<Taxe38Detail> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<Taxe38DetailDto> toDto(List<Taxe38Detail> items) {
if (items == null) return null;
List<Taxe38DetailDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected Taxe38Detail convertToItem(Taxe38DetailDto dto) {
var item = new Taxe38Detail();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setMontantParMetreCarre(dto.getMontantParMetreCarre());
item.setLocale38Detail(locale38DetailConverter.toItem(dto.getLocale38Detail()));
item.setTauxTaxe38(tauxTaxe38Converter.toItem(dto.getTauxTaxe38()));
item.setMontantBase(dto.getMontantBase());
item.setMontantRetardPremierMois(dto.getMontantRetardPremierMois());
item.setMontantRetardAutreMois(dto.getMontantRetardAutreMois());
item.setTaxe38(taxe38Converter.toItem(dto.getTaxe38()));
return item;
}
protected Taxe38DetailDto convertToDto(Taxe38Detail item) {
var dto = new Taxe38DetailDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setMontantParMetreCarre(item.getMontantParMetreCarre());
dto.setLocale38Detail(locale38Detail? locale38DetailConverter.toDto(item.getLocale38Detail()): null);
dto.setTauxTaxe38(tauxTaxe38? tauxTaxe38Converter.toDto(item.getTauxTaxe38()): null);
dto.setMontantBase(item.getMontantBase());
dto.setMontantRetardPremierMois(item.getMontantRetardPremierMois());
dto.setMontantRetardAutreMois(item.getMontantRetardAutreMois());
dto.setTaxe38(taxe38? taxe38Converter.toDto(item.getTaxe38()): null);
return dto;
}
public void setLocale38Detail(boolean value) {
this.locale38Detail = value;
}
public void setTauxTaxe38(boolean value) {
this.tauxTaxe38 = value;
}
public void setTaxe38(boolean value) {
this.taxe38 = value;
}
public void setLocale38DetailConverter(Locale38DetailConverter value) {
this.locale38DetailConverter = value;
}
public Locale38DetailConverter getLocale38DetailConverter() {
return locale38DetailConverter;
}
public void setTaxe38Converter(Taxe38Converter value) {
this.taxe38Converter = value;
}
public Taxe38Converter getTaxe38Converter() {
return taxe38Converter;
}
public void setTauxTaxe38Converter(TauxTaxe38Converter value) {
this.tauxTaxe38Converter = value;
}
public TauxTaxe38Converter getTauxTaxe38Converter() {
return tauxTaxe38Converter;
}
}