package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.Rue;
import org.bshg.taxe38.dao.RueDao;
import org.bshg.taxe38.services.facade.RueService;
import org.bshg.taxe38.entity.Quartier;
import org.bshg.taxe38.services.facade.QuartierService;
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
public class RueServiceImpl implements RueService {
//--------------- FIND -------------------------------------
public Rue findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<Rue> findAll() {
return dao.findAll();
}
public List<Rue> findAllOptimized() {
return dao.findAllOptimized();
}
@Override
public Pagination<Rue> findPaginated(int page, int size) {
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
public Rue create(Rue item) {
if (item == null) return null;
// check if quartier exists
var quartier = item.getQuartier();
if (quartier != null) {
if(quartier.getId() == null) item.setQuartier(null);
else {
var found = quartierService.findById(quartier.getId());
if (found == null) throw new NotFoundException("Unknown Given Quartier");
item.setQuartier(found);
}
}
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Rue> create(List<Rue> items) {
List<Rue> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public Rue update(Rue item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown Rue To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Rue> update(List<Rue> items) {
List<Rue> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
Rue item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(Rue item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<Rue> items) {
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
public int deleteByQuartierId(Long id){
if (id == null) return 0;
return dao.deleteByQuartierId(id);
}
@Override
public List<Rue> findByQuartierId(Long id){
return dao.findByQuartierId(id);
}
//----------------------------------------------------------
//----------------------------------------------------------
@Autowired private RueDao dao;
@Lazy @Autowired private QuartierService quartierService;
}