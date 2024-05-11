package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.Trim;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface TrimService {
Trim findById(Long id);
List<Trim> findAllOptimized();
List<Trim> findAll();
Pagination<Trim> findPaginated(int page, int size);
Trim create(Trim item);
List<Trim> create(List<Trim> item);
Trim update(Trim item);
List<Trim> update(List<Trim> item);
void deleteById(Long id);
void delete(Trim item);
void delete(List<Trim> items);
void deleteByIdIn(List<Long> ids);
}