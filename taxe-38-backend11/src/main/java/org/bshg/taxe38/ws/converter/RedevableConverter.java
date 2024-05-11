package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.ws.dto.RedevableDto;
import org.bshg.taxe38.zsecurity.ws.converter.AppUserConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class RedevableConverter {
@Autowired private AppUserConverter appUserConverter;
protected void configure(boolean value) {
}
public final RedevableDto toDto(Redevable item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final Redevable toItem(RedevableDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<Redevable> toItem(List<RedevableDto> dtos) {
if (dtos == null) return null;
List<Redevable> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<RedevableDto> toDto(List<Redevable> items) {
if (items == null) return null;
List<RedevableDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected Redevable convertToItem(RedevableDto dto) {
var item = new Redevable();
appUserConverter.convertToChildItem(dto, item);
item.setCin(dto.getCin());
item.setFirstName(dto.getFirstName());
item.setLastName(dto.getLastName());
return item;
}
protected RedevableDto convertToDto(Redevable item) {
var dto = new RedevableDto();
appUserConverter.convertToChildDto(item, dto);
dto.setCin(item.getCin());
dto.setFirstName(item.getFirstName());
dto.setLastName(item.getLastName());
return dto;
}
}