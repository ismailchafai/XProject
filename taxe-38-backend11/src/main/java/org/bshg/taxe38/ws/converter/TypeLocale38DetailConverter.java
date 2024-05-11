package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.TypeLocale38Detail;
import org.bshg.taxe38.ws.dto.TypeLocale38DetailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class TypeLocale38DetailConverter {
protected void configure(boolean value) {
}
public final TypeLocale38DetailDto toDto(TypeLocale38Detail item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final TypeLocale38Detail toItem(TypeLocale38DetailDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<TypeLocale38Detail> toItem(List<TypeLocale38DetailDto> dtos) {
if (dtos == null) return null;
List<TypeLocale38Detail> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<TypeLocale38DetailDto> toDto(List<TypeLocale38Detail> items) {
if (items == null) return null;
List<TypeLocale38DetailDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected TypeLocale38Detail convertToItem(TypeLocale38DetailDto dto) {
var item = new TypeLocale38Detail();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setLibelle(dto.getLibelle());
return item;
}
protected TypeLocale38DetailDto convertToDto(TypeLocale38Detail item) {
var dto = new TypeLocale38DetailDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setLibelle(item.getLibelle());
return dto;
}
}