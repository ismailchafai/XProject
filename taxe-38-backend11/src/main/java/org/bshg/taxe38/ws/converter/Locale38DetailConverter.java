package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.Locale38Detail;
import org.bshg.taxe38.ws.dto.Locale38DetailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class Locale38DetailConverter {
@Autowired private TypeLocale38DetailConverter typeLocale38DetailConverter;
private boolean typeLocale38Detail = true;
protected void configure(boolean value) {
}
public final Locale38DetailDto toDto(Locale38Detail item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final Locale38Detail toItem(Locale38DetailDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<Locale38Detail> toItem(List<Locale38DetailDto> dtos) {
if (dtos == null) return null;
List<Locale38Detail> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<Locale38DetailDto> toDto(List<Locale38Detail> items) {
if (items == null) return null;
List<Locale38DetailDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected Locale38Detail convertToItem(Locale38DetailDto dto) {
var item = new Locale38Detail();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setSuperficie(dto.getSuperficie());
item.setTypeLocale38Detail(typeLocale38DetailConverter.toItem(dto.getTypeLocale38Detail()));
item.setActive(dto.isActive());
return item;
}
protected Locale38DetailDto convertToDto(Locale38Detail item) {
var dto = new Locale38DetailDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setSuperficie(item.getSuperficie());
dto.setTypeLocale38Detail(typeLocale38Detail? typeLocale38DetailConverter.toDto(item.getTypeLocale38Detail()): null);
dto.setActive(item.isActive());
return dto;
}
public void setTypeLocale38Detail(boolean value) {
this.typeLocale38Detail = value;
}
public void setTypeLocale38DetailConverter(TypeLocale38DetailConverter value) {
this.typeLocale38DetailConverter = value;
}
public TypeLocale38DetailConverter getTypeLocale38DetailConverter() {
return typeLocale38DetailConverter;
}
}