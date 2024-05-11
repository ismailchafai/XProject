package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.CategorieLocale;
import org.bshg.taxe38.dao.CategorieLocaleDao;
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
public class CategorieLocaleServiceImpl implements CategorieLocaleService {
//--------------- FIND -------------------------------------
public CategorieLocale findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<CategorieLocale> findAll() {
return dao.findAll();
}
public List<CategorieLocale> findAllOptimized() {
return dao.findAllOptimized();
}
@Override
public Pagination<CategorieLocale> findPaginated(int page, int size) {
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
public CategorieLocale create(CategorieLocale item) {
if (item == null) return null;
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<CategorieLocale> create(List<CategorieLocale> items) {
List<CategorieLocale> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public CategorieLocale update(CategorieLocale item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown CategorieLocale To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<CategorieLocale> update(List<CategorieLocale> items) {
List<CategorieLocale> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
CategorieLocale item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(CategorieLocale item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<CategorieLocale> items) {
if (items == null || items.isEmpty()) return;
items.forEach(this::delete);
}
@Transactional(rollbackFor = Exception.class)
public void deleteByIdIn(List<Long> ids) {
dao.deleteByIdIn(ids);
}
//--------------- FIND AND DELETE BYs ----------------------
//----------------------------------------------------------
//----------------------------------------------------------
@Autowired private CategorieLocaleDao dao;
}