package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.Taxe38Detail;
import org.bshg.taxe38.dao.Taxe38DetailDao;
import org.bshg.taxe38.services.facade.Taxe38DetailService;
import org.bshg.taxe38.entity.Locale38Detail;
import org.bshg.taxe38.services.facade.Locale38DetailService;
import org.bshg.taxe38.entity.TauxTaxe38;
import org.bshg.taxe38.services.facade.TauxTaxe38Service;
import org.bshg.taxe38.entity.Taxe38;
import org.bshg.taxe38.services.facade.Taxe38Service;
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
public class Taxe38DetailServiceImpl implements Taxe38DetailService {
//--------------- FIND -------------------------------------
public Taxe38Detail findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<Taxe38Detail> findAll() {
return dao.findAll();
}
public List<Taxe38Detail> findAllOptimized() {
return findAll();
}
@Override
public Pagination<Taxe38Detail> findPaginated(int page, int size) {
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
public Taxe38Detail create(Taxe38Detail item) {
if (item == null) return null;
// check if locale38Detail exists
var locale38Detail = item.getLocale38Detail();
if (locale38Detail != null) {
if(locale38Detail.getId() == null) item.setLocale38Detail(null);
else {
var found = locale38DetailService.findById(locale38Detail.getId());
if (found == null) throw new NotFoundException("Unknown Given Locale38Detail");
item.setLocale38Detail(found);
}
}
// check if tauxTaxe38 exists
var tauxTaxe38 = item.getTauxTaxe38();
if (tauxTaxe38 != null) {
if(tauxTaxe38.getId() == null) item.setTauxTaxe38(null);
else {
var found = tauxTaxe38Service.findById(tauxTaxe38.getId());
if (found == null) throw new NotFoundException("Unknown Given TauxTaxe38");
item.setTauxTaxe38(found);
}
}
// check if taxe38 exists
var taxe38 = item.getTaxe38();
if (taxe38 != null) {
if(taxe38.getId() == null) item.setTaxe38(null);
else {
var found = taxe38Service.findById(taxe38.getId());
if (found == null) throw new NotFoundException("Unknown Given Taxe38");
item.setTaxe38(found);
}
}
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Taxe38Detail> create(List<Taxe38Detail> items) {
List<Taxe38Detail> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public Taxe38Detail update(Taxe38Detail item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown Taxe38Detail To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Taxe38Detail> update(List<Taxe38Detail> items) {
List<Taxe38Detail> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
Taxe38Detail item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(Taxe38Detail item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<Taxe38Detail> items) {
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
public int deleteByLocale38DetailId(Long id){
if (id == null) return 0;
return dao.deleteByLocale38DetailId(id);
}
@Override
public List<Taxe38Detail> findByLocale38DetailId(Long id){
return dao.findByLocale38DetailId(id);
}
@Override
@Transactional(rollbackFor = Exception.class)
public int deleteByTauxTaxe38Id(Long id){
if (id == null) return 0;
return dao.deleteByTauxTaxe38Id(id);
}
@Override
public List<Taxe38Detail> findByTauxTaxe38Id(Long id){
return dao.findByTauxTaxe38Id(id);
}
@Override
@Transactional(rollbackFor = Exception.class)
public int deleteByTaxe38Id(Long id){
if (id == null) return 0;
return dao.deleteByTaxe38Id(id);
}
@Override
public List<Taxe38Detail> findByTaxe38Id(Long id){
return dao.findByTaxe38Id(id);
}
//----------------------------------------------------------
//----------------------------------------------------------
@Autowired private Taxe38DetailDao dao;
@Lazy @Autowired private Locale38DetailService locale38DetailService;
@Lazy @Autowired private TauxTaxe38Service tauxTaxe38Service;
@Lazy @Autowired private Taxe38Service taxe38Service;
}