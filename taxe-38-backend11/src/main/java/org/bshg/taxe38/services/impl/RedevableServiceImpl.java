package org.bshg.taxe38.services.impl;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.dao.RedevableDao;
import org.bshg.taxe38.services.facade.RedevableService;
import org.bshg.taxe38.zsecurity.permissions.RoleEnum;
import org.bshg.taxe38.zsecurity.service.facade.AppUserService;
import org.bshg.taxe38.zutils.pagination.Pagination;
import org.bshg.taxe38.exceptions.NotFoundException;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.ArrayList;
@Service
public class RedevableServiceImpl implements RedevableService {
//--------------- FIND -------------------------------------
public Redevable findById(Long id) {
return dao.findById(id).orElse(null);
}
public List<Redevable> findAll() {
return dao.findAll();
}
public List<Redevable> findAllOptimized() {
return findAll();
}
@Override
public Pagination<Redevable> findPaginated(int page, int size) {
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
public Redevable create(Redevable item) {
if (item == null) return null;
item.setRoles(List.of(RoleEnum.USER.getRole()));
appUserService.save(item);
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Redevable> create(List<Redevable> items) {
List<Redevable> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(create(it)));
return result;
}
//--------------- UPDATE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public Redevable update(Redevable item) {
if (item == null || item.getId() == null) return null;
var oldItem = findById(item.getId());
if (oldItem == null) throw new NotFoundException("Unknown Redevable To Be Updated!");
return dao.save(item);
}
@Transactional(rollbackFor = Exception.class)
public List<Redevable> update(List<Redevable> items) {
List<Redevable> result = new ArrayList<>();
if (items == null || items.isEmpty()) return result;
items.forEach(it -> result.add(update(it)));
return result;
}
//--------------- DELETE -----------------------------------
@Transactional(rollbackFor = Exception.class)
public void deleteById(Long id) {
Redevable item = findById(id);
if (item != null) delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(Redevable item) {
dao.delete(item);
}
@Transactional(rollbackFor = Exception.class)
public void delete(List<Redevable> items) {
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

    @Override
    public Redevable findRedevableByUsername(String username) {
        return dao.findRedevableByUsername(username);
    }
@Autowired private RedevableDao dao;
@Autowired private AppUserService appUserService;
}