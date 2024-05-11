package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.Quartier;
import org.bshg.taxe38.entity.Secteur;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface QuartierService {
Quartier findById(Long id);
List<Quartier> findAllOptimized();
List<Quartier> findAll();
Pagination<Quartier> findPaginated(int page, int size);
Quartier create(Quartier item);
List<Quartier> create(List<Quartier> item);
Quartier update(Quartier item);
List<Quartier> update(List<Quartier> item);
void deleteById(Long id);
void delete(Quartier item);
void delete(List<Quartier> items);
void deleteByIdIn(List<Long> ids);
int deleteBySecteurId(Long id);
List<Quartier> findBySecteurId(Long id);
}