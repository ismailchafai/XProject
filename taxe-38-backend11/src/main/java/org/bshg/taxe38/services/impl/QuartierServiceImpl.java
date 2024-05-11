package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.Quartier;
import org.bshg.taxe38.dao.QuartierDao;
import org.bshg.taxe38.services.facade.QuartierService;
import org.bshg.taxe38.entity.Secteur;
import org.bshg.taxe38.services.facade.SecteurService;
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
public class QuartierServiceImpl implements QuartierService {
//--------------- FIND -------------------------------------
public Quartier findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<Quartier> findAll() {
return dao.findAll();
}
public List<Quartier> findAllOptimized() {
return dao.findAllOptimized();
}
@Override
public Pagination<Quartier> findPaginated(int page, int size) {
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
public Quartier create(Quartier item) {
if (item == null) return null;
// check if secteur exists
var secteur = item.getSecteur();
if (secteur != null) {
if(secteur.getId() == null) item.setSecteur(null);
else {
var found = secteurService.findById(secteur.getId());
if (found == null) throw new NotFoundException("Unknown Given Secteur");
item.setSecteur(found);
}
}
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Quartier> create(List<Quartier> items) {
List<Quartier> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public Quartier update(Quartier item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown Quartier To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Quartier> update(List<Quartier> items) {
List<Quartier> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
Quartier item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(Quartier item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<Quartier> items) {
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
public int deleteBySecteurId(Long id){
if (id == null) return 0;
return dao.deleteBySecteurId(id);
}
@Override
public List<Quartier> findBySecteurId(Long id){
return dao.findBySecteurId(id);
}
//----------------------------------------------------------
//----------------------------------------------------------
@Autowired private QuartierDao dao;
@Lazy @Autowired private SecteurService secteurService;
}