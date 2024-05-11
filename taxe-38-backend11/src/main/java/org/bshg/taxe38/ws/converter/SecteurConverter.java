package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.Secteur;
import org.bshg.taxe38.ws.dto.SecteurDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class SecteurConverter {
@Autowired private VilleConverter villeConverter;
private boolean ville = true;
protected void configure(boolean value) {
}
public final SecteurDto toDto(Secteur item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final Secteur toItem(SecteurDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<Secteur> toItem(List<SecteurDto> dtos) {
if (dtos == null) return null;
List<Secteur> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<SecteurDto> toDto(List<Secteur> items) {
if (items == null) return null;
List<SecteurDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected Secteur convertToItem(SecteurDto dto) {
var item = new Secteur();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setLibelle(dto.getLibelle());
item.setVille(villeConverter.toItem(dto.getVille()));
return item;
}
protected SecteurDto convertToDto(Secteur item) {
var dto = new SecteurDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setLibelle(item.getLibelle());
dto.setVille(ville? villeConverter.toDto(item.getVille()): null);
return dto;
}
public void setVille(boolean value) {
this.ville = value;
}
public void setVilleConverter(VilleConverter value) {
this.villeConverter = value;
}
public VilleConverter getVilleConverter() {
return villeConverter;
}
}