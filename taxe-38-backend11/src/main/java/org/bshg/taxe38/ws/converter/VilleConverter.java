package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.Ville;
import org.bshg.taxe38.ws.dto.VilleDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class VilleConverter {
protected void configure(boolean value) {
}
public final VilleDto toDto(Ville item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final Ville toItem(VilleDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<Ville> toItem(List<VilleDto> dtos) {
if (dtos == null) return null;
List<Ville> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<VilleDto> toDto(List<Ville> items) {
if (items == null) return null;
List<VilleDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected Ville convertToItem(VilleDto dto) {
var item = new Ville();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setLibelle(dto.getLibelle());
return item;
}
protected VilleDto convertToDto(Ville item) {
var dto = new VilleDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setLibelle(item.getLibelle());
return dto;
}
}