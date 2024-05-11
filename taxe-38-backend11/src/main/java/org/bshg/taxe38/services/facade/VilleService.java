package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.Ville;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface VilleService {
Ville findById(Long id);
List<Ville> findAllOptimized();
List<Ville> findAll();
Pagination<Ville> findPaginated(int page, int size);
Ville create(Ville item);
List<Ville> create(List<Ville> item);
Ville update(Ville item);
List<Ville> update(List<Ville> item);
void deleteById(Long id);
void delete(Ville item);
void delete(List<Ville> items);
void deleteByIdIn(List<Long> ids);
}