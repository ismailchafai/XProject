package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetail;
import org.bshg.taxe38.ws.dto.NotificationRetardDeuxiemeNiveauDetailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class NotificationRetardDeuxiemeNiveauDetailConverter {
@Autowired private TrimConverter trimConverter;
private boolean trim = true;
protected void configure(boolean value) {
}
public final NotificationRetardDeuxiemeNiveauDetailDto toDto(NotificationRetardDeuxiemeNiveauDetail item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final NotificationRetardDeuxiemeNiveauDetail toItem(NotificationRetardDeuxiemeNiveauDetailDto d) {
return d != null ? convertToItem(d) : null;
}
public final List<NotificationRetardDeuxiemeNiveauDetail> toItem(List<NotificationRetardDeuxiemeNiveauDetailDto> dtos) {
if (dtos == null) return null;
List<NotificationRetardDeuxiemeNiveauDetail> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<NotificationRetardDeuxiemeNiveauDetailDto> toDto(List<NotificationRetardDeuxiemeNiveauDetail> items) {
if (items == null) return null;
List<NotificationRetardDeuxiemeNiveauDetailDto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected NotificationRetardDeuxiemeNiveauDetail convertToItem(NotificationRetardDeuxiemeNiveauDetailDto dto) {
var item = new NotificationRetardDeuxiemeNiveauDetail();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setTrim(trimConverter.toItem(dto.getTrim()));
item.setMontantBase(dto.getMontantBase());
item.setMontantRetardPremierMois(dto.getMontantRetardPremierMois());
item.setMontantRetardAutreMois(dto.getMontantRetardAutreMois());
item.setMontantTotal(dto.getMontantTotal());
return item;
}
protected NotificationRetardDeuxiemeNiveauDetailDto convertToDto(NotificationRetardDeuxiemeNiveauDetail item) {
var dto = new NotificationRetardDeuxiemeNiveauDetailDto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setTrim(trim? trimConverter.toDto(item.getTrim()): null);
dto.setMontantBase(item.getMontantBase());
dto.setMontantRetardPremierMois(item.getMontantRetardPremierMois());
dto.setMontantRetardAutreMois(item.getMontantRetardAutreMois());
dto.setMontantTotal(item.getMontantTotal());
return dto;
}
public void setTrim(boolean value) {
this.trim = value;
}
public void setTrimConverter(TrimConverter value) {
this.trimConverter = value;
}
public TrimConverter getTrimConverter() {
return trimConverter;
}
}