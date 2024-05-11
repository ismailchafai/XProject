package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.TauxTaxe38;
import org.bshg.taxe38.dao.TauxTaxe38Dao;
import org.bshg.taxe38.services.facade.TauxTaxe38Service;
import org.bshg.taxe38.entity.TypeLocale38Detail;
import org.bshg.taxe38.services.facade.TypeLocale38DetailService;
import org.bshg.taxe38.entity.CategorieLocale;
import org.bshg.taxe38.services.facade.CategorieLocaleService;
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
public class TauxTaxe38ServiceImpl implements TauxTaxe38Service {
//--------------- FIND -------------------------------------
public TauxTaxe38 findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<TauxTaxe38> findAll() {
return dao.findAll();
}
public List<TauxTaxe38> findAllOptimized() {
return findAll();
}
@Override
public Pagination<TauxTaxe38> findPaginated(int page, int size) {
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
public TauxTaxe38 create(TauxTaxe38 item) {
if (item == null) return null;
// check if typeLocale38Detail exists
var typeLocale38Detail = item.getTypeLocale38Detail();
if (typeLocale38Detail != null) {
if(typeLocale38Detail.getId() == null) item.setTypeLocale38Detail(null);
else {
var found = typeLocale38DetailService.findById(typeLocale38Detail.getId());
if (found == null) throw new NotFoundException("Unknown Given TypeLocale38Detail");
item.setTypeLocale38Detail(found);
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
public List<TauxTaxe38> create(List<TauxTaxe38> items) {
List<TauxTaxe38> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public TauxTaxe38 update(TauxTaxe38 item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown TauxTaxe38 To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<TauxTaxe38> update(List<TauxTaxe38> items) {
List<TauxTaxe38> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
TauxTaxe38 item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(TauxTaxe38 item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<TauxTaxe38> items) {
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
public int deleteByTypeLocale38DetailId(Long id){
if (id == null) return 0;
return dao.deleteByTypeLocale38DetailId(id);
}
@Override
public List<TauxTaxe38> findByTypeLocale38DetailId(Long id){
return dao.findByTypeLocale38DetailId(id);
}
@Override
@Transactional(rollbackFor = Exception.class)
public int deleteByCategorieLocaleId(Long id){
if (id == null) return 0;
return dao.deleteByCategorieLocaleId(id);
}
@Override
public List<TauxTaxe38> findByCategorieLocaleId(Long id){
return dao.findByCategorieLocaleId(id);
}
//----------------------------------------------------------
//----------------------------------------------------------
@Autowired private TauxTaxe38Dao dao;
@Lazy @Autowired private TypeLocale38DetailService typeLocale38DetailService;
@Lazy @Autowired private CategorieLocaleService categorieLocaleService;
}