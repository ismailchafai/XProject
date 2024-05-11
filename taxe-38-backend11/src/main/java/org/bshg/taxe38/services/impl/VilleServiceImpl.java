package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.Ville;
import org.bshg.taxe38.dao.VilleDao;
import org.bshg.taxe38.services.facade.VilleService;
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
public class VilleServiceImpl implements VilleService {
//--------------- FIND -------------------------------------
public Ville findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<Ville> findAll() {
return dao.findAll();
}
public List<Ville> findAllOptimized() {
return dao.findAllOptimized();
}
@Override
public Pagination<Ville> findPaginated(int page, int size) {
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
public Ville create(Ville item) {
if (item == null) return null;
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Ville> create(List<Ville> items) {
List<Ville> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public Ville update(Ville item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown Ville To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Ville> update(List<Ville> items) {
List<Ville> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
Ville item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(Ville item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<Ville> items) {
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
@Autowired private VilleDao dao;
}