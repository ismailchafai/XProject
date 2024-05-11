package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.Redevable;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface RedevableService {
Redevable findById(Long id);
List<Redevable> findAllOptimized();
List<Redevable> findAll();
Pagination<Redevable> findPaginated(int page, int size);
Redevable create(Redevable item);
List<Redevable> create(List<Redevable> item);
Redevable update(Redevable item);
List<Redevable> update(List<Redevable> item);
void deleteById(Long id);
void delete(Redevable item);
void delete(List<Redevable> items);
void deleteByIdIn(List<Long> ids);

    Redevable findRedevableByUsername(String username);
}