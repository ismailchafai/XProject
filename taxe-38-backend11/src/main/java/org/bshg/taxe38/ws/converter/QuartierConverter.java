package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.Quartier;
import org.bshg.taxe38.ws.dto.QuartierDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class QuartierConverter {
@Autowired private SecteurConverter secteurConverter;
private boolean secteur = true;
protected void configure(boolean value) {
}
public final QuartierDto toDto(Quartier item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final Quartier toItem(QuartierDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<Quartier> toItem(List<QuartierDto> dtos) {
if (dtos == null) return null;
List<Quartier> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<QuartierDto> toDto(List<Quartier> items) {
if (items == null) return null;
List<QuartierDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected Quartier convertToItem(QuartierDto dto) {
var item = new Quartier();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setLibelle(dto.getLibelle());
item.setSecteur(secteurConverter.toItem(dto.getSecteur()));
return item;
}
protected QuartierDto convertToDto(Quartier item) {
var dto = new QuartierDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setLibelle(item.getLibelle());
dto.setSecteur(secteur? secteurConverter.toDto(item.getSecteur()): null);
return dto;
}
public void setSecteur(boolean value) {
this.secteur = value;
}
public void setSecteurConverter(SecteurConverter value) {
this.secteurConverter = value;
}
public SecteurConverter getSecteurConverter() {
return secteurConverter;
}
}