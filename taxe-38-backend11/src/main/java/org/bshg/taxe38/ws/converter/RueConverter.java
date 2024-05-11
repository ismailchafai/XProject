package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.Rue;
import org.bshg.taxe38.ws.dto.RueDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class RueConverter {
@Autowired private QuartierConverter quartierConverter;
private boolean quartier = true;
protected void configure(boolean value) {
}
public final RueDto toDto(Rue item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final Rue toItem(RueDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<Rue> toItem(List<RueDto> dtos) {
if (dtos == null) return null;
List<Rue> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<RueDto> toDto(List<Rue> items) {
if (items == null) return null;
List<RueDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected Rue convertToItem(RueDto dto) {
var item = new Rue();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setLibelle(dto.getLibelle());
item.setQuartier(quartierConverter.toItem(dto.getQuartier()));
return item;
}
protected RueDto convertToDto(Rue item) {
var dto = new RueDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setLibelle(item.getLibelle());
dto.setQuartier(quartier? quartierConverter.toDto(item.getQuartier()): null);
return dto;
}
public void setQuartier(boolean value) {
this.quartier = value;
}
public void setQuartierConverter(QuartierConverter value) {
this.quartierConverter = value;
}
public QuartierConverter getQuartierConverter() {
return quartierConverter;
}
}