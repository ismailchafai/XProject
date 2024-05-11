package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.Taxe38;
import org.bshg.taxe38.dao.Taxe38Dao;
import org.bshg.taxe38.services.facade.Taxe38Service;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.services.facade.RedevableService;
import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.services.facade.LocaleService;
import org.bshg.taxe38.entity.Trim;
import org.bshg.taxe38.services.facade.TrimService;
import org.bshg.taxe38.entity.Taxe38Detail;
import org.bshg.taxe38.services.facade.Taxe38DetailService;
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
public class Taxe38ServiceImpl implements Taxe38Service {
//--------------- FIND -------------------------------------
public Taxe38 findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<Taxe38> findAll() {
return dao.findAll();
}
public List<Taxe38> findAllOptimized() {
return findAll();
}
@Override
public Pagination<Taxe38> findPaginated(int page, int size) {
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
public Taxe38 create(Taxe38 item) {
if (item == null) return null;
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
Taxe38 saved = dao.save(item);
createAssociatedList(saved);
return saved;
}
@Transactional(rollbackFor = Exception.class)
public List<Taxe38> create(List<Taxe38> items) {
List<Taxe38> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public Taxe38 update(Taxe38 item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown Taxe38 To Be Updated!");
Taxe38 saved = dao.save(item);
updateAssociatedList(saved);
return saved;
}
@Transactional(rollbackFor = Exception.class)
public List<Taxe38> update(List<Taxe38> items) {
List<Taxe38> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
Taxe38 item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(Taxe38 item) {
deleteAssociated(item);
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<Taxe38> items) {
if (items == null || items.isEmpty()) return;
items.forEach(this::delete);
}
@Transactional(rollbackFor = Exception.class)
public void deleteByIdIn(List<Long> ids) {
ids.forEach(id -> {
Taxe38 item = findById(id);
if (item != null) {
deleteAssociated(item);
}
});
dao.deleteByIdIn(ids);
}
//--------------- FIND AND DELETE BYs ----------------------
@Override
@Transactional(rollbackFor = Exception.class)
public int deleteByRedevableId(Long id){
if (id == null) return 0;
List<Taxe38> found = findByRedevableId(id);
if (found == null) return 0;
found.forEach(this::deleteAssociated);
return dao.deleteByRedevableId(id);
}
@Override
public List<Taxe38> findByRedevableId(Long id){
return dao.findByRedevableId(id);
}
@Override
@Transactional(rollbackFor = Exception.class)
public int deleteByLocaleId(Long id){
if (id == null) return 0;
List<Taxe38> found = findByLocaleId(id);
if (found == null) return 0;
found.forEach(this::deleteAssociated);
return dao.deleteByLocaleId(id);
}
@Override
public List<Taxe38> findByLocaleId(Long id){
return dao.findByLocaleId(id);
}
@Override
@Transactional(rollbackFor = Exception.class)
public int deleteByTrimId(Long id){
if (id == null) return 0;
List<Taxe38> found = findByTrimId(id);
if (found == null) return 0;
found.forEach(this::deleteAssociated);
return dao.deleteByTrimId(id);
}
@Override
public List<Taxe38> findByTrimId(Long id){
return dao.findByTrimId(id);
}
//----------------------------------------------------------
public void createAssociatedList(Taxe38 item) {
if (item == null || item.getId() == null) return;
ServiceHelper.createList(item, Taxe38::getTaxe38Details, Taxe38Detail::setTaxe38, taxe38DetailService::create);
}
public void updateAssociatedList(Taxe38 item) {
if (item == null || item.getId() == null) return;
ServiceHelper.updateList(
item, taxe38DetailService.findByTaxe38Id(item.getId()),
item.getTaxe38Details(), Taxe38Detail::setTaxe38,
taxe38DetailService::update,
taxe38DetailService::delete
);
}
@Transactional(rollbackFor = Exception.class)
public void deleteAssociated(Taxe38 item) {
deleteAssociatedList(item);
}
public void deleteAssociatedList(Taxe38 item) {
taxe38DetailService.deleteByTaxe38Id(item.getId());
}
//----------------------------------------------------------
@Autowired private Taxe38Dao dao;
@Lazy @Autowired private RedevableService redevableService;
@Lazy @Autowired private LocaleService localeService;
@Lazy @Autowired private TrimService trimService;
@Lazy @Autowired private Taxe38DetailService taxe38DetailService;
}