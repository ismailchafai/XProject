package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.TauxTaxe38;
import org.bshg.taxe38.ws.dto.TauxTaxe38Dto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class TauxTaxe38Converter {
@Autowired private TypeLocale38DetailConverter typeLocale38DetailConverter;
@Autowired private CategorieLocaleConverter categorieLocaleConverter;
private boolean typeLocale38Detail = true;
private boolean categorieLocale = true;
protected void configure(boolean value) {
}
public final TauxTaxe38Dto toDto(TauxTaxe38 item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final TauxTaxe38 toItem(TauxTaxe38Dto d) {
return d != null ? convertToItem(d) : null;
}
public final List<TauxTaxe38> toItem(List<TauxTaxe38Dto> dtos) {
if (dtos == null) return null;
List<TauxTaxe38> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<TauxTaxe38Dto> toDto(List<TauxTaxe38> items) {
if (items == null) return null;
List<TauxTaxe38Dto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected TauxTaxe38 convertToItem(TauxTaxe38Dto dto) {
var item = new TauxTaxe38();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setMontantParMetreCarre(dto.getMontantParMetreCarre());
item.setDateMin(dto.getDateMin());
item.setDateMax(dto.getDateMax());
item.setPourcentagePremierRetard(dto.getPourcentagePremierRetard());
item.setPourcentageAutreMoisRetard(dto.getPourcentageAutreMoisRetard());
item.setTypeLocale38Detail(typeLocale38DetailConverter.toItem(dto.getTypeLocale38Detail()));
item.setCategorieLocale(categorieLocaleConverter.toItem(dto.getCategorieLocale()));
return item;
}
protected TauxTaxe38Dto convertToDto(TauxTaxe38 item) {
var dto = new TauxTaxe38Dto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setMontantParMetreCarre(item.getMontantParMetreCarre());
dto.setDateMin(item.getDateMin());
dto.setDateMax(item.getDateMax());
dto.setPourcentagePremierRetard(item.getPourcentagePremierRetard());
dto.setPourcentageAutreMoisRetard(item.getPourcentageAutreMoisRetard());
dto.setTypeLocale38Detail(typeLocale38Detail? typeLocale38DetailConverter.toDto(item.getTypeLocale38Detail()): null);
dto.setCategorieLocale(categorieLocale? categorieLocaleConverter.toDto(item.getCategorieLocale()): null);
return dto;
}
public void setTypeLocale38Detail(boolean value) {
this.typeLocale38Detail = value;
}
public void setCategorieLocale(boolean value) {
this.categorieLocale = value;
}
public void setTypeLocale38DetailConverter(TypeLocale38DetailConverter value) {
this.typeLocale38DetailConverter = value;
}
public TypeLocale38DetailConverter getTypeLocale38DetailConverter() {
return typeLocale38DetailConverter;
}
public void setCategorieLocaleConverter(CategorieLocaleConverter value) {
this.categorieLocaleConverter = value;
}
public CategorieLocaleConverter getCategorieLocaleConverter() {
return categorieLocaleConverter;
}
}