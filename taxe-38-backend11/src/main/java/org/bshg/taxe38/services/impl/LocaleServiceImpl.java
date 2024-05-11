package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.Locale;
import org.bshg.taxe38.dao.LocaleDao;
import org.bshg.taxe38.services.facade.LocaleService;
import org.bshg.taxe38.services.facade.RueService;
import org.bshg.taxe38.services.facade.RedevableService;
import org.bshg.taxe38.services.facade.CategorieLocaleService;
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
public class LocaleServiceImpl implements LocaleService {
//--------------- FIND -------------------------------------
public Locale findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<Locale> findAll() {
return dao.findAll();
}
public List<Locale> findAllOptimized() {
return findAll();
}
@Override
public Pagination<Locale> findPaginated(int page, int size) {
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
public Locale create(Locale item) {
if (item == null) return null;
// check if rue exists
var rue = item.getRue();
if (rue != null) {
if(rue.getId() == null) item.setRue(null);
else {
var found = rueService.findById(rue.getId());
if (found == null) throw new NotFoundException("Unknown Given Rue");
item.setRue(found);
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
// check if categorieLocale exists
var categorieLocale = item.getCategorieLocale();
if (categorieLocale != null) {
if(categorieLocale.getId() == null) item.setCategorieLocale(null);
else {
var found = categorieLocaleService.findById(categorieLocale.getId());
if (found == null) throw new NotFoundException("Unknown Given CategorieLocale");
item.setCategorieLocale(found);
}
}
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Locale> create(List<Locale> items) {
List<Locale> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public Locale update(Locale item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown Locale To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Locale> update(List<Locale> items) {
List<Locale> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
Locale item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(Locale item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<Locale> items) {
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
public int deleteByRueId(Long id){
if (id == null) return 0;
return dao.deleteByRueId(id);
}
@Override
public List<Locale> findByRueId(Long id){
return dao.findByRueId(id);
}
@Override
@Transactional(rollbackFor = Exception.class)
public int deleteByRedevableId(Long id){
if (id == null) return 0;
return dao.deleteByRedevableId(id);
}
@Override
public List<Locale> findByRedevableId(Long id){
return dao.findByRedevableId(id);
}
@Override
public List<Locale> findByRedevableUserName(String userName){
return dao.findByRedevableUsername(userName);
}
@Override
@Transactional(rollbackFor = Exception.class)
public int deleteByCategorieLocaleId(Long id){
if (id == null) return 0;
return dao.deleteByCategorieLocaleId(id);
}
@Override
public List<Locale> findByCategorieLocaleId(Long id){
return dao.findByCategorieLocaleId(id);
}
//----------------------------------------------------------
//----------------------------------------------------------
@Autowired private LocaleDao dao;
@Lazy @Autowired private RueService rueService;
@Lazy @Autowired private RedevableService redevableService;
@Lazy @Autowired private CategorieLocaleService categorieLocaleService;
}