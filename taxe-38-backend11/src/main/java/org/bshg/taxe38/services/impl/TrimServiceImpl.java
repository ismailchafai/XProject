package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.Trim;
import org.bshg.taxe38.dao.TrimDao;
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
public class TrimServiceImpl implements TrimService {
//--------------- FIND -------------------------------------
public Trim findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<Trim> findAll() {
return dao.findAll();
}
public List<Trim> findAllOptimized() {
return dao.findAllOptimized();
}
@Override
public Pagination<Trim> findPaginated(int page, int size) {
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
public Trim create(Trim item) {
if (item == null) return null;
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Trim> create(List<Trim> items) {
List<Trim> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public Trim update(Trim item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown Trim To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Trim> update(List<Trim> items) {
List<Trim> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
Trim item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(Trim item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<Trim> items) {
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
@Autowired private TrimDao dao;
}