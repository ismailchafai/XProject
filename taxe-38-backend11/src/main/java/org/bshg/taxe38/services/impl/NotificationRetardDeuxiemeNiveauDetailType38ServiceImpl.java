package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetailType38;
import org.bshg.taxe38.dao.NotificationRetardDeuxiemeNiveauDetailType38Dao;
import org.bshg.taxe38.services.facade.NotificationRetardDeuxiemeNiveauDetailType38Service;
import org.bshg.taxe38.entity.TypeLocale38Detail;
import org.bshg.taxe38.services.facade.TypeLocale38DetailService;
import org.bshg.taxe38.zutils.service.ServiceHelper;
import org.bshg.taxe38.zutils.pagination.Pagination;
import org.bshg.taxe38.exceptions.NotFoundException;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.ArrayList;
@Service
public class NotificationRetardDeuxiemeNiveauDetailType38ServiceImpl implements NotificationRetardDeuxiemeNiveauDetailType38Service {
//--------------- FIND -------------------------------------
public NotificationRetardDeuxiemeNiveauDetailType38 findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<NotificationRetardDeuxiemeNiveauDetailType38> findAll() {
return dao.findAll();
}
public List<NotificationRetardDeuxiemeNiveauDetailType38> findAllOptimized() {
return findAll();
}
@Override
public Pagination<NotificationRetardDeuxiemeNiveauDetailType38> findPaginated(int page, int size) {
var pageable = PageRequest.of(page, size);
var found = dao.findAll(pageable);
var items = found.stream().toList();
return new Pagination<>(
items,
found.getNumber(),
found.getSize(),
found.getTotalElements(),
found.getTotalPages(),
found.isFirst(),
found.isLast()
);
}
//--------------- CREATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public NotificationRetardDeuxiemeNiveauDetailType38 create(NotificationRetardDeuxiemeNiveauDetailType38 item) {
if (item == null) return null;
// check if typeLocale38 exists
var typeLocale38 = item.getTypeLocale38();
if (typeLocale38 != null) {
if(typeLocale38.getId() == null) item.setTypeLocale38(null);
else {
var found = typeLocale38DetailService.findById(typeLocale38.getId());
if (found == null) throw new NotFoundException("Unknown Given TypeLocale38");
item.setTypeLocale38(found);
}
}
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<NotificationRetardDeuxiemeNiveauDetailType38> create(List<NotificationRetardDeuxiemeNiveauDetailType38> items) {
List<NotificationRetardDeuxiemeNiveauDetailType38> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public NotificationRetardDeuxiemeNiveauDetailType38 update(NotificationRetardDeuxiemeNiveauDetailType38 item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown NotificationRetardDeuxiemeNiveauDetailType38 To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<NotificationRetardDeuxiemeNiveauDetailType38> update(List<NotificationRetardDeuxiemeNiveauDetailType38> items) {
List<NotificationRetardDeuxiemeNiveauDetailType38> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
NotificationRetardDeuxiemeNiveauDetailType38 item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(NotificationRetardDeuxiemeNiveauDetailType38 item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<NotificationRetardDeuxiemeNiveauDetailType38> items) {
if (items == null || items.isEmpty()) return;
items.forEach(this::delete);
}
@Transactional(rollbackFor = Exception.class)
public void deleteByIdIn(List<Long> ids) {
dao.deleteByIdIn(ids);
}
//--------------- FIND AND DELETE BYs ----------------------
@Override
@Transactional(rollbackFor = Exception.class)
public int deleteByTypeLocale38Id(Long id){
if (id == null) return 0;
return dao.deleteByTypeLocale38Id(id);
}
@Override
public List<NotificationRetardDeuxiemeNiveauDetailType38> findByTypeLocale38Id(Long id){
return dao.findByTypeLocale38Id(id);
}
//----------------------------------------------------------
//----------------------------------------------------------
@Autowired private NotificationRetardDeuxiemeNiveauDetailType38Dao dao;
@Lazy @Autowired private TypeLocale38DetailService typeLocale38DetailService;
}