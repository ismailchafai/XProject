package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.Rue;
import org.bshg.taxe38.entity.Quartier;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface RueService {
Rue findById(Long id);
List<Rue> findAllOptimized();
List<Rue> findAll();
Pagination<Rue> findPaginated(int page, int size);
Rue create(Rue item);
List<Rue> create(List<Rue> item);
Rue update(Rue item);
List<Rue> update(List<Rue> item);
void deleteById(Long id);
void delete(Rue item);
void delete(List<Rue> items);
void deleteByIdIn(List<Long> ids);
int deleteByQuartierId(Long id);
List<Rue> findByQuartierId(Long id);
}