package org.bshg.taxe38.services.facade;
import org.bshg.taxe38.entity.Taxe38Detail;
import org.bshg.taxe38.entity.Locale38Detail;
import org.bshg.taxe38.entity.Taxe38;
import org.bshg.taxe38.entity.TauxTaxe38;
import org.bshg.taxe38.zutils.pagination.Pagination;
import java.util.List;
public interface Taxe38DetailService {
Taxe38Detail findById(Long id);
List<Taxe38Detail> findAllOptimized();
List<Taxe38Detail> findAll();
Pagination<Taxe38Detail> findPaginated(int page, int size);
Taxe38Detail create(Taxe38Detail item);
List<Taxe38Detail> create(List<Taxe38Detail> item);
Taxe38Detail update(Taxe38Detail item);
List<Taxe38Detail> update(List<Taxe38Detail> item);
void deleteById(Long id);
void delete(Taxe38Detail item);
void delete(List<Taxe38Detail> items);
void deleteByIdIn(List<Long> ids);
int deleteByLocale38DetailId(Long id);
List<Taxe38Detail> findByLocale38DetailId(Long id);
int deleteByTauxTaxe38Id(Long id);
List<Taxe38Detail> findByTauxTaxe38Id(Long id);
int deleteByTaxe38Id(Long id);
List<Taxe38Detail> findByTaxe38Id(Long id);
}