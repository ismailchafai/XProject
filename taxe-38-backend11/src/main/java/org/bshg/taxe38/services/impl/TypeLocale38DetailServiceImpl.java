package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.TypeLocale38Detail;
import org.bshg.taxe38.dao.TypeLocale38DetailDao;
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
public class TypeLocale38DetailServiceImpl implements TypeLocale38DetailService {
//--------------- FIND -------------------------------------
public TypeLocale38Detail findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<TypeLocale38Detail> findAll() {
return dao.findAll();
}
public List<TypeLocale38Detail> findAllOptimized() {
return dao.findAllOptimized();
}
@Override
public Pagination<TypeLocale38Detail> findPaginated(int page, int size) {
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
public TypeLocale38Detail create(TypeLocale38Detail item) {
if (item == null) return null;
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<TypeLocale38Detail> create(List<TypeLocale38Detail> items) {
List<TypeLocale38Detail> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public TypeLocale38Detail update(TypeLocale38Detail item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown TypeLocale38Detail To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<TypeLocale38Detail> update(List<TypeLocale38Detail> items) {
List<TypeLocale38Detail> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
TypeLocale38Detail item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(TypeLocale38Detail item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<TypeLocale38Detail> items) {
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
@Autowired private TypeLocale38DetailDao dao;
}