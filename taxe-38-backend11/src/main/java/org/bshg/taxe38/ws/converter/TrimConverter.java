package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.Trim;
import org.bshg.taxe38.ws.dto.TrimDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class TrimConverter {
protected void configure(boolean value) {
}
public final TrimDto toDto(Trim item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final Trim toItem(TrimDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<Trim> toItem(List<TrimDto> dtos) {
if (dtos == null) return null;
List<Trim> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<TrimDto> toDto(List<Trim> items) {
if (items == null) return null;
List<TrimDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected Trim convertToItem(TrimDto dto) {
var item = new Trim();
item.setId(dto.getId());
item.setNumero(dto.getNumero());
item.setLibelle(dto.getLibelle());
return item;
}
protected TrimDto convertToDto(Trim item) {
var dto = new TrimDto();
dto.setId(item.getId());
dto.setNumero(item.getNumero());
dto.setLibelle(item.getLibelle());
return dto;
}
}