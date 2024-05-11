package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.NotificationRetardDeuxiemeNiveauDetail;
import org.bshg.taxe38.dao.NotificationRetardDeuxiemeNiveauDetailDao;
import org.bshg.taxe38.services.facade.NotificationRetardDeuxiemeNiveauDetailService;
import org.bshg.taxe38.entity.Trim;
import org.bshg.taxe38.services.facade.TrimService;
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
public class NotificationRetardDeuxiemeNiveauDetailServiceImpl implements NotificationRetardDeuxiemeNiveauDetailService {
//--------------- FIND -------------------------------------
public NotificationRetardDeuxiemeNiveauDetail findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<NotificationRetardDeuxiemeNiveauDetail> findAll() {
return dao.findAll();
}
public List<NotificationRetardDeuxiemeNiveauDetail> findAllOptimized() {
return findAll();
}
@Override
public Pagination<NotificationRetardDeuxiemeNiveauDetail> findPaginated(int page, int size) {
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
public NotificationRetardDeuxiemeNiveauDetail create(NotificationRetardDeuxiemeNiveauDetail item) {
if (item == null) return null;
// check if trim exists
var trim = item.getTrim();
if (trim != null) {
if(trim.getId() == null) item.setTrim(null);
else {
var found = trimService.findById(trim.getId());
if (found == null) throw new NotFoundException("Unknown Given Trim");
item.setTrim(found);
}
}
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<NotificationRetardDeuxiemeNiveauDetail> create(List<NotificationRetardDeuxiemeNiveauDetail> items) {
List<NotificationRetardDeuxiemeNiveauDetail> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public NotificationRetardDeuxiemeNiveauDetail update(NotificationRetardDeuxiemeNiveauDetail item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown NotificationRetardDeuxiemeNiveauDetail To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<NotificationRetardDeuxiemeNiveauDetail> update(List<NotificationRetardDeuxiemeNiveauDetail> items) {
List<NotificationRetardDeuxiemeNiveauDetail> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
NotificationRetardDeuxiemeNiveauDetail item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(NotificationRetardDeuxiemeNiveauDetail item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<NotificationRetardDeuxiemeNiveauDetail> items) {
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
public int deleteByTrimId(Long id){
if (id == null) return 0;
return dao.deleteByTrimId(id);
}
@Override
public List<NotificationRetardDeuxiemeNiveauDetail> findByTrimId(Long id){
return dao.findByTrimId(id);
}
//----------------------------------------------------------
//----------------------------------------------------------
@Autowired private NotificationRetardDeuxiemeNiveauDetailDao dao;
@Lazy @Autowired private TrimService trimService;
}