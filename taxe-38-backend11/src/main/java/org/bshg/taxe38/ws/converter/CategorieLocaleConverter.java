package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.CategorieLocale;
import org.bshg.taxe38.ws.dto.CategorieLocaleDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class CategorieLocaleConverter {
protected void configure(boolean value) {
}
public final CategorieLocaleDto toDto(CategorieLocale item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final CategorieLocale toItem(CategorieLocaleDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<CategorieLocale> toItem(List<CategorieLocaleDto> dtos) {
if (dtos == null) return null;
List<CategorieLocale> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<CategorieLocaleDto> toDto(List<CategorieLocale> items) {
if (items == null) return null;
List<CategorieLocaleDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected CategorieLocale convertToItem(CategorieLocaleDto dto) {
var item = new CategorieLocale();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setLibelle(dto.getLibelle());
return item;
}
protected CategorieLocaleDto convertToDto(CategorieLocale item) {
var dto = new CategorieLocaleDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setLibelle(item.getLibelle());
return dto;
}
}