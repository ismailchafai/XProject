package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.NotificationRetardPremierNiveau;
import org.bshg.taxe38.dao.NotificationRetardPremierNiveauDao;
import org.bshg.taxe38.services.facade.NotificationRetardPremierNiveauService;
import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.services.facade.LocaleService;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.services.facade.RedevableService;
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
public class NotificationRetardPremierNiveauServiceImpl implements NotificationRetardPremierNiveauService {
//--------------- FIND -------------------------------------
public NotificationRetardPremierNiveau findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<NotificationRetardPremierNiveau> findAll() {
return dao.findAll();
}
public List<NotificationRetardPremierNiveau> findAllOptimized() {
return findAll();
}
@Override
public Pagination<NotificationRetardPremierNiveau> findPaginated(int page, int size) {
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
public NotificationRetardPremierNiveau create(NotificationRetardPremierNiveau item) {
if (item == null) return null;
// check if locale exists
var locale = item.getLocale();
if (locale != null) {
if(locale.getId() == null) item.setLocale(null);
else {
var found = localeService.findById(locale.getId());
if (found == null) throw new NotFoundException("Unknown Given Locale");
item.setLocale(found);
}
}
// check if redevable exists
var redevable = item.getRedevable();
if (redevable != null) {
if(redevable.getId() == null) item.setRedevable(null);
else {
var found = redevableService.findById(redevable.getId());
if (found == null) throw new NotFoundException("Unknown Given Redevable");
item.setRedevable(found);
}
}
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<NotificationRetardPremierNiveau> create(List<NotificationRetardPremierNiveau> items) {
List<NotificationRetardPremierNiveau> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public NotificationRetardPremierNiveau update(NotificationRetardPremierNiveau item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown NotificationRetardPremierNiveau To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<NotificationRetardPremierNiveau> update(List<NotificationRetardPremierNiveau> items) {
List<NotificationRetardPremierNiveau> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
NotificationRetardPremierNiveau item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(NotificationRetardPremierNiveau item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<NotificationRetardPremierNiveau> items) {
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
public int deleteByLocaleId(Long id){
if (id == null) return 0;
return dao.deleteByLocaleId(id);
}
@Override
public List<NotificationRetardPremierNiveau> findByLocaleId(Long id){
return dao.findByLocaleId(id);
}
@Override
@Transactional(rollbackFor = Exception.class)
public int deleteByRedevableId(Long id){
if (id == null) return 0;
return dao.deleteByRedevableId(id);
}
@Override
public List<NotificationRetardPremierNiveau> findByRedevableId(Long id){
return dao.findByRedevableId(id);
}
//----------------------------------------------------------
//----------------------------------------------------------
@Autowired private NotificationRetardPremierNiveauDao dao;
@Lazy @Autowired private LocaleService localeService;
@Lazy @Autowired private RedevableService redevableService;
}