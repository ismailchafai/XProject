package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.Secteur;
import org.bshg.taxe38.entity.Ville;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface SecteurService {
Secteur findById(Long id);
List<Secteur> findAllOptimized();
List<Secteur> findAll();
Pagination<Secteur> findPaginated(int page, int size);
Secteur create(Secteur item);
List<Secteur> create(List<Secteur> item);
Secteur update(Secteur item);
List<Secteur> update(List<Secteur> item);
void deleteById(Long id);
void delete(Secteur item);
void delete(List<Secteur> items);
void deleteByIdIn(List<Long> ids);
int deleteByVilleId(Long id);
List<Secteur> findByVilleId(Long id);
}