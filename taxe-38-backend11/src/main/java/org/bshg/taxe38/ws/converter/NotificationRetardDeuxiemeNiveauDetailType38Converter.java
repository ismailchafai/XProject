package org.bshg.taxe38.ws.converter;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetailType38;
import org.bshg.taxe38.ws.dto.NotificationRetardDeuxiemeNiveauDetailType38Dto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.ArrayList;
import java.util.List;
@Component
public class NotificationRetardDeuxiemeNiveauDetailType38Converter {
@Autowired private TypeLocale38DetailConverter typeLocale38DetailConverter;
private boolean typeLocale38 = true;
protected void configure(boolean value) {
}
public final NotificationRetardDeuxiemeNiveauDetailType38Dto toDto(NotificationRetardDeuxiemeNiveauDetailType38 item) {
this.configure(false);
var dto = item != null ? convertToDto(item) : null;
this.configure(true);
return dto;
}
public final NotificationRetardDeuxiemeNiveauDetailType38 toItem(NotificationRetardDeuxiemeNiveauDetailType38Dto d) {
return d != null ? convertToItem(d) : null;
}
public final List<NotificationRetardDeuxiemeNiveauDetailType38> toItem(List<NotificationRetardDeuxiemeNiveauDetailType38Dto> dtos) {
if (dtos == null) return null;
List<NotificationRetardDeuxiemeNiveauDetailType38> list = new ArrayList<>();
dtos.forEach(it -> list.add(toItem(it)));
return list;
}
public final List<NotificationRetardDeuxiemeNiveauDetailType38Dto> toDto(List<NotificationRetardDeuxiemeNiveauDetailType38> items) {
if (items == null) return null;
List<NotificationRetardDeuxiemeNiveauDetailType38Dto> list = new ArrayList<>();
items.forEach(it -> list.add(toDto(it)));
return list;
}
protected NotificationRetardDeuxiemeNiveauDetailType38 convertToItem(NotificationRetardDeuxiemeNiveauDetailType38Dto dto) {
var item = new NotificationRetardDeuxiemeNiveauDetailType38();
item.setId(dto.getId());
item.setCode(dto.getCode());
item.setTypeLocale38(typeLocale38DetailConverter.toItem(dto.getTypeLocale38()));
item.setMontantBase(dto.getMontantBase());
item.setMontantRetardPremierMois(dto.getMontantRetardPremierMois());
item.setMontantRetardAutreMois(dto.getMontantRetardAutreMois());
item.setMontantTotal(dto.getMontantTotal());
return item;
}
protected NotificationRetardDeuxiemeNiveauDetailType38Dto convertToDto(NotificationRetardDeuxiemeNiveauDetailType38 item) {
var dto = new NotificationRetardDeuxiemeNiveauDetailType38Dto();
dto.setId(item.getId());
dto.setCode(item.getCode());
dto.setTypeLocale38(typeLocale38? typeLocale38DetailConverter.toDto(item.getTypeLocale38()): null);
dto.setMontantBase(item.getMontantBase());
dto.setMontantRetardPremierMois(item.getMontantRetardPremierMois());
dto.setMontantRetardAutreMois(item.getMontantRetardAutreMois());
dto.setMontantTotal(item.getMontantTotal());
return dto;
}
public void setTypeLocale38(boolean value) {
this.typeLocale38 = value;
}
public void setTypeLocale38DetailConverter(TypeLocale38DetailConverter value) {
this.typeLocale38DetailConverter = value;
}
public TypeLocale38DetailConverter getTypeLocale38DetailConverter() {
return typeLocale38DetailConverter;
}
}